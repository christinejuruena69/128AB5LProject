/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.studentListView.events({
        'submit .addStudent' : function(event) {
            var studNum = event.target.studNum.value;
            var fullname = event.target.fullName.value;
            var nickname = event.target.nickname.value;
            var course = event.target.course.value;
            var points = event.target.points.value;
            var bias = event.target.bias.value;
            class.insert({
                studentNumber : studNum,
                fullname : fullname,
                nickname : nickname,
                points : points
            });
            event.target.studNum.value = "";
            event.target.fullname.value = "";
            event.target.nickname.value = "";
            event.target.course.value = "";
            event.target.college.value = "";
            event.target.biase.value = "";
            
            return false;
            
        }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.studentListView.helpers({
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.studentListView.onCreated(function () {
});

Template.studentListView.onRendered(function () {
});

Template.studentListView.onDestroyed(function () {
});
