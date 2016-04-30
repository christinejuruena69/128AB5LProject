/*****************************************************************************/
/* EditClass: Event Handlers */
/*****************************************************************************/
Template.EditClass.events({
    'submit form': function (e, template) {
        e.preventDefault();

        /****************************************************/
        /*  Do not get the form data by ID as there are     */
        /*  already nume numerous forms with the same ID    */
        /****************************************************/

        var editedClass = {
            courseTitle: $(e.target).find('[name=courseTitle]').val(),
            courseCode: $(e.target).find('[name=courseCode]').val(),
            semester: $(e.target).find('[name=semester]').val(),
            section: $(e.target).find('[name=section]').val(),
            lecturer: this.lecturer,
            _id: this._id
        };

        if (courseTitle === '') {
            return notify('Course title is required', 'bad');
        }
        else if (courseCode === '') {
            return notify('Course code is required', 'bad');
        }
        else if (semester === '') {
            return notify('Semester is required', 'bad');
        }
        else if (section === '') {
            return notify('Section is required', 'bad');
        }

        /****************************************************/
        /*  Add REGEXES Here to match with form INPUT     */
        /****************************************************/

        Meteor.call('User/editClass', editedClass, function(error, result){

            if(error) {
                return notify(error.reason, 'bad');
            }
            else {
                var successNotif = 'Successfully edited '
                + editedClass.courseCode + ': '
                + editedClass.courseTitle;

                notify(successNotif, 'good');

                $('#admin-modal-editclass-' + editedClass._id).modal('hide');

            }
        });
    },

    'click #cancel': function (e, template) {

        e.preventDefault();
        $('#admin-modal-editclass-' + editedClass._id).modal('hide');
    }
});

/*****************************************************************************/
/* EditClass: Helpers */
/*****************************************************************************/
Template.EditClass.helpers({
    currentClass: function() {
        return Class.findOne({ _id: Template.data._id });
    }
});

/*****************************************************************************/
/* EditClass: Lifecycle Hooks */
/*****************************************************************************/
Template.EditClass.onCreated(function () {
});

Template.EditClass.onRendered(function () {
});

Template.EditClass.onDestroyed(function () {
});
