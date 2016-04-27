Meteor.subscribe('RandomizerResult');
Template.ClassView.helpers({
    randomList: function () {
        return RandomizerResult.find();
    }
});

Template.ClassView.events({});

/*****************************************************************************/
/* ClassView: Lifecycle Hooks */
/*****************************************************************************/
Template.ClassView.onCreated(function () {});
Template.ClassView.onRendered(function () {});
Template.ClassView.onDestroyed(function () {});
