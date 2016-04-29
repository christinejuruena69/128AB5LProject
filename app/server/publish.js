/*****************************************************************************/
/* Publications: Classes */
/*****************************************************************************/

Meteor.publish('myClasses', function() {
    // like return Class.find(flags);
    return Class.find({ lecturer: this.userId });
});

Meteor.publish('oneClass', function(id) {

    var user = Meteor.users.findOne({ _id: this.userId});

    if(user) {
        return Class.find({ _id: id });
    }
    else {
        return;
    }
});

Meteor.publish('teacherClasses', function(){
    return Class.find();
});

/*****************************************************************************/
/* Publications: Users/ Accounts */
/*****************************************************************************/

Meteor.publish('oneUser', function(id) {

    var user = Meteor.users.findOne({ _id: this.userId});

    if(user && user.profile.type === 'Admin') {
        return Meteor.users.find({ _id: id });
    }
    else {
        return;
    }
});

Meteor.publish('allUserData', function (user) {
    // Only administrator os allowed to have access to all user data
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

/*****************************************************************************/
/* Publications: Views */
/*****************************************************************************/

Meteor.publish('activeViews', function() {
    return View.find({active: true});
});

Meteor.publish('getViewStates', function() {
    return View.find({ lecturer: this.userId });
});

Meteor.publish('oneView', function(id) {
    return View.find({_id: id});
});

Meteor.publish('RandomizerResult', function() {
    return RandomizerResult.find();
});

/*****************************************************************************/
/* Publications: Logs */
/*****************************************************************************/

Meteor.publish('myLogs', function(id) {

    var user = Meteor.users.findOne({ _id: this.userId});

    if(user) {
        return Log.find({ userId: this.userId });
    }
    else {
        return;
    }
});
