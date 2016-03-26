/*
    Add publications here as well as Meteor methods

    @TODO: Add a check for flags

    # Important!

    ### Use lodash as often as possible!

    ### Make sure that publications do the ff:
    1. Check if user is logged in
    2. Check if user is of correct type
    3. Get username of teacher
    4. Return only data that username should see.
    5. Return only as little data as possible (bandwith issues)
*/

Meteor.publish('myClasses', function(flags) {
    // like return Class.find(flags);
});

Meteor.publish('getViewStates', function () {
    var currentUserId = this.userId;
    var currentUser = Meteor.users.findOne ({userId : currentUserId});

    if (!currentUserId) {
        return [];
    }

    if (currentUser.profile.type !== 'teacher') {
        return [];
    }

    return View.find ({ lecturer: currentUser.username });

});

Meteor.publish('getStudentList', function(section, flags) {

});

Meteor.publish('getAccounts', function(flags) {
    // like return Accounts.find(flags);
});

Meteor.publish('getOneViewState', function(section, flags) {

});
