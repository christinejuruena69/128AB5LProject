
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
        Session.set('adminAccount', false);
        Session.set('teacherAccount', true);
        return true;
    }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.ViewTeacherAccount.onCreated(function () {
});

Template.ViewTeacherAccount.onRendered(function () {
});

Template.ViewTeacherAccount.onDestroyed(function () {
});
