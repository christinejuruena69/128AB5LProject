var accountsData = [{
    name: 'Reginald Recario',
    username: 'regrecario',
    acounttype: 'Teacher'
}, {
    name: 'REgie Recario',
    username: 'regrecario2',
    acounttype: 'Teacher2'
}, {
    name: 'Yepyep',
    username: 'Yepyep',
    acounttype: 'admin'
}, {
    name: 'Yepyep',
    username: 'Yepyep',
    acounttype: 'admin'
}, {
    name: 'Yepyep',
    username: 'Yepyep',
    acounttype: 'admin'
}, {
    name: 'Yepyep',
    username: 'Yepyep',
    acounttype: 'admin'
}, {
    name: 'Yepyep',
    username: 'Yepyep',
    acounttype: 'admin'
}];

var courseData = [{
    coursecode: 'CMSC128',
    coursetitle: 'Introduction to Software Engineering'
}, {
    coursecode: 'CMSC132',
    coursetitle: 'cOMPUTER aRCHTECTURE'
}, {
    coursecode: 'CMSC170',
    coursetitle: 'Artifcial intelligence'
}, {
    coursecode: 'CMSC125',
    coursetitle: 'operating system'
},{
    coursecode: 'CMSC141',
    coursetitle: 'Stuff'
},{
    coursecode: 'CMSC142',
    coursetitle: 'stuff'
},{
    coursecode: 'CMSC125',
    coursetitle: 'operating system'
},{
    coursecode: 'CMSC125',
    coursetitle: 'operating system'
},{
    coursecode: 'CMSC125',
    coursetitle: 'operating system'
}];

/*****************************************************************************/
/* AccountAndClassCards: Event Handlers */
/*****************************************************************************/
Template.AccountAndClassCards.events({});

/*****************************************************************************/
/* AccountAndClassCards: Helpers */
/*****************************************************************************/
Template.AccountAndClassCards.helpers({
    isTeacher: function() {
        // return true;
        var user = Meteor.user();
        // console.log(user);
        if(!!user || !!user.profile || !!user.profile.type) {
            return ;
        }
        else {
            return user.profile.type === 'Teacher';
        }
    },
    isAdmin: function() {

        var user = Meteor.user();

        if(!!user && !!user.profile && !!user.profile.type) {
            return false;
        }
        else {
            return user.profile.type === 'Admin';
        }

    },
    class: function () {
        return Class.find();
    },
    account: function() {
        return Meteor.users.find();
    }
});

/*****************************************************************************/
/* AccountAndClassCards: Lifecycle Hooks */
/*****************************************************************************/
Template.AccountAndClassCards.onCreated(function () {});
Template.AccountAndClassCards.onRendered(function () {});
Template.AccountAndClassCards.onDestroyed(function () {});
