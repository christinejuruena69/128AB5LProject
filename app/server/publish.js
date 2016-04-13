/*
    Add publications here
*/

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

Meteor.publish('oneUser', function(id) {

    var user = Meteor.users.findOne({ _id: this.userId});

    if(user && user.profile.type === 'Admin') {
        return Meteor.users.find({ _id: id });
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
    return Class.find();
});

Meteor.publish('oneView', function(id) {

    var user = Meteor.users.findOne({ _id: this.userId});

    if(user && user.profile.type === 'Admin') {
        return View.find({ lecturer: id });
    }
    else {
        return;
    }

});
