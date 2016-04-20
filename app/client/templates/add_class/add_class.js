/*****************************************************************************/
/* AddClass: Event Handlers */
/*****************************************************************************/
Template.AddClass.events({

    'submit form': function(e) {
        e.preventDefault();

        var bday = new Date($(e.target).find('[name=birthday]').val()),
            student1 = [],
            user = Meteor.user();

        student1.push({
            fullname: $(e.target).find('[name=fullname]').val(),
            studentNumber: $(e.target).find('[name=studentNumber]').val(),
            image: null,
            nickname: $(e.target).find('[name=nickname]').val(),
            birthday: bday,
            section: $(e.target).find('[name=section]').val(),
            points: 0,
            bias: 0,
            isBlackListed: false
        });

        var class1 = {
            courseTitle: $(e.target).find('[name=courseTitle]').val(),
            courseCode: $(e.target).find('[name=courseCode]').val(),
            semester: $(e.target).find('[name=semester]').val(),
            lecturer: $(e.target).find('[name=lecturer]').val(),
            students: student1
        };

        Meteor.call('Admin/AddClass', class1, function(error, result){

            // alert if error
            if(error){
                notify(error.reason, 'bad');
                return throwError(error.reason);
            }

            // re-route to home if success
            Router.go('/');
        });
    }
});

/*****************************************************************************/
/* AddClass: Helpers */
/*****************************************************************************/
Template.AddClass.helpers({
    displayLecturers: function() {
        return Meteor.users.find({'profile.type': 'Teacher'});
    }
});

/*****************************************************************************/
/* AddClass: Lifecycle Hooks */
/*****************************************************************************/
Template.AddClass.onCreated(function () {
});

Template.AddClass.onRendered(function () {
});

Template.AddClass.onDestroyed(function () {
});
