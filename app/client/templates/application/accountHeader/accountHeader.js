Template.AccountHeader.helpers({
    username: function() {
        return Meteor.user().username;
    },
    accountType: function() {
        return Meteor.user().profile.type;
    }
});
Template.AccountHeader.events({});
/*****************************************************************************/
/* AccountHeader: Lifecycle Hooks */
/*****************************************************************************/
Template.AccountHeader.onCreated(function () {});
Template.AccountHeader.onRendered(function () {});
Template.AccountHeader.onDestroyed(function () {});
