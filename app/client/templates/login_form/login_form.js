/*****************************************************************************/
/* LoginForm: Event Handlers */
/*****************************************************************************/
Template.LoginForm.events({
    'submit form': function(event) {
        var userData = {};

        // Stop html from going to action
        event.preventDefault();

        //Get form data
        userData.username = event.target['username'].value;
        userData.password = event.target['password'].value;

        // console.log(userData);
        Meteor.loginWithPassword(userData.username, userData.password, function(err) {
            if(err) {
                return console.log(err.reason);
            }
            console.log('success!');
            // Redirect user to index page
            Router.go('/');
        });

        return false;
    },
});
/*****************************************************************************/
/* LoginForm: Helpers */
/*****************************************************************************/
Template.LoginForm.helpers({});
/*****************************************************************************/
/* LoginForm: Lifecycle Hooks */
/*****************************************************************************/
Template.LoginForm.onCreated(function () {});
Template.LoginForm.onRendered(function () {});
Template.LoginForm.onDestroyed(function () {});
