HomeController = RouteController.extend({
    subscriptions: function () {
        return [
            Meteor.subscribe('allUserData'),
            Meteor.subscribe('myClasses'),
            Meteor.subscribe('getViewStates')
        ];
    },
    waitOn: function () {},
    data: function () {},
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
    },
    onAfterAction: function () {},
    onStop: function () {}
});
