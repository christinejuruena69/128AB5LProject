/*****************************************************************************/
/* StudentList: Event Handlers */
/*****************************************************************************/
Template.StudentList.events({
    'click .Delete': function(){
        var studentNumber = this.studentNumber;
        var lecturer = this.lecturer;
        var classId = this.classid;

        Meteor.call('deleteStudent', studentNumber, lecturer, classId, function(error, result) {
        // display the error to the user and abort
        if (error)
            return alert(error.reason);
        });
        
    }
});

/*****************************************************************************/
/* StudentList: Helpers */
/*****************************************************************************/
Template.StudentList.helpers({
});

/*****************************************************************************/
/* StudentList: Lifecycle Hooks */
/*****************************************************************************/
Template.StudentList.onCreated(function () {
});

Template.StudentList.onRendered(function () {
});

Template.StudentList.onDestroyed(function () {
});
