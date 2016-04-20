/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.ClassCard.events({
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

            // re-route to home if success
            Router.go('/');
        });
    }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.ClassCard.helpers({
    studentCount: function() {
        return this.studens.length;
    },
    class: function() {
        return Class.findOne({ userId: Meteor.userId() });
    }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.ClassCard.onCreated(function () {});
Template.ClassCard.onRendered(function () {});
Template.ClassCard.onDestroyed(function () {});
