/*****************************************************************************/
/*  Server Methods - Only used for creation of dummy Data*/
/*****************************************************************************/

Meteor.methods({
    'Bootstrap/CreateClassData': function () {
        _ = lodash;
        var StudentData = {
            fullname: 'Jonathan Secant',
            studentNumber: '2013-12345',
            nickname: 'Johnny',
            birthday: new Date(),
            section: '1-L'
        };
        var studentArray =  _.fill(new Array(10), StudentData);
        var sampleClass = {
            courseTitle: 'sampleClass',
            semester: '1st Semester AY 2015-2016',
            lecturer: 'teacher',
            students: studentArray
        };

        function start() {

            if(Class.find({ courseTitle: 'sampleClass' }).count() === 0) {
                console.log('Inserting dummy data for Class');
                Class.insert(sampleClass);
            }
            else {
                console.log('Dummy Class data exists already');
            }
        }

        start();
    },

    'editClass': function (classId, classToEdit) { //Contains two arguments: the ID of the class to edit and the details to update the class with
        // check(classToEdit, { //Checks the validity of the types of passed variables. The use of this function will be dependent on the UI's implementation of editClass.
        //     courseTitle: String,
        //     semester: String,
        //     lecturer: String,
        //     students: [Schema.StudentSchema]
        // });

        /* Space to include future error type-checking and whatnots */

        Class.update({'_id' : classId}, {$set:classToEdit});
    },

    'editView': function (viewId, viewToEdit) { //Contains two arguments: the ID of the class to edit and the details to update the class with
        // check(viewToEdit, { //Checks the validity of the types of passed variables. The use of this function will be dependent on the UI's implementation of editClass.
        //     courseTitle: String,
        //     lecturer: String,
        //     section: String,
        //     view: [Schema.ViewState]
        // });

        /* Space to include future error type-checking and whatnots */

        View.update({'_id' : viewId}, {$set:viewToEdit});
    }
});

