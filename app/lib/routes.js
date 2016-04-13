Router.configure({
    loadingTemplate: 'spinner',
    notFoundTemplate: 'NotFound'
});

Router.route('/', {
    name: 'Index',
    controller: 'IndexController',
    where: 'client'
});

Router.route('/login', {
    name: 'LoginForm',
    layoutTemplate: 'MasterLayout',
    controller: 'IndexController',
    where: 'client'
});

Router.route('/register', {
    name: 'RegisterForm',
    layoutTemplate: 'MasterLayout',
    controller: 'IndexController',
    where: 'client'
});

Router.route('/home', {
    name: 'Home',
    layoutTemplate: 'MasterLayout',
    controller: 'HomeController',
    where: 'client'
});

Router.route('/add-class', {
    name: 'AddClass',
    layoutTemplate: 'MasterLayout',
    controller: 'HomeController',
    where: 'client'
});

Router.route('/update-details', {
    name: 'UpdateDetails',
    layoutTemplate: 'MasterLayout'
});

Router.route('/404', {
    name: 'NotFound'
});

Router.route('/403', {
    name: 'Forbidden'
});

// @Todo: Before uncommenting this code, we have to finish dependencies (Templates that will use them)
// @Todo: Set data context for dynamic routes

// Router.route('/classview/:_id', {
//     name: 'ViewTeacherAccount',
//     template: 'ViewTeacherAccount',
//     controller: 'HomeController',
//     where: 'client'
// });

// Router.route('/ViewTeacherAccount', {
//     name: 'ViewTeacherAccount',
//     template: 'ViewTeacherAccount',
//     controller: 'HomeController',
//     where: 'client'
// });
//
Router.route('/randomizer/:_id', {
    name: 'RandomizerWindow',
    layoutTemplate: 'MasterLayout',    
    template: 'RandomizerWindow',
    controller: 'HomeController',
    where: 'client',
    waitOn: function() {
        return Meteor.subscribe('oneClass', this.params._id);
    },
    data: function(){
        return Class.findOne({
            _id: this.params._id
        })
    }
});
//
// Router.route('/mainClassView', {
//     name: 'mainClassView',
//     template: 'mainClassView',
//     controller: 'HomeController',
//     where: 'client'
// });

Router.route('/studentListView/:_id', {
    name: 'StudentListView',
    layoutTemplate: 'MasterLayout',    
    template: 'StudentListView',
    controller: 'HomeController',
    where: 'client',
    waitOn: function() {
        return Meteor.subscribe('oneClass', this.params._id);
    },
    data: function () {
        return Class.findOne({
            _id: this.params._id
        });
    }
});

Router.route('/profile/:_id', {
    // TODO: Add a layout template
    name: 'ViewTeacherAccount',
    layoutTemplate: 'MasterLayout',        
    controller: 'HomeController',
    where: 'client',
    waitOn: function() {
        return Meteor.subscribe('oneUser', this.params._id);
    },
    data: function () {
        return Meteor.users.findOne({
            _id: this.params._id
        });
    }
});
