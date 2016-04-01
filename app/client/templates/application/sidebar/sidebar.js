/*****************************************************************************/
/* SideBar: Event Handlers */
/*****************************************************************************/

Template.SideBar.events({
    'click #sidebar-wrapper': function () {
        $("#wrapper")
            .toggleClass("toggled");
    }
});
/*****************************************************************************/
/* SideBar: Helpers */
/*****************************************************************************/
Template.SideBar.helpers({
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
/* SideBar: Lifecycle Hooks */
/*****************************************************************************/
Template.SideBar.onCreated(function () {
});

Template.SideBar.onRendered(function () {
});

Template.SideBar.onDestroyed(function () {
});
