/*****************************************************************************/
/* SideBar: Event Handlers */
/*****************************************************************************/
Template.SideBar.events({
	'click #sidebar-wrapper': function() {
		$("#wrapper").toggleClass("toggled");
	}
});

/*****************************************************************************/
/* SideBar: Helpers */
/*****************************************************************************/
Template.SideBar.helpers({
});

/*****************************************************************************/
/* SideBar: Lifecycle Hooks */
/*****************************************************************************/
Template.SideBar.onCreated(function () {
});

Template.SideBar.onRendered(function () {
});

Template.SideBar.onDestroyed(function () {
});
