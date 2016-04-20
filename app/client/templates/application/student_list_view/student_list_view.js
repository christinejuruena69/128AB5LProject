/*****************************************************************************/
/* StudentListView: Event Handlers */
/*****************************************************************************/


Template.StudentListView.events({
    'submit form': function (e) {
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

        Meteor.call('addStudent', student, classId, function (error, result) {

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
    'click .up': function () {
        $('.spinner input').val(parseInt($('.spinner input').val(), 10) + 1);
    },
    'click .down': function () {
        $('.spinner input').val(parseInt($('.spinner input').val(), 10) - 1);
    },
    'click tr': function () {
        var table = document.getElementById("student-table");
        
        if (table != null) {
            for (var i = 0; i < table.rows.length; i++) {
                table.rows[i].onclick = function () {
                    tableText(this);
                };
            }
        }

        function tableText(tableCell) {
            document.getElementById("modal-full-name").innerHTML = tableCell.cells[1].innerHTML;
            document.getElementById("modal-std-no").innerHTML = tableCell.cells[0].innerHTML;
            document.getElementById("modal-nickname").value = tableCell.cells[2].innerHTML;
            document.getElementById("modal-section").value = tableCell.cells[3].innerHTML;
            document.getElementById("modal-bias").value = tableCell.cells[5].innerHTML;
        }
    },

    'click .blacklisted': function() {
        if ($('.blacklisted-check').is(':checked')) {
            $('.blacklisted-check').prop("checked", false);
        } 
        else {
            $('.blacklisted-check').prop("checked", true);
        }
    },
    'click #saveEdited': function() {
        var studentNumber,
            nickname,
            section,
            bias,
            classId = this._id;

        studentNumber = document.getElementById("modal-std-no").innerHTML;
        nickname = document.getElementById("modal-nickname").value;
        section = document.getElementById("modal-section").value;
        bias = document.getElementById("modal-bias").value;

        Meteor.call('Teacher/editStudent', studentNumber, nickname, section, bias, classId, function(error, result) {
            if (error) {
                return throwError(error.reason);
            }
        });
    },

    'click .reactive-table tbody tr': function (event) {
        event.preventDefault();
        //Place to trigger a modal for editing or deleting currently selected student
    
    
    }

});

/*****************************************************************************/
/* StudentListView: Helpers */
/*****************************************************************************/
Template.StudentListView.helpers({
    tableSettings : function() {
            return {
                fields: [
                    { key: 'fullname', label: '', tmpl: Template.StudentCard},
                    { key: 'studentNumber', label: 'Name'},
                    { key: 'section', label: 'Section'},
                    { key: 'points', label: 'Points'},
                    { key: 'bias', label: 'Bias'}
                ]
            };
        }
});

/*****************************************************************************/
/* StudentListView: Lifecycle Hooks */
/*****************************************************************************/
Template.StudentListView.onCreated(function() {});

Template.StudentListView.onRendered(function() {});

Template.StudentListView.onDestroyed(function() {});
