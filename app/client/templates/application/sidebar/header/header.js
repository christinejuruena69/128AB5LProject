
/*****************************************************************************/
/* Header: Event Handlers */
/*****************************************************************************/
Template.Header.events({
    'click #sidebar-toggle': function() {
        $("#wrapper").toggleClass("toggled");
    }
});


/*****************************************************************************/
/* Header: Helpers */
/*****************************************************************************/
Template.Header.helpers({
   
});
/*****************************************************************************/
/* Header: Lifecycle Hooks */
/*****************************************************************************/

Template.Header.onCreated(function () {});
Template.Header.onRendered(function () {});
Template.Header.onDestroyed(function () {});
