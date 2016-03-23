// Bootstrap class data

Meteor.startup(function () {

    function start() {
        Meteor.call('Bootstrap/CreateClassData');
    }

    start();
});
