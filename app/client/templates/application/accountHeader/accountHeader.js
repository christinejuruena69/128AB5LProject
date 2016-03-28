Template.AccountHeader.helpers({
    determineUser: function(){
        if(Session.get('teacherAccount')) {
            return true;
        }
        else {
            return false;
        }
    }
});
