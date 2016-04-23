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
                if(pwd.length < 6) {
                    notify('Password too short!', 'bad');
                }
                return pwd.length >= 6 ? true : false;
            } else {
                notify('Password does not match', 'bad');
                return false;
            }
        }

        if(isValidPassword(password, password2)) {
            Accounts.createUser({
                username,
                password,
                email,
                type,
                fullName
            }, function (err) {
                if (err) {
                    if(err.reason === "Login forbidden") {
                        return notify('Created account ' + username + ' successfully', 'good');
                    }
                    return notify(err.reason, 'bad');
                }
            });
            event.target['username'].value = "";
            event.target['Name'].value = "";
            event.target['Account-Type'].value = "";
            event.target['password1'].value = "";
            event.target['password2'].value = "";
            event.target['email'].value = "";

            $("#admin-modal").modal('hide');
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
