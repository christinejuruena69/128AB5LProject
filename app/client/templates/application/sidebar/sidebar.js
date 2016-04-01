/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Sidebar.events({
    'click #sidebar-wrapper': function () {
        $("#wrapper")
            .toggleClass("toggled");
    }
});
/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Sidebar.helpers({
    username: function() {
        if(Meteor.user() && Meteor.user().username) {
            return Meteor.user().username;
        }
        else {
            return "Not logged in";
        }
    }
});
/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Sidebar.onCreated(function () {});
Template.Sidebar.onRendered(function () {});
Template.Sidebar.onDestroyed(function () {});
