/*****************************************************************************/
/*  Server Methods - Only used for creation of dummy Data*/
/*****************************************************************************/

Meteor.methods({
    'Bootstrap/CreateClassData': function () {

        teacher = Meteor.users.findOne({ username: 'teacher' });
        // console.log('Teacher id: ' + teacher._id);
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
            lecturer: teacher._id,
            students: studentArray
        };

        function start() {

            if(Class.find({ courseTitle: 'sampleClass' }).count() === 0) {
                console.log('Inserting dummy data for Class');
                Class.insert(sampleClass);
                console.log('Finished inserting dummy data for Class');
            }
            else {
                console.log('Dummy Class data exists already');
            }
        }

        start();
    }
});
