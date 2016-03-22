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
}];

/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.accountAndclassCards.events({});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.accountAndclassCards.helpers({
    // data : empty,
    determineUser: function () {
        if (Session.get('teacherAccount')) {
            // data: courseData;
            // determineData();
            return true;
        } else {
            // determineData();
            return false;
        }
    },
    data: function () {
        // alert(userdata);
        if (Session.get('teacherAccount')) {
            return courseData;
        } else return accountsData;
    }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.accountAndclassCards.onCreated(function () {});
Template.accountAndclassCards.onRendered(function () {});
Template.accountAndclassCards.onDestroyed(function () {});
