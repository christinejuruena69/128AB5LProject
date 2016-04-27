    // var chris = randomList._collection.find().fetch();
Meteor.subscribe('RandomizerResult');

Template.ClassView.helpers({
	randomList : function () {
            return RandomizerResult.find();
	}

});
Template.ClassView.events({});
/*****************************************************************************/
/* ClassView: Lifecycle Hooks */
/*****************************************************************************/
Template.ClassView.onCreated(function () {});
Template.ClassView.onRendered(function () {
	// console.log(chris);


});
Template.ClassView.onDestroyed(function () {});
