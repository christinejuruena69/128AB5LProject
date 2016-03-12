Class = new Mongo.Collection('class');

// Schema for student
StudentSchema = new SimpleSchema({
    fullname: {
        type: String
    },
    studentNumber: {
        type: String
    }
});

// Schema for the class
ClassSchema = new SimpleSchema({
    courseTitle: {
        type: String
    },
    lecturer: {
        type: String
    },
    students: {
        type: [StudentSchema],
        minCount: 1
    }

});

Class.attachSchema(ClassSchema);

if (Meteor.isServer) {
    Class.allow({
        insert: function (userId, doc) {
            return false;
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
