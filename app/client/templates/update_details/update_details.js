// Projects = new Meteor.Collection('projects');

Template.UpdateDetails.onCreated(function() {
    Session.set('updateDetailsErrors', {});
});

Template.UpdateDetails.events({

    'submit form': function(e) {

        e.preventDefault();

        var userDetails = {
            fullname: $(e.target).find('[name=fullname]').val(),
            email: $(e.target).find('[name=email]').val(),
            oldPassword: $(e.target).find('[name=oldPassword]').val(),
            newPassword: $(e.target).find('[name=newPassword]').val()
        };

        // get current user
        var user = Meteor.user();

        // to avoid passing null value
        if( userDetails.fullname === null ){
            userDetails.fullname = user.profile.fullName;
        }
        if( userDetails.email === null ){
            userDetails.email = user.emails.address;
        }
        if( userDetails.oldPassword === null ){
            userDetails.oldPassword = user.password;
        }
        if( userDetails.newPassword === null ){
            userDetails.newPassword = user.password;
        }

        Meteor.call('User/UpdateDetails', userDetails, function(error) {

            if (error) {
                throwError(error.reason);
                console.log('Error');
            }
            else {
                Router.go('/');
                console.log('Success');
            }
        });
    }
});
