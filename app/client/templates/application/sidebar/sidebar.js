/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.sideBar.events({
	'click #sidebar-wrapper': function() {
		$("#wrapper").toggleClass("toggled");
	}
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.sideBar.helpers({
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.sideBar.onCreated(function () {
});

Template.sideBar.onRendered(function () {
});

Template.sideBar.onDestroyed(function () {
});
