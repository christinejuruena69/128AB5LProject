/*****************************************************************************/
/* Notifications: Event Handlers */
/*****************************************************************************/
Template.Notifications.events({
});

/*****************************************************************************/
/* Notifications: Helpers */
/*****************************************************************************/
Template.Notifications.helpers({
    notifications: function() {
        return Notification.find();
    }
});

/*****************************************************************************/
/* Notifications: Lifecycle Hooks */
/*****************************************************************************/
Template.Notifications.onCreated(function () {
});

Template.Notifications.onRendered(function () {
});

Template.Notifications.onDestroyed(function () {
});
