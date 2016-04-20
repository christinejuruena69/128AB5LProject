/*****************************************************************************/
/* NewAccount: Event Handlers */
/*****************************************************************************/
Template.NewAccount.events({
    'submit form': function (event, template) {
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
                    if(err.reason === "Login forbidden") {
                        // Alert success
                        return notify('Created account ' + username + ' successfully', 'good');
                    }
                    return notify(err.reason, 'bad');
                }
            });
        }
        else {
            // Invalid password case
            return notify('Password Error!', 'bad');
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
