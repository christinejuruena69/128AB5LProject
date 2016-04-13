Template.Header.events({
    'click #sidebar-toggle': function() {
        $("#wrapper").toggleClass("toggled");
    },
    'click .logout-button': function(event) {
        event.preventDefault();
        Meteor.logout();
    }
});

Template.Header.helpers({
	username: function() {
        return Meteor.user().username;
    },
    accountType: function() {
        return Meteor.user().profile.type;
    }
});
