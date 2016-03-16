Router.configure({
    layoutTemplate: 'MasterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
});

Router.route('/', {
    name: 'home',
    controller: 'HomeController',
    where: 'client'
});

Router.route('/register', {
    name: 'RegisterForm',
    controller: 'HomeController',
    where: 'client'
});
