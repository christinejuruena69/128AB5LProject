/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
    Meteor.subscribe('myClasses');
    Meteor.subscribe('allUserData');
    Meteor.subscribe('getViewStates');
    Meteor.subscribe('myLogs');
});

Template.Home.onRendered(function () {});

Template.Home.onDestroyed(function () {});
