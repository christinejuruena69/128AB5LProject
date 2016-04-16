/*****************************************************************************/
/* StudentListView: Event Handlers */
/*****************************************************************************/
Template.StudentListView.events({
    'submit form': function(e) {
        e.preventDefault();

        var birthday = new Date($(e.target).find('[name=birthday]').val()),
            student = {
                fullname: $(e.target).find('[name=fullname]').val(),
                studentNumber: $(e.target).find('[name=studentNumber]').val(),
                image: "",
                nickname: $(e.target).find('[name=nickname]').val(),
                birthday: birthday,
                section: $(e.target).find('[name=section]').val(),
                points: 0,
                bias: 0,
                isBlackListed: false
            },
            user = Meteor.user(),
            classId = this._id;

        Meteor.call('addStudent', student, classId, function(error, result) {

            if (error) {
                return throwError(error.reason);
            }
        });

        $(e.target).find('[name=birthday]').val("");
        $(e.target).find('[name=fullname]').val("");
        $(e.target).find('[name=studentNumber]').val("");
        $(e.target).find('[name=section]').val("");
        $(e.target).find('[name=nickname]').val("");
    },
    'click .up': function() {
        $('.spinner input').val(parseInt($('.spinner input').val(), 10) + 1);
    },
    'click .down': function() {
        $('.spinner input').val(parseInt($('.spinner input').val(), 10) - 1);
    },
    'click tr': function() {
        var table = document.getElementById("student-table");
        if (table != null) {
            for (var i = 0; i < table.rows.length; i++) {
                table.rows[i].onclick = function() {
                    tableText(this);
                };
            }
    }

        function tableText(tableCell) {
            document.getElementById("modal-full-name").innerHTML = tableCell.cells[1].innerHTML;
            document.getElementById("modal-std-no").innerHTML = tableCell.cells[0].innerHTML;
            document.getElementById("modal-nickname").value = tableCell.cells[2].innerHTML;
            document.getElementById("modal-course").value = tableCell.cells[3].innerHTML;
            document.getElementById("modal-college").value = tableCell.cells[4].innerHTML;
            document.getElementById("modal-bias").value = tableCell.cells[6].innerHTML;
        }
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
Template.StudentListView.onCreated(function() {});

Template.StudentListView.onRendered(function() {});

Template.StudentListView.onDestroyed(function() {});