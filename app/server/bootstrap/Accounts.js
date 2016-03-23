Meteor.startup(function () {

    var users = Meteor.users.find().fetch(),
        userCount = Meteor.users.find().count(),
        hasTeacher,
        hasAdmin;

    function checkSome(username) {
        if(userCount == 0) {
            return false;
        }

        return _.some(users, function(user) {
            if(user.username === username) {
                return true;
            }
        });
    }

    function createUser(user) {
        Accounts.createUser(user);
        console.log('Creating new account');
        console.log('Full Name:' + user.fullName);
        console.log('username:' + user.username);
        console.log('password:' + user.password);
        console.log('type:' + user.type);
        console.log('email:' + user.email);
    }

    function start() {
        hasTeacher = checkSome('teacher'),
        hasAdmin = checkSome('admin');

        if(!hasAdmin) {
            createUser({
                username: 'admin',
                password: 'admin',
                email: 'spam@spam.spam',
                fullName: 'admin',
                type: 'Admin'
            });
        }
        else {
            console.log('Admin account exists');
        }

        if(!hasTeacher) {
            createUser({
                username: 'teacher',
                password: 'teacher',
                email: 'teacher@spam.spam',
                fullName: 'teacher',
                type: 'Teacher'
            });
        }
        else {
            console.log('Teacher account exists');
        }
    }

    start();

});
