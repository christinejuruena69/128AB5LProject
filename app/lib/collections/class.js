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

        Meteor.call('User/Log', 'Trying to create class');

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
                '_id': classAttributes.lecturer
            });

        // if lecturer is in the database
        if(lecturer1 && lecturer1._id === classAttributes.lecturer ){

            // if currently logged in user is an admin
            if( loggedInUser.profile.type === 'Admin' ){

                var classId = Class.insert(classAttributes);

                if(classId) {
                    Meteor.call('User/Log', 'Admin/AddClass - Success');
                }

                return {
                    _id: classId
                };
            }
            else {
                Meteor.call('User/Log', 'Admin/AddClass - Forbidden');

                throw new Meteor.Error(403, 'Forbidden');
            }
        }
        else {

            Meteor.call('User/Log', 'Admin/AddClass - Lecturer not found');

            throw new Meteor.Error(404, 'Not Found');
        }
    },

    'User/editClass': function (classToEdit) {
        //Contains two arguments: the ID of the class to edit and the details to update the class with
        var id = Meteor.userId();
        if(id === null){
            throw new Meteor.Error(403, 'Forbidden');
            return;
        }
        Class.update({'lecturer' : Meteor.userId(), _id : classToEdit._id}, {$set:classToEdit});
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
                '_id': classId,
                'students':{
                    $elemMatch:{
                        'studentNumber': studentNumber
                    }
                }
            });

        //check if current user is the lecturer of the class
        if( loggedInUser._id === lecturer ){

            //checks if student is in the class list
            if(student._id === classId){
                Class.update(
                    {'_id' : classId},
                    {$pull:
                        { students:
                            { studentNumber: studentNumber}
                        }
                    });
            }
            else {
                throw new Meteor.Error(404, 'Not Found');
            }
        }
        else {
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
        else {
            throw new Meteor.Error(403, 'Forbidden');
        }
    },

    'Teacher/editStudent': function(studentNumber, nickname, section, bias, classId) {
        Class.update(
            { '_id': classId, "students.studentNumber": studentNumber },
            { $set: { "students.$.nickname": nickname, "students.$.section": section, "students.$.bias": bias } }
        );
    }
});

if (Meteor.isServer) {

    Class.allow({
        insert: function (userId, doc) {
            var user = Meteor.users.findOne({ _id: userId });
            if( user.profile.type === 'Admin'){
                return true;
            }
            else {
                return false;
            }
        },
        update: function (userId, doc, fieldNames, modifier) {
            var user = Meteor.users.findOne({ _id: userId });

            if( user.profile.type === 'Teacher' ){
                return true;
            }
            else {
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
            else {
                return true;
            }
        },
        update: function (userId, doc, fieldNames, modifier) {
            var user = Meteor.users.findOne({ _id: userId });

            if( user.profile.type === 'Teacher' ){
                return false;
            }
            else {
                return true;
            }
        },
        remove: function (userId, doc) {
            return true;
        }
    });
}
