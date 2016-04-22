/*****************************************************************************/
/* EditClass: Event Handlers */
/*****************************************************************************/
Template.EditClass.events({
    'submit form': function (e, template) {
        console.log('Submitted');
        event.preventDefault();
        // Stop html from going to action

        //Get form data
        var editedClass = {
            courseTitle: $(e.target).find('[name=courseTitle]').val(),
            courseCode: $(e.target).find('[name=courseCode]').val(),
            semester: $(e.target).find('[name=semester]').val(),
            _id: this._id
        };

        Meteor.call('User/editClass', editedClass, function(error, result){
            // alert if error
            if(error){
                notify(error.reason, 'bad');
                return throwError(error.reason);
            }

            var successNotif = 'Successfully edited '
                + editedClass.courseCode + ': '
                + editedClass.courseTitle;

            notify(successNotif, 'good');

        });
    }
});

/*****************************************************************************/
/* EditClass: Helpers */
/*****************************************************************************/
Template.EditClass.helpers({
    currentClass: function() {
        return Class.findOne({ _id: Template.data._id });
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
