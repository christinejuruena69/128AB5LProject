/*****************************************************************************/
/* LoginForm: Event Handlers */
/*****************************************************************************/
Template.LoginForm.events({
    'submit form': function(event) {
        var userData = {};
        event.preventDefault();

        userData.username = event.target['username'].value;
        userData.password = event.target['password'].value;

        Meteor.loginWithPassword(userData.username, userData.password, function(err) {
            if(err) {
                return console.log(err.reason);
            }
            console.log('success!');

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
