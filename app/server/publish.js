/*
    Add publications here
*/

Meteor.publish('myClasses', function() {
    // like return Class.find(flags);
    return Class.find({ lecturer: this.userId });
});

Meteor.publish('oneClass', function(id) {

    var user = Meteor.users.findOne({ _id: this.userId});

    if(user && user.profile.type === 'Admin') {
        return Class.find({ lecturer: id });
    }
    else {
        return;
    }
});

Meteor.publish('getViewStates', function() {

    return View.find({ lecturer: this.userId });
});

Meteor.publish('allUserData', function (user) {

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

Meteor.publish('class', function(){
    var currentUser = this._id;
    return Class.find({ _id: currentUser })
});
