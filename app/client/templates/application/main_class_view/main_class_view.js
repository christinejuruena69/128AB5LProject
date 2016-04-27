Meteor.subscribe('RandomizerResult');

var studentsData = [{
    text: 'Samantha Marasigan'
}, {
    text: 'Rohana Monzon'
}, {
    text: 'Wendi Angeli Meniolas'
}, {
    text: 'Ricka Faye Sison'
}];
/*****************************************************************************/
/* MainClassView: Event Handlers */
/*****************************************************************************/
Template.MainClassView.events({
  'click .cards': function() {
    $('.cards').toggleClass('flipped');
  }
  
});
/*****************************************************************************/
/* MainClassView: Helpers */
/*****************************************************************************/
Template.MainClassView.helpers({
	// studentslist: studentsData,

   randomList : function () {
		console.log(RandomizerResult.find({}));
            return RandomizerResult.find({});
	}
});
/*****************************************************************************/
/* MainClassView: Lifecycle Hooks */
/*****************************************************************************/

Template.MainClassView.onCreated(function () {});
Template.MainClassView.onRendered(function () {});
Template.MainClassView.onDestroyed(function () {});
