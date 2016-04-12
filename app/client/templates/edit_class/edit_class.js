/*****************************************************************************/
/* EditClass: Event Handlers */
/*****************************************************************************/
Template.EditClass.events({
    'submit form': function (event, template) {
        console.log('Submitted');
        event.preventDefault();
        // Stop html from going to action

        //Get form data
        var editedClass = {},
            courseTitle = event.target['courseTitle'].value,
            courseCode = event.target['courseCode'].value,
            semester = event.target['semester'].value;

        Meteor.call('User/editClass', editedClass, function(error, result){

            // alert if error
            if(error){
                return throwError(error.reason);
            }

            // re-route to home if success
            Router.go('/');
        });
    }
});

/*****************************************************************************/
/* EditClass: Helpers */
/*****************************************************************************/
Template.EditClass.helpers({
    class: function() {
        return Class.findOne({ userId: Meteor.userId() });
    }
});

/*****************************************************************************/
/* EditClass: Lifecycle Hooks */
/*****************************************************************************/
Template.EditClass.onCreated(function () {
});

Template.EditClass.onRendered(function () {
});

Template.EditClass.onDestroyed(function () {
});
