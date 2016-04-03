Template.CardType.events({
    'click #add-email': function() {  

        var newspan = document.createElement('span');
        newspan.innerHTML = '<span class=""><input  type="email" id="emailadd" name="emailadd" placeholder="Email address" class="form-control input-md"></span>';
        document.getElementById('emails').appendChild(newspan);
    }

});

Template.CardType.helpers({
    dataType: function() {

        var type = Meteor.users.findOne({
            _id: Meteor.userId()
        }).profile.type;

        return (type === 'Teacher') ? 'Classes' : 'Accounts';
    },
    getTemplate: function () {
        var type = Meteor.users.findOne({
                _id: Meteor.userId()
        }).profile.type;

        return (type === 'Teacher') ? 'TeacherModal' : 'AdminModal';
   }
});