/*****************************************************************************/
/* StudentListView: Event Handlers */
/*****************************************************************************/

Template.StudentListView.events({
    'click #addStudent': function (e) {
        e.preventDefault();

        var birthday = new Date($('#birthday').val()),
            student = {
                fullname: $('#fullname').val(),
                studentNumber: $('#studentNumber').val(),
                image: "",
                nickname: $('#nickname').val(),
                birthday: birthday,
                section: $('#section').val(),
                points: 0,
                bias: 0,
                isBlackListed: false
            },
            user = Meteor.user(),
            classId = this._id;

        var studentNumberChecker =  /^[0-9]{4}-[0-9]{5}$/;

        for(studentEntry of this.students) {
            if( studentEntry.studentNumber === student.studentNumber ){
                notify('Student Number already exists!', 'bad');
                return;
            }
        }

        if(studentNumberChecker.test(student.studentNumber)){
            Meteor.call('addStudent', student, classId, function(error, result) {
                if (error) {
                    return throwError(error.reason);
                }

                notify('Successfully Added Student!', 'good');
                //Clear form
                $('#addStudentForm').trigger('reset');

                // Close modal
                $('#add-student').modal('hide');
            });
        }
        else {
            notify('Invalid Student Number', 'bad');
        }

    },
    'click .up': function () {
        $('.spinner input').val(parseInt($('.spinner input').val(), 10) + 1);
    },
    'click .down': function () {
        $('.spinner input').val(parseInt($('.spinner input').val(), 10) - 1);
    },

    'click .blacklisted': function() {
        if ($('.blacklisted-check').is(':checked')) {
            $('.blacklisted-check').prop("checked", false);
        }
        else {
            $('.blacklisted-check').prop("checked", true);
        }
    },
    'click button#saveEdited': function() {
        var studentNumber,
            nickname,
            section,
            bias,
            classId = this._id;

        studentNumber = $("#modal-std-no").html();
        nickname = $("#modal-nickname").val();
        section = $("#modal-section").val();
        bias = $("#modal-bias").val();
        Meteor.call('Teacher/editStudent', studentNumber, nickname, section, bias, classId, function(error, result) {
            if (error) {
                return throwError(error.reason);
            }
        });
        notify('Changes saved!', 'good');
    },

    'click button#deleteStudent': function() {
        var studentNumber = document.getElementById("modal-std-no").innerHTML;
        var lecturer = this.lecturer;
        var classId = this._id;
        var message = "Delete student " + studentNumber + "?";

        var verificationPrompt1 = confirm(message);
        if(verificationPrompt1 == true){
            var verificationPrompt2 = confirm("Are you sure?");
            if (verificationPrompt2 == true) {
                Meteor.call('deleteStudent', studentNumber, lecturer, classId, function(error, result) {
                    // display the error to the user and abort
                    if (error)
                    return alert(error.reason);
                });
            };
        }
        notify('Student deleted!', 'good');
        $('#editModal').modal('hide');
    },

    'click .reactive-table tbody tr': function (event) {
        event.preventDefault();
        //Place to trigger a modal for editing or deleting currently selected student
        $('#editModal').modal('show');
        $("#modal-full-name").html(this.fullname);
        $("#modal-std-no").html(this.studentNumber);
        $("#modal-nickname").val(this.nickname);
        $("#modal-section").val(this.section);
        $("#modal-bias").val(this.bias);
    }

});

/*****************************************************************************/
/* StudentListView: Helpers */
/*****************************************************************************/
Template.StudentListView.helpers({
    tableSettings : function() {
            return {
                fields: [
                    { key: 'pic', label: 'picture', tmpl: Template.StudentCard,  sortable: false},
                    { key: 'fullname', label: 'Name'},
                    { key: 'studentNumber', label: 'studentNumber'},
                    { key: 'section', label: 'Section'},
                    { key: 'points', label: 'Points'},
                    { key: 'bias', label: 'Bias'},
                    { key: 'isBlackListed', label: 'Blacklisted'}
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
