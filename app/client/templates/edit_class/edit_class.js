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
            _id: this.classId
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
/* EditClass: Helpers */
/*****************************************************************************/
Template.EditClass.helpers({
    class: function() {
        return Class.findOne({ userId: Meteor.userId() });
    },
    courseTitle: function() {
        return Class.findOne({ _id:this.classId }).courseTitle;
    },
    courseCode: function() {
        return Class.findOne({ _id:this.classId }).courseCode;
    },
    semester: function() {
        return Class.findOne({ _id:this.classId }).semester;
    },
});

/*****************************************************************************/
/* EditClass: Lifecycle Hooks */
/*****************************************************************************/
Template.EditClass.onCreated(function () {
});

Template.EditClass.onRendered(function () {
    console.log(this.classId);
});

Template.EditClass.onDestroyed(function () {
});
