Meteor.myFunctions = {
    // user;
    radioCheck: function () {
        var selection = document.userbtn.user;
        for (i = 0; i < selection.length; i++) {
            if (selection[i].checked == true) {
                user = selection[i].value;
                break;
            }
            alert(user);
        }
    }
}
