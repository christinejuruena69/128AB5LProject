/*****************************************************************************/
/* RegisterForm: Event Handlers */
/*****************************************************************************/

Template.RegisterForm.events({
    'submit form': function(event, template) {
        var userData = {};

        // Stop html from going to action
        event.preventDefault();

        // Password verifier
        if(event.target['password1'].value !==
            event.target['password2'].value) {
                alert('Passwords don\'t match');
                return false;
        }

        //Get form data
        userData.username = event.target['username'].value;
        userData.fullName = event.target['Name'].value;
        userData.type = event.target['Account-Type'].value;
        userData.password = event.target['password1'].value;


        console.log(userData);

        return false;
    },
    'click #cancel': function(event, template) {
        event.preventDefault();
        console.log('clicked cancel');
        return false;
    }
});

/*****************************************************************************/
/* RegisterForm: Helpers */
/*****************************************************************************/

Template.RegisterForm.helpers({

});

/*****************************************************************************/
/* RegisterForm: Lifecycle Hooks */
/*****************************************************************************/
Template.RegisterForm.onCreated(function () {});
Template.RegisterForm.onRendered(function () {});
Template.RegisterForm.onDestroyed(function () {});
