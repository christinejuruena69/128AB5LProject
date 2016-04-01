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
});
/*****************************************************************************/
/* MainClassView: Helpers */
/*****************************************************************************/
Template.MainClassView.helpers({
	studentslist: studentsData   
});
/*****************************************************************************/
/* MainClassView: Lifecycle Hooks */
/*****************************************************************************/

Template.MainClassView.onCreated(function () {});
Template.MainClassView.onRendered(function () {});
Template.MainClassView.onDestroyed(function () {});
