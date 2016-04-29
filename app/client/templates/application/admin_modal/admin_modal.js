/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.AdminModal.events({
    'submit form': function(e, template) {

        e.preventDefault();

        function start() {

            var newClass = {},
                courseTitle = $('#courseTitle').val(),
                courseCode = $('#courseCode').val(),
                semester = $('#semester').val(),
                academicYear = $('#academicYear').val(),
                lecturer = $('#lecturer').val(),
                fileSelected = $('#uploadCSV').val(),
                courseCodeRegex = /^[A-Z]{2,4}[0-9]{1,3}$/,
                students = [],

                isValidCourseCode,
                classId;

            // check if form fields are empty
            if (courseTitle === '') {
                return notify('Course title is required', 'bad');
            }
            else if (courseCode === '') {
                return notify('Course code is required', 'bad');
            }
            else if (semester === '') {
                return notify('Semester is required', 'bad');
            }
            else if (academicYear === '') {
                return notify('Academic year is required', 'bad');
            }
            else if (lecturer === '') {
                return notify('Lecturer is required', 'bad');
            }
            else if(!fileSelected) {
                return notify('Add a CSV file', 'bad');
            }

            // validate course code format
            isValidCourseCode = courseCodeRegex.test(courseCode);

            if(!isValidCourseCode) {
                return notify('Invalid course code', 'bad');
            }

            // Start spinner
            Session.set('uploading', true);

            // console.log('Processing file now');
            // console.log($('#uploadCSV')[0].files[0]);

            // Process file here
            Papa.parse($('#uploadCSV')[0].files[0], {
                header: true,
                delimiter: ',',
                complete: function(res, file) {

                    // add form field values to newClass object
                    newClass = {
                        courseTitle,
                        courseCode,
                        lecturer,
                        students: res.data,
                        semester: semester.concat(' ' + academicYear)
                    };

                    uploadFile(newClass);
                }
            });
        }

        function uploadFile(newClass) {
            Meteor.call('Admin/AddClass', newClass, function(error, result) {

                // if error, display error
                if (error) {
                    return notify(error.reason, 'bad');
                }
                classId = result;

                // else, display success
                notify('Successfully added class!', 'good');

                // clear form fields

                template.find('form').reset();
                // Stop spinner
                Session.set('uploading', false);
                notify('Finished "Uploading"', 'good');


                // hide modal
                $("#admin-modal").hide('hide');
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
            });

        }

        start();

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

            schoolYear.minYear = minYear + i;
            schoolYear.maxYear = minYear + i + 1;

            years.push(schoolYear);
        }

        return years;
    },
    uploading: function() {
        return Session.get('uploading');
    }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.AdminModal.onCreated(function() {
    Session.set('uploading', false);
});

Template.AdminModal.onRendered(function() {});

Template.AdminModal.onDestroyed(function() {});
