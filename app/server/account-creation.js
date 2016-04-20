Accounts.onCreateUser(function (options, user) {
    // Use provided profile in options, or create an empty object
    user.profile = options.profile || {};
    // Assigns first and last names to the newly created user object
    user.profile.fullName = options.fullName;
    user.profile.type = options.type;
    // Returns the user object
    return user;
});

Accounts.validateLoginAttempt(function (attemptInfo) {
// Block auto login attempt after signup
    if (attemptInfo.type == 'resume') {
        return true;
    }

    if (attemptInfo.methodName == 'createUser') {
        return false;
    }

    return true;
});
