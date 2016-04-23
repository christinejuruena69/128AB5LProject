/*****************************************************************************/
/* AccountAndClassCards: Event Handlers */
/*****************************************************************************/
Template.AccountAndClassCards.events({});

/*****************************************************************************/
/* AccountAndClassCards: Helpers */
/*****************************************************************************/
Template.AccountAndClassCards.helpers({
    isTeacher: function() {

        var type = Meteor.users.findOne({_id: Meteor.userId()}).profile.type;

        return !!(type === 'Teacher');
    },
    isAdmin: function() {

        var type = Meteor.users.findOne({_id: Meteor.userId()}).profile.type;

        return !!(type === 'Admin');
    },
    class: function () {

        return Class.find();
    },
    account: function() {

        return Meteor.users.find({
            _id: {
                $ne: Meteor.userId()
            }
        });
    }
});

/*****************************************************************************/
/* AccountAndClassCards: Lifecycle Hooks */
/*****************************************************************************/
Template.AccountAndClassCards.onCreated(function () {});
Template.AccountAndClassCards.onRendered(function () {});
Template.AccountAndClassCards.onDestroyed(function () {});
