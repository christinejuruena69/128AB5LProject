Router.configure({
    layoutTemplate: 'masterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
});

Router.route('/', {
    name: 'Index',
    controller: 'HomeController',
    where: 'client'
});

Router.route('/home', {
    name: 'Home',
    controller: 'HomeController',
    where: 'client'
});
Router.route('/register', {
    name: 'RegisterForm',
    controller: 'HomeController',
    where: 'client'
});

Router.route('/login', {
    name: 'LoginForm',
    controller: 'HomeController',
    where: 'client'
});

Router.route('/ViewTeacherAccount', {
    name: 'ViewTeacherAccount',
    template: 'ViewTeacherAccount',
    where: 'client'
});

Router.route('/randomizer', {
    name: 'RandomizerWindow',
    template: 'RandomizerWindow',
    where: 'client'
});

Router.route('/mainClassView', {
    name: 'mainClassView',
    template: 'mainClassView',
    where: 'client'
});

Router.route('/studentListView', {
    name: 'StudentListView',
    template: 'StudentListView',
    where: 'client'
});
