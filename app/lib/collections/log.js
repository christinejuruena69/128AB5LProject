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
            return !!userId;
        },
        update: function (userId, doc, fieldNames, modifier) {
            return false;
        },
        remove: function (userId, doc) {
            return false;
        }
    });
}
