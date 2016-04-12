Template.CardType.events({
    'click #addClass': function() {
        Router.go('/add-class');
    }
});

Template.CardType.helpers({
    dataType: function() {

        var type = Meteor.users.findOne({ _id: Meteor.userId() }).profile.type;

        return (type === 'Teacher') ? 'Classes' : 'Accounts';
    }
});
