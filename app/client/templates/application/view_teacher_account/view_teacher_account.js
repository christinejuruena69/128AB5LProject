
/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.ViewTeacherAccount.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/

Template.ViewTeacherAccount.helpers({
    loadCourses : function() {
        return false;
    },
    classes: function(){
        return Class.find({
            lecturer: this._id
        });
    }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.ViewTeacherAccount.onCreated(function () {
    Meteor.subscribe('teacherClasses');
});

Template.ViewTeacherAccount.onRendered(function () {
});

Template.ViewTeacherAccount.onDestroyed(function () {
});
