Class = new Mongo.Collection('class');

Schema = {};


// Schema for student
Schema.StudentSchema = new SimpleSchema({
    fullname: {
        type: String
    },
    studentNumber: {
        type: String
    },
    image: {
        type: String,
        optional: true
    },
    nickname: {
        type: String
    },
    birthday: {
        type: Date, //Can be converted to date
        optional: true
    },
    section: {
        type: String
    },
    points: {
        type: Number,
        defaultValue: 0
    },
    bias: {
        type: Number,
        defaultValue: 0
    },
    isBlackListed: {
        type: Boolean,
        defaultValue: false
    }
});

// Schema for the class
Schema.ClassSchema = new SimpleSchema({
    courseTitle: {
        type: String
    },
    courseCode: {
        type: String
    },
    semester: {
        type: String,
        optional: true
    },
    lecturer: {
        type: String
    },
    students: {
        type: [Schema.StudentSchema],
        minCount: 1
    }

});

Class.attachSchema(Schema.ClassSchema);

Meteor.methods({
    'Admin/AddClass': function(classAttributes) {

        var id = Meteor.userId();

        if( id === null){
            throw new Meteor.Error(403, 'Forbidden');
            return ;
        }

        check(classAttributes, {
            courseTitle: String,
            courseCode: String,
            semester: String,
            lecturer: String,
            students: [Schema.StudentSchema]
        });

        // get currently logged in user and lecturer
        var loggedInUser = Meteor.user(),
            lecturer1 = Meteor.users.findOne({
                'profile.fullName': classAttributes.lecturer
            });        

        // if lecturer is in the database
        if( lecturer1.profile.fullName === classAttributes.lecturer ){

            // if currently logged in user is an admin
            if( loggedInUser.profile.type === 'Admin' ){
                
                // change lecturer attribute to its id
                classAttributes.lecturer = lecturer1._id;
                
                var classId = Class.insert(classAttributes);

                return {
                    _id: classId
                };
            }
            else {
                throw new Meteor.Error(403, 'Forbidden');
            }
        }
        else{
            throw new Meteor.Error(404, 'Not Found');
        }
    },

    'User/editClass': function (classId, classToEdit) {
        //Contains two arguments: the ID of the class to edit and the details to update the class with
        var id = Meteor.userId();
        if(id === null || id !== classToEdit.lecturer){
            throw new Meteor.Error(403, 'Forbidden');
            return;
        }
        Class.update({'_id' : classId}, {$set:classToEdit});
    },

    'deleteStudent': function(studentNumber, lecturer, classId){
        
        var id = Meteor.userId();

        //check if a user is loggedin
        if( id === null){
            throw new Meteor.Error(403, 'Forbidden');
            return ;
        }
        
        var loggedInUser = Meteor.user(),
            student = Class.findOne({
                'students':{
                    $elemMatch:{
                        'studentNumber': studentNumber
                    }
                }                    
            });
   
        //check if current user is the lecturer of the class
        if( loggedInUser.profile.fullName === lecturer ){

            //checks if student is in the class list
            if(student._id === classId){
                Class.update(
                    {'_id' : classId}, 
                    {$pull: 
                        { students: 
                            { studentNumber: studentNumber} 
                        } 
                    }, 
                    {multi: true});
            }
            else{
                throw new Meteor.Error(404, 'Not Found');
            }
        }
        else{
            throw new Meteor.Error(403, 'Forbidden');
        }
    },

    'addStudent': function(student, classId){
        var id = Meteor.userId();

        if( id === null ){
            throw new Meteor.Error(403, 'Forbidden');
            return ;
        }
        
        check(student, Schema.StudentSchema);

        var loggedInUser = Meteor.user(),
            classId1 = Class.findOne({
                '_id': classId               
            });

        //check if the class lecturer is the current user and if the current user is of Teacher type    
        if( loggedInUser._id === classId1.lecturer && loggedInUser.profile.type === 'Teacher'){
            Class.update(
                { '_id': classId },
                { $push:
                    {
                        'students': student
                    }
                }
            );
        }
        else{
            throw new Meteor.Error(403, 'Forbidden');
        }
    }
});

if (Meteor.isServer) {

    Class.allow({
        insert: function (userId, doc) {
            var user = Meteor.users.findOne({ _id: userId });
            if( user.profile.type === 'Admin'){
                return true;
            }
            else{
                return false;
            }
        },
        update: function (userId, doc, fieldNames, modifier) {
            var user = Meteor.users.findOne({ _id: userId });
            
            if( user.profile.type === 'Teacher' ){
                return true;
            }
            else{
                return false;
            }
        },
        remove: function (userId, doc) {
            return false;
        }
    });

    Class.deny({
        insert: function (userId, doc) {
            var user = Meteor.users.find({_id: userId});
            if( user.profile.type === 'Admin'){
                return false;
            }
            else{
                return true;
            }
        },
        update: function (userId, doc, fieldNames, modifier) {
            var user = Meteor.users.findOne({ _id: userId });
            
            if( user.profile.type === 'Teacher' ){
                return false;
            }
            else{
                return true;
            }
        },
        remove: function (userId, doc) {
            return true;
        }
    });
}
