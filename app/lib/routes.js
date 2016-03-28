Router.configure({
    layoutTemplate: 'masterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
});

Router.route('/', {
    name: 'Index',
    controller: 'IndexController',
    where: 'client'
});

Router.route('/home', {
    name: 'Home',
    controller: 'HomeController',
    where: 'client'
});
Router.route('/register', {
    name: 'RegisterForm',
    controller: 'IndexController',
    where: 'client'
});

Router.route('/login', {
    name: 'LoginForm',
    controller: 'IndexController',
    where: 'client'
});

Router.route('/ViewTeacherAccount', {
    name: 'ViewTeacherAccount',
    template: 'ViewTeacherAccount',
    controller: 'HomeController',
    where: 'client'
});

Router.route('/randomizer', {
    name: 'RandomizerWindow',
    template: 'RandomizerWindow',
    controller: 'HomeController',
    where: 'client'
});

Router.route('/mainClassView', {
    name: 'mainClassView',
    template: 'mainClassView',
    controller: 'HomeController',
    where: 'client'
});

Router.route('/studentListView', {
    name: 'StudentListView',
    template: 'StudentListView',
    controller: 'HomeController',
    where: 'client'
});
