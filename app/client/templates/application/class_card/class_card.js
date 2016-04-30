/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.ClassCard.events({
    // 'mouseover .classcard': function(event, template) {
    //     $(event.target).toggleClass('change-background');
    //     $(event.target).find('p.course-title, h4.students').toggleClass('text-opacity');
    //     // $(event.target).find('h4.students').toggleClass('text-opacity');
    //
    // },
    // 'mouseout .classcard': function(event, template) {
    //     $(event.target).toggleClass('change-background');
    //     $(event.target).find('p.course-title, h4.students').toggleClass('text-opacity');
    //     // $(event.target).find('p.course-title').toggleClass('text-opacity');
    //     // $(event.target).find('h4.students').toggleClass('text-opacity');
    // },
    'mouseover .to-shake': function(event, template) {
        $(event.target).toggleClass('shake');
    },
    'mouseout .to-shake': function(event, template) {
        $(event.target).toggleClass('shake');
    },
    'click button#DeleteClass': function (event, template) {
        var message = "Delete " + this.courseCode + "?";
        var verificationPrompt1 = confirm(message);
        if (verificationPrompt1 == true) {
            var verificationPrompt2 = confirm("Are you sure you want to delete this class?");
            if (verificationPrompt2 == true) {
                Meteor.call('Admin/deleteClass', this._id, function (error, result) {
                    // display the error to the user and abort
                    if (error) {
                        return notify(error.reason, 'bad');
                    }
                    else {
                        return notify('Successfully Deleted Class', 'good');
                    }
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
