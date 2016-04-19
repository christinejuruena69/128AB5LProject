Log = new Mongo.Collection('log');

Schema.LogSchema = new SimpleSchema({
    userId: {
        type: String
    },
    accountType: {
        type: String
    },
    log: {
        type: String
    },
    createdAt: {
        type: Date, //time stamp
        autoValue: function() {
            return new Date();
        }
    }
});

if (Meteor.isServer) {
    Log.allow({
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
    Log.deny({
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
