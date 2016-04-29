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
  },
    'click button#DeleteClass': function() {
        var message = "Delete " + this.courseCode + "?";
        
        var verificationPrompt1 = confirm(message);
        if(verificationPrompt1 == true){
            var verificationPrompt2 = confirm("Are you sure you want to delete this class?");
            if (verificationPrompt2 == true) {
                Meteor.call('Admin/deleteClass', this._id, function(error, result) {
                    // display the error to the user and abort
                    if (error)
                    return alert(error.reason);
                });
            };
        }
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
    },
    userType: function() {
        var loggedInUser = Meteor.user();
        if(loggedInUser.profile.type === 'Admin'){
            return true;
        }
        else {
            return false;
        }
    }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.ClassCard.onCreated(function () {});
Template.ClassCard.onRendered(function () {});
Template.ClassCard.onDestroyed(function () {});
