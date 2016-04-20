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

Meteor.methods({
    'User/Log': function(log) {

        check(log, String);
        check(Meteor.userId(), String);

        var userId = Meteor.userId(),
            accountType;

        if(userId) {

            accountType = Meteor.users.findOne({ _id: userId })
                        .profile.type;

            Log.insert({
                userId,
                accountType,
                log
            });
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
