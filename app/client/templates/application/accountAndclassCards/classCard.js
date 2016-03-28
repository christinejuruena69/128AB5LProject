/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.AccountAndclassCards.events({});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.AccountAndclassCards.helpers({
    studentCount: function() {
        return this.studens.length;
    }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.AccountAndclassCards.onCreated(function () {});
Template.AccountAndclassCards.onRendered(function () {});
Template.AccountAndclassCards.onDestroyed(function () {});
