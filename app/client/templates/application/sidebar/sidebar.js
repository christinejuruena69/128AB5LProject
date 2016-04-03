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
    },
    dataType: function() {

        var type = Meteor.users.findOne({
            _id: Meteor.userId()
        }).profile.type;

        return (type === 'Teacher') ? 'Classes' : 'Accounts';
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
