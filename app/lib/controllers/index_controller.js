IndexController = RouteController.extend({
    subscriptions: function () {},
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
            this.next();
        } else {
            Router.go('/home');
        }
    },
    action: function () {
        this.render();
    },
    onAfterAction: function () {},
    onStop: function () {}
});
