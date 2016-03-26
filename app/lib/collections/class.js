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

if (Meteor.isServer) {

    Class.allow({
        insert: function (userId, doc) {
            return true;
        },
        update: function (userId, doc, fieldNames, modifier) {
            return true;
        },
        remove: function (userId, doc) {
            return true;
        }
    });
}
else if(Meteor.isClient){
     Class.allow({
        insert: function (userId, doc) {
            return true;
        },
        update: function (userId, doc, fieldNames, modifier) {
            return true;
        },
        remove: function (userId, doc) {
            return true;
        }
    });
}

Meteor.methods({

    'Admin/AddClass': function(classAttributes) {

        // meteor add check 
        // to use the check function
        check(classAttributes, {
            userId: String,
            courseTitle: String,
            semester: String,
            lecturer: String,
            students: [Schema.StudentSchema]
        });

        var user = Meteor.user();

        if( user.profile.type === 'Admin' ){

            var classId = Class.insert(classAttributes);

            return {
                _id: classId
            };
        }
        else {
            return {
                error: 'Access denied.'
            };
        }
    }
});
