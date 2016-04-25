/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.ClassCard.events({
  'mouseover .classcard': function() {
    $('.to-shake').toggleClass('shake');
    $('p.course-title').toggleClass('text-opacity');
    $('h4.students').toggleClass('text-opacity');
  },
  'mouseout .classcard': function() {
    $('.to-shake').toggleClass('shake');
    $('p.course-title').toggleClass('text-opacity');
    $('h4.students').toggleClass('text-opacity');
  },
  'mouseover .to-shake': function() {
    $('.to-shake').toggleClass('shake');
    $('p.course-title').toggleClass('text-opacity');
    $('h4.students').toggleClass('text-opacity');
    $('div.classcard.col-md-9.col-sm-9.col-xs-9').toggleClass('change-background');
  },
  'mouseout .to-shake': function() {
    $('.to-shake').toggleClass('shake');
    $('p.course-title').toggleClass('text-opacity');
    $('h4.students').toggleClass('text-opacity');
    $('div.classcard').toggleClass('change-background');
  }

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
