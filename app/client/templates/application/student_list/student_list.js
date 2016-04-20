/*****************************************************************************/
/* StudentList: Event Handlers */
/*****************************************************************************/
Template.StudentList.events({
    
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