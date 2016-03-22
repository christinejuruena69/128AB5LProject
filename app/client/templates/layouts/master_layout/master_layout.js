Template.masterLayout.helpers({
});

Template.masterLayout.events({
    'click #logout': function(event) {
        event.preventDefault();
        Meteor.logout();
        Router.go('/login');
    }
});
