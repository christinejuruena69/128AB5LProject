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

Router.route('/edit-class/:_id', {
    name: 'EditClass',
    layoutTemplate: 'MasterLayout',
    controller: 'HomeController',
    where: 'client',
    subscriptions: function() {
        return Meteor.subscribe('oneClass', this.params._id);
    },
    data: function() {
        return Class.findOne({
            _id: this.params._id
        });
    }
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

Router.route('/view', {
    name: 'ViewList',
    controller: 'ViewController',
    subscriptions: function() {
        return Meteor.subscribe('activeViews');
    },
    where: 'client'
});

// @Todo: Before uncommenting this code, we have to finish dependencies (Templates that will use them)
// @Todo: Set data context for dynamic routes

 // Router.route('/classview/:_id', {
 //     name: 'MainClassView',
 //     template: 'MainClassView',
 //     controller: 'HomeController',
 //     where: 'client'
 // });

// Router.route('/ViewTeacherAccount', {
//     name: 'ViewTeacherAccount',
//     template: 'ViewTeacherAccount',
//     controller: 'HomeController',
//     where: 'client'
// });

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
    },
    onBeforeAction: function() {
        var classObject = Class.findOne({
            _id: this.params._id
        });
        if( !Meteor.userId() ) {
            Router.go('/403');
        }
        else {
            if( classObject == null ) {
                Router.go('/404');
            }
            else {
                if( classObject.lecturer === Meteor.userId() ) {
                    this.next();
                }
                else {
                    Router.go('/403');
                }
            }
        }
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

Router.route('/classView/:_id', {
    // TODO: Add a layout template
    name: 'ClassView',
    layoutTemplate: 'MasterLayout',
    controller: 'HomeController',
    where: 'client',
    subscriptions: function() {
        return Meteor.subscribe('oneClass', this.params._id);
    },
    data: function() {
        return Class.findOne({
            _id: this.params._id
        });
    }
});

/*erase this if classview is okay*/
// Router.route('/classview/', {
//      name: 'MainClassView',
//      template: 'MainClassView',
//      controller: 'HomeController',
//      where: 'client'
//  });

Router.onBeforeAction('dataNotFound', {only: 'EditClass'});
