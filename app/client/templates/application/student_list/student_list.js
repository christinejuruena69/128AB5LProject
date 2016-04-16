/*****************************************************************************/
/* StudentList: Event Handlers */
/*****************************************************************************/
Template.StudentList.events({
    'click .Delete': function() {
        var studentNumber = this.studentNumber;
        var classId = Template.parentData()._id;
        var lecturer = Template.parentData().lecturer;
        var message = "Delete student " + studentNumber + "?";

        var prompt1 = confirm(message);
        if(prompt1 == true){
            var prompt2 = confirm("Are you sure?");
            if (prompt2 == true) {
                Meteor.call('deleteStudent', studentNumber, lecturer, classId, function(error, result) {
                    // display the error to the user and abort
                    if (error)
                    return alert(error.reason);
                });
            };
        }


    },
    'click .up': function() {
        $('.spinner input').val(parseInt($('.spinner input').val(), 10) + 1);
    },
    'click .down': function() {
        $('.spinner input').val(parseInt($('.spinner input').val(), 10) - 1);
    },
    'click .editclass': function() {
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
/* StudentList: Helpers */
/*****************************************************************************/
Template.StudentList.helpers({});

/*****************************************************************************/
/* StudentList: Lifecycle Hooks */
/*****************************************************************************/
Template.StudentList.onCreated(function() {});

Template.StudentList.onRendered(function() {});

Template.StudentList.onDestroyed(function() {});