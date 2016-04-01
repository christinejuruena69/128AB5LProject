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
    userId: {
        type: String
    },
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
    'editClass': function (classId, classToEdit) {
        //Contains two arguments: the ID of the class to edit and the details to update the class with
        Class.update({'_id' : classId}, {$set:classToEdit});
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
            return false;
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
            return true;
        },
        remove: function (userId, doc) {
            return true;
        }
    });
}
