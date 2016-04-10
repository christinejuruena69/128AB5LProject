/*****************************************************************************/
/* StudentListView: Event Handlers */
/*****************************************************************************/
Template.StudentListView.events({
	'submit form': function(e) {
        e.preventDefault();

        var bday = new Date($(e.target).find('[name=birthday]').val()),
            student = {
        		fullname: $(e.target).find('[name=fullname]').val(),
        		studentNumber: $(e.target).find('[name=studentNumber]').val(),
        		image: null,
        		nickname: $(e.target).find('[name=nickname]').val(),
        		birthday: bday,
        		section: $(e.target).find('[name=section]').val(),
        		points: 0,
        		bias: 0,
        		isBlackListed: false
        	},
            user = Meteor.user(),
            classId = this.classId;

        Meteor.call('addStudent', student, classId, function(error, result){
        	// alert if error
        	if(error){
        		return throwError(error.reason);
        	}
    	});

    	$(e.target).find('[name=birthda]').val("");
    	$(e.target).find('[name=fullname]').val("");
    	$(e.target).find('[name=studentNumber]').val("");
    	$(e.target).find('[name=section]').val("");
    	$(e.target).find('[name=nickname]').val("");
	}
});

/*****************************************************************************/
/* StudentListView: Helpers */
/*****************************************************************************/
Template.StudentListView.helpers({
});

/*****************************************************************************/
/* StudentListView: Lifecycle Hooks */
/*****************************************************************************/
Template.StudentListView.onCreated(function () {
});

Template.StudentListView.onRendered(function () {
});

Template.StudentListView.onDestroyed(function () {
});
