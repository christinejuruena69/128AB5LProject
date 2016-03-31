Template.AccountHeader.helpers({
    username: function() {
        return Meteor.user().username;
    }
});
Template.AccountHeader.events({});
/*****************************************************************************/
/* AccountHeader: Lifecycle Hooks */
/*****************************************************************************/
Template.AccountHeader.onCreated(function () {});
Template.AccountHeader.onRendered(function () {});
Template.AccountHeader.onDestroyed(function () {});
