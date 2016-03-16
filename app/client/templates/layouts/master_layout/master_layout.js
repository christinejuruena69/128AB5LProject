Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
    'click #logout': function(event) {
        event.preventDefault();
        Meteor.logout();
        Router.go('/login');
    }
});
