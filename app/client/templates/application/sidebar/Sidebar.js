/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Sidebar.events({
    'click #sidebar-wrapper': function () {
        $("#wrapper")
            .toggleClass("toggled");
    }
});
/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Sidebar.helpers({});
/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Sidebar.onCreated(function () {});
Template.Sidebar.onRendered(function () {});
Template.Sidebar.onDestroyed(function () {});
