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
            {'_id':Meteor.user()._id},
            {$set:{'emails' : {'address': userDetails.email}}}
        );

        // change profile.fullName
        Meteor.users.update(
            {'_id':Meteor.user()._id},
            {$set:{'profile':{'fullName': userDetails.fullname}}}
        );
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
        }
    });
}
