/*****************************************************************************/
/* ClassCard: Event Handlers */
/*****************************************************************************/
Template.ClassCard.events({
    'mouseover p.course-title, h4.students'(event, template) {
        $(event.target).toggleClass('text-opacity');
    },

    'mouseout p.course-title, h4.students'(event, template) {
        $(event.target).toggleClass('text-opacity');
    },

    'mouseover .to-shake'(event, template) {
        $(event.target).toggleClass('shake');
    },

    'mouseout .to-shake'(event, template) {
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
/* ClassCard: Helpers */
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
/* ClassCard: Lifecycle Hooks */
/*****************************************************************************/
Template.ClassCard.onCreated(function () {});
Template.ClassCard.onRendered(function () {});
Template.ClassCard.onDestroyed(function () {});
