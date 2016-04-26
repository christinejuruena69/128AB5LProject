/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.AdminModal.events({
    'submit form': function(e, template) {
        e.preventDefault();

        var class1 = {},
            courseTitle = $(e.target).find('[name=courseTitle]').val(),
            courseCode = $(e.target).find('[name=courseCode]').val(),
            semester = $(e.target).find('[name=semester]').val(),
            academicYear = $(e.target).find('[name=academicYear]').val(),
            lecturer = $(e.target).find('[name=lecturer]').val(),
            fileSelected = $(e.target).find('[name=uploadCSV]').val(),
            classId;

        // check if form fields are empty
        if (courseTitle === '') {
            return notify('Course title is required', 'bad');
        } else if (courseCode === '') {
            return notify('Course code is required', 'bad');
        } else if (semester === '') {
            return notify('Semester is required', 'bad');
        } else if (academicYear === '') {
            return notify('Academic year is required', 'bad');
        } else if (lecturer === '') {
            return notify('Lecturer is required', 'bad');
        }

        // validate course code format
        var courseCodeRegex = /^[A-Z]{2,4}[0-9]{1,3}$/,
            isValidCourseCode = courseCodeRegex.test(courseCode);
        if (!isValidCourseCode) {
            return notify('Invalid course code', 'bad');
        }

        // add form field values to class1 object
        class1.courseTitle = courseTitle;
        class1.courseCode = courseCode;
        class1.semester = semester.concat(' ' + academicYear);
        class1.lecturer = lecturer;
        class1.students = [];

        var classId;

        Meteor.call('Admin/AddClass', class1, function(error, result) {

            // if error, display error
            if (error) {
                return notify(error.reason, 'bad');
            }
            classId = result;

            // else, display success
            notify('Successfully added class!', 'good');

            // hide modal
            $("#admin-modal").hide('hide');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();

            // clear form fields
            template.find('form').reset();
        });

        if (fileSelected) {
            template.uploading.set(true);
            //FIXME
            Papa.parse(e.target.files[0], {
                header: true,
                complete: function(results, file) {
                    Meteor.call('parseUpload', results.data, classId, (error, response) => {
                        if (error) {
                            console.log(error.reason);
                        } else {
                            template.uploading.set(false);
                            Bert.alert('Upload complete!', 'success', 'growl-top-right');
                        }
                    });
                }
            });
        }
    }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.AdminModal.helpers({
    displayYear: function() {
        var years = [],
            currentDate = new Date(),
            minYear = 2000,
            maxYear = currentDate.getFullYear();

        for (var i = 0; i <= maxYear - minYear; i++) {
            var schoolYear = {};

            schoolYear.minYear = minYear + i,
                schoolYear.maxYear = minYear + i + 1;
            years.push(schoolYear);
        }

        return years;
    },
    uploading: function() {
        return Template.instance().uploading.get();
    }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.AdminModal.onCreated(function() {
    Template.instance().uploading = new ReactiveVar(false);
});

Template.AdminModal.onRendered(function() {});

Template.AdminModal.onDestroyed(function() {});
