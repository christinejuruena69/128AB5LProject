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

Meteor.publish('myClasses', function() {
    // like return Class.find(flags);
    return Class.find({ lecturer: this.userId });

});

Meteor.publish('getViewStates', function() {

    return View.find({ lecturer: this.userId });
});

// Meteor.publish("userData", function () {
//
//     return Meteor.users.find({_id: this.userId},
//         {_id: 1, username: 1, profile: 1}
//     );
// });
Meteor.publish("allUserData", function (user) {

    var user = Meteor.users.findOne({ _id: this.userId});

    if(user && user.profile.type === 'Admin') {
        return Meteor.users.find({},
            {fields: {_id: 1, username: 1, profile: 1}}
        );
    }
    else {
        return;
    }
});
Meteor.publish('getOneViewState', function(section, flags) {

});
