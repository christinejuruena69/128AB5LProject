HomeController = RouteController.extend({
    subscriptions: function () {},
    waitOn: function() {},
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
