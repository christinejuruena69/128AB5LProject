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
        return Meteor.user().username;
    },
    accountType: function() {
        return Meteor.user().profile.type;
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
