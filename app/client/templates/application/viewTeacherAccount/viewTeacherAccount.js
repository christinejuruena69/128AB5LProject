
/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.viewTeacherAccount.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/

Template.viewTeacherAccount.helpers({
    loadCourses : function() {
        Session.set('adminAccount', false);
        Session.set('teacherAccount', true);
        return true;
    }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.viewTeacherAccount.onCreated(function () {
});

Template.viewTeacherAccount.onRendered(function () {
});

Template.viewTeacherAccount.onDestroyed(function () {
});
