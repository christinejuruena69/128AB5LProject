Template.AccountCard.helpers({

});
Template.AccountCard.events({
    'click #deleteAccount': function() {
        var message = "Delete " + this.profile.fullName + "?",
            classPool = Class.findOne({
            lecturer: this._id
        });

        var verificationPrompt1 = confirm(message);
        if(verificationPrompt1 == true){
            var verificationPrompt2 = confirm("Deleting a Teacher Account will also delete classes. \nAre you sure you want to delete?");
            if (verificationPrompt2 == true) {
                while(classPool != undefined){
                    Meteor.call('Admin/deleteClass', classPool._id, function(error, result) {
                        if (error)
                            return alert(error.reason);
                    });
                    classPool = Class.findOne({
                        lecturer: this._id
                    });
                }

                Meteor.call('Admin/DeleteAccount', this._id, function(error, result) {
                    if (error)
                        return alert(error.reason);
                });

            };
        }
    }
});
/*****************************************************************************/
/* AccountCard: Lifecycle Hooks */
/*****************************************************************************/
Template.AccountCard.onCreated(function () {
    Meteor.subscribe('teacherClasses');
});
Template.AccountCard.onRendered(function () {});
Template.AccountCard.onDestroyed(function () {});
