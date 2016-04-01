/*****************************************************************************/
/* SideBar: Event Handlers */
/*****************************************************************************/

Template.Sidebar.events({
    'click #sidebar-wrapper': function () {
        $("#wrapper")
            .toggleClass("toggled");
    }
});
/*****************************************************************************/
/* SideBar: Helpers */
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
/* SideBar: Lifecycle Hooks */
/*****************************************************************************/
Template.SideBar.onCreated(function () {
});

Template.SideBar.onRendered(function () {
});

Template.SideBar.onDestroyed(function () {
});
