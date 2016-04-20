/*****************************************************************************/
/* NewAccount: Event Handlers */
/*****************************************************************************/
Template.NewAccount.events({
    'submit form': function (event, template) {
        console.log('Submitted');
        event.preventDefault();
        // Stop html from going to action

        //Get form data
        var userData = {},
            username    = event.target['username'].value,
            fullName    = event.target['Name'].value,
            type        = event.target['Account-Type'].value,
            password    = event.target['password1'].value,
            password2   = event.target['password2'].value,
            email       = event.target['email'].value;

        function isValidPassword (pwd, pwd2) {
            if (pwd === pwd2) {
                return pwd.length >= 6 ? true : false;
            } else {
                return false;
            }
        }

        if(isValidPassword(password, password2)) {
            // note this is es6 JSON notation
            Accounts.createUser({
                username,
                password,
                email,
                type,
                fullName
            }, function (err) {
                if (err) {
                    return console.log(err.reason);
                }
                console.log('success!');
                // Redirect user to index page
                Router.go('/');
            });
        }
        else {
            // Invalid password case
            console.log('Password error!');
        }

        return false;
    }
});

/*****************************************************************************/
/* NewAccount: Helpers */
/*****************************************************************************/
Template.NewAccount.helpers({});
/*****************************************************************************/
/* NewAccount: Lifecycle Hooks */
/*****************************************************************************/
Template.NewAccount.onCreated(function () {});
Template.NewAccount.onRendered(function () {});
Template.NewAccount.onDestroyed(function () {});
