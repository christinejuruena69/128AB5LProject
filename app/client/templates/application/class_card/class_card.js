/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.ClassCard.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.ClassCard.helpers({
    studentCount: function() {
        return this.studens.length;
    },
    class: function() {
        return Class.findOne({ userId: Meteor.userId() });
    }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.ClassCard.onCreated(function () {});
Template.ClassCard.onRendered(function () {});
Template.ClassCard.onDestroyed(function () {});
