/*****************************************************************************/
/* Notification: Event Handlers */
/*****************************************************************************/
Template.Notification.events({

});

/*****************************************************************************/
/* Notification: Helpers */
/*****************************************************************************/
Template.Notification.helpers({

});

/*****************************************************************************/
/* Notification: Lifecycle Hooks */
/*****************************************************************************/
Template.Notification.onCreated(function () {});

Template.Notification.onRendered(function () {

    var notification = this.data;

    Meteor.setTimeout(function () {
        Notification.remove(notification._id);
    }, 3000);

});

Template.Notification.onDestroyed(function () {

});
