/*****************************************************************************/
/* RegisterForm: Event Handlers */
/*****************************************************************************/

Template.RegisterForm.events({
    'submit form': function(event, template) {
        var userData = {};

        event.preventDefault();

        if(template.find('#password1').value !==
            template.find('#password2').value) {
                alert('Passwords don\'t match');
                return false;
        }

        userData.username = template.find('#username').value;
        userData.fullName = template.find('#Name').value;
        // userData.type = template.find('#username').value;

        // event.stopPropagation();
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
