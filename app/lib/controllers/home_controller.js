HomeController = RouteController.extend({
    subscriptions: function () {},
    waitOn: function() {
        // return [
        //     Meteor.subscribe('myClasses'),
        //     Meteor.subscribe('allUserData'),
        //     Meteor.subscribe('getViewStates')
        // ];
    },
    data: function () {
        // return [
        //     Meteor.subscribe('allUserData'),
        //     Meteor.subscribe('myClasses'),
        //     Meteor.subscribe('getViewStates')
        // ];
    },
    onRun: function () {
        this.next();
    },
    onRerun: function () {
        this.next();
    },
    onBeforeAction: function () {
        if (!Meteor.userId()) {
            Router.go('/');
        } else {
            this.next();
        }
    },
    action: function () {
        this.render();
        // if (this.ready()) {
        //     this.render();
        // } else {
        //     this.render('spinner');
        // }
    },
    onAfterAction: function () {},
    onStop: function () {}
});
