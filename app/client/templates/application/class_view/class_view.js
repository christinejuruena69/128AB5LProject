    // var chris = randomList._collection.find().fetch();
// Meteor.subscribe('randomList');

Template.ClassView.helpers({
	randomList : function () {
    var chris = randomList.find();
	console.log(chris);

        return randomList.find();
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
