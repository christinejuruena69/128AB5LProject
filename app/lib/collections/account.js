Meteor.methods({

    'User/UpdateDetails': function (userDetails) {

        check(userDetails, {
            fullname: String,
            email: String,
            oldPassword: String,
            newPassword: String
        });

        // change password
        Accounts.changePassword(userDetails.oldPassword, userDetails.newPassword, function(error) {

            if (error) {
                throwError(error.reason);
            }
            else {
                Router.go('/');
            }
        });

        // change email
        Meteor.users.update(
            {'_id': Meteor.user()._id},
            {$set:{'emails' : {'address': userDetails.email}}}
        );

        // change profile.fullName
        Meteor.users.update(
            {'_id': Meteor.user()._id},
            {$set:{'profile':{'fullName': userDetails.fullname}}}
        );
    },

    'Admin/DeleteAccount': function(userId) {
        var id = Meteor.userId();

        if (id === null) {
            throw new Meteor.Error(403, 'Forbidden');
            return;
        }

        var loggedInUser = Meteor.user();

        if (loggedInUser.profile.type === 'Admin' &&
            id !== userId){ // Cannot delete own account
            Meteor.users.remove({
                '_id': userId
            });
        }
        else {
            throw new Meteor.Error(403, 'Forbidden');
        }
    }

});

if (Meteor.isServer) {

    Meteor.users.allow({

        update: function (userId, doc) {

            var user = Meteor.users.findOne({ '_id': userId });

            if( user._id === Meteor.userId() ){
                return true;
            }
            else{
                return false;
            }
        },
        remove: function(userId, doc) {
            var user = Meteor.users.find({ _id: userId });
            if (user.profile.type === 'Admin') {
                return true;
            } else {
                return false;
            }
        }
    });

    Meteor.users.deny({
        remove: function(userId, doc) {
            var user = Meteor.users.find({ _id: userId });
            if (user.profile.type === 'Admin') {
                return false;
            } else {
                return true;
            }
        }
    });
}
