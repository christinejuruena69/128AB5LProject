var studentdummylist = [
	{
		studentNumber: "2011-00541",
		fullname: "Paolo Bandong",
		nickname: "Paolo",
		points: 0,
		bias: 0,
		isBlackListed: true
	},
	{
		studentNumber: "2013-12345",
		fullname: "John Secant",
		nickname: "Johnny",
		points: 0,
		bias: 0,
		isBlackListed: true	
	}
]

/*****************************************************************************/
/* StudentList: Event Handlers */
/*****************************************************************************/
Template.StudentList.events({
});

/*****************************************************************************/
/* StudentList: Helpers */
/*****************************************************************************/
Template.StudentList.helpers({
	/*'student': function(){
		var id = "GeZyiqyZ3KAtxjQBh";
		console.log(Class.find({_id: id}, {_id: 0, students: 1}).fetch());
		return Class.find({_id: id}, {_id: 0, students: 1}).fetch();
	}*/
	student: studentdummylist
});

/*****************************************************************************/
/* StudentList: Lifecycle Hooks */
/*****************************************************************************/
Template.StudentList.onCreated(function () {
});

Template.StudentList.onRendered(function () {
});

Template.StudentList.onDestroyed(function () {
});
