Templates.editClass.helpers({
	ownPost: function() { 
	return this.userId === Meteor.userId();
	}
});