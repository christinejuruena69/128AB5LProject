/*****************************************************************************/
/* StudentList: Event Handlers */
/*****************************************************************************/
Template.StudentList.events({
    
    'click .up': function() {
        $('.spinner input').val(parseInt($('.spinner input').val(), 10) + 1);
    },
    'click .down': function() {
        $('.spinner input').val(parseInt($('.spinner input').val(), 10) - 1);
    }
});

/*****************************************************************************/
/* StudentList: Helpers */
/*****************************************************************************/
Template.StudentList.helpers({});

/*****************************************************************************/
/* StudentList: Lifecycle Hooks */
/*****************************************************************************/
Template.StudentList.onCreated(function() {});

Template.StudentList.onRendered(function() {});

Template.StudentList.onDestroyed(function() {});