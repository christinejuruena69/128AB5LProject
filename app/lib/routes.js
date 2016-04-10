Router.configure({
    loadingTemplate: 'spinner',
    notFoundTemplate: 'NotFound'
});

Router.route('/', {
    name: 'Index',
    layoutTemplate: 'MasterLayout',
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
// @Todo: Before uncommenting this code, we have to finish dependencies (Templates that will use them)

// Router.route('/ViewTeacherAccount', {
//     name: 'ViewTeacherAccount',
//     template: 'ViewTeacherAccount',
//     controller: 'HomeController',
//     where: 'client'
// });
//
 Router.route('/randomizer', {
     name: 'RandomizerWindow',
     template: 'RandomizerWindow',
     controller: 'HomeController',
     where: 'client'
 });
//
// Router.route('/mainClassView', {
//     name: 'mainClassView',
//     template: 'mainClassView',
//     controller: 'HomeController',
//     where: 'client'
// });
//
 Router.route('/studentListView', {
     name: 'StudentListView',
     template: 'StudentListView',
     controller: 'HomeController',
     where: 'client'
 });
