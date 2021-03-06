Class = new Mongo.Collection('class');

Schema = {};

// Schema for student
Schema.StudentSchema = new SimpleSchema({
    fullname: {
        type: String
    },
    studentNumber: {
        type: String
    },
    image: {
        type: String,
        optional: true
    },
    nickname: {
        type: String,
        optional: true
    },
    birthday: {
        type: Date, //Can be converted to date
        optional: true
    },
    section: {
        type: String
    },
    sex: {
        type: String
    },
    points: {
        type: Number,
        defaultValue: 0
    },
    bias: {
        type: Number,
        defaultValue: 0
    },
    isBlackListed: {
        type: Boolean,
        defaultValue: false
    }
});

// Schema for the class
Schema.ClassSchema = new SimpleSchema({
    courseTitle: {
        type: String
    },
    courseCode: {
        type: String
    },
    semester: {
        type: String,
        optional: true
    },
    section: {
        // AB, T, ST, etc
        type: String
    },
    lecturer: {
        type: String
    },
    students: {
        type: [Schema.StudentSchema]
    }

});

Class.attachSchema(Schema.ClassSchema);

// Create a corresponding View collection after creating a new Class
Class.after.insert(function(userId, doc) {

    let viewData = lodash.pick(doc, [
        'courseTitle', 'lecturer', 'section', 'courseCode'
    ]);

    viewData.class = doc._id;
    viewData.view = [];

    View.insert(viewData);

});

// Update the corresponding view from the edited class
Class.after.update(function(userId, doc) {

    let viewData = lodash.pick(doc, [
        'courseTitle', 'lecturer', 'section', 'courseCode'
    ]);

    viewData.class = doc._id;
    viewData.view = [];

    View.update(
        {class: viewData.class},
        {$set: viewData},
        {multi: false, upsert: true}
    );

});

Class.after.remove(function(userId, doc) {

    let viewData = lodash.pick(doc, [
        'courseTitle', 'lecturer', 'section', 'courseCode'
    ]);

    View.remove(viewData);
});

Meteor.methods({

    /********************************************************************************
    What:
        Add a class to a teacher.
    Who:
        Admin type account.
    ********************************************************************************/
    'Admin/AddClass': function(classAttributes) {

        var loggedInUser = Meteor.user(); //id = Meteor.userId();

        // If user is not logged in
        if (loggedInUser._id === null) {
            throw new Meteor.Error(403, 'Forbidden');
            return notify('You must log in', 'bad');
        }
        // If user is logged in but is not an admin
        if (loggedInUser.profile.type !== 'Admin') {
            throw new Meteor.Error(403, 'Forbidden');
            return notify('Forbidden', 'bad');
        }

        check(classAttributes, {
            courseTitle: String,
            courseCode: String,
            section: String,
            semester: String,
            lecturer: String,
            students: [{
                fullname: String,
                studentNumber: String,
                image: String,
                birthday: Date,
                sex: String,
                section: String
            }]
        });

        var lecturer1 = Meteor.users.findOne({
            '_id': classAttributes.lecturer
        });

        // if lecturer is in the database
        if (lecturer1._id === classAttributes.lecturer) {
            return Class.insert(classAttributes);
        } else {
            throw new Meteor.Error(404, 'Not Found');
            notify('Lecturer does not exist');
            return;
        }
    },

    /********************************************************************************
    What:
        Edits the class details (Course Title, Course Code, Section, Semester)
    Who:
        Teacher who owns the class (lecturer), or admin type account.
    ********************************************************************************/
    'User/editClass': function(editedClass) {

        var user = Meteor.user(),
            id = Meteor.userId(),
            accountType;

        check(editedClass, {
            _id: String,
            courseTitle: String,
            courseCode: String,
            section: String,
            lecturer: String,
            semester: String
        });

        // If not logged in
        if (id === null) {
            throw new Meteor.Error(403, 'Must be logged in');
        }
        // Get account type
        if(user.profile && user.profile.type) {
            accountType = user.profile.type;
        }

        // If not admin or the user is not the lecturer for that class
        if(!(accountType === 'Admin' || editedClass.lecturer === id)) {
            throw new Meteor.Error(403, 'Invalid Privileges');
        }

        // Allow the edit to occur
        return Class.update({
                _id: editedClass._id
            }, {
                $set: editedClass
            }
        );
    },

    'deleteStudent': function(studentNumber, lecturer, classId) {

        var id = Meteor.userId();

        //check if a user is loggedin
        if (id === null) {
            throw new Meteor.Error(403, 'Forbidden');
            return;
        }

        var loggedInUser = Meteor.user(),
            student = Class.findOne({
                '_id': classId,
                'students': {
                    $elemMatch: {
                        'studentNumber': studentNumber
                    }
                }
            });

        //check if current user is the lecturer of the class
        if (loggedInUser._id === lecturer) {

            //checks if student is in the class list
            if (student._id === classId) {
                Class.update({ '_id': classId }, {
                    $pull: {
                        students: { studentNumber: studentNumber }
                    }
                });
            } else {
                throw new Meteor.Error(404, 'Not Found');
            }
        } else {
            throw new Meteor.Error(403, 'Forbidden');
        }
    },

    'addStudent': function(student, classId) {
        var id = Meteor.userId();

        if (id === null) {
            throw new Meteor.Error(403, 'Forbidden');
            return;
        }

        check(student, Schema.StudentSchema);



        var loggedInUser = Meteor.user(),
            classId1 = Class.findOne({
                '_id': classId
            });

        //check if the class lecturer is the current user and if the current user is of Teacher type
        if (loggedInUser._id === classId1.lecturer && loggedInUser.profile.type === 'Teacher') {
            Class.update({ '_id': classId }, {
                $push: {
                    'students': student
                }
            });
        } else {
            throw new Meteor.Error(403, 'Forbidden');
        }
    },

    'Teacher/editStudent': function(studentNumber, nickname, section, bias, classId) {
        Class.update(
            { '_id': classId, "students.studentNumber": studentNumber },
            { $set: { "students.$.nickname": nickname, "students.$.section": section, "students.$.bias": bias } }
        );
    },

    'Admin/deleteClass': function( classId ) {
        var id = Meteor.userId();

        if (id === null) {
            throw new Meteor.Error(403, 'Forbidden');
            return;
        }

        var loggedInUser = Meteor.user();

        if (loggedInUser.profile.type === 'Admin'){
            Class.remove({
                _id: classId
            });
        }
        else {
            throw new Meteor.Error(403, 'Forbidden');
        }
    }
});

if (Meteor.isServer) {

    Class.allow({
        insert: function(userId, doc) {
            var user = Meteor.users.findOne({ _id: userId });
            if (user.profile.type === 'Admin') {
                return true;
            } else {
                return false;
            }
        },
        update: function(userId, doc, fieldNames, modifier) {
            var user = Meteor.users.findOne({ _id: userId });

            if (user.profile.type === 'Teacher') {
                return true;
            } else {
                return false;
            }
        },
        remove: function(userId, doc) {
            var user = Meteor.users.findOne({ _id: userId });

            if (user.profile.type === 'Admin') {
                return true;
            } else {
                return false;
            }
        }
    });

    Class.deny({
        insert: function(userId, doc) {
            var user = Meteor.users.find({ _id: userId });
            if (user.profile.type === 'Admin') {
                return false;
            } else {
                return true;
            }
        },
        update: function(userId, doc, fieldNames, modifier) {
            var user = Meteor.users.findOne({ _id: userId });

            if (user.profile.type === 'Teacher') {
                return false;
            } else {
                return true;
            }
        },
        remove: function(userId, doc) {
            var user = Meteor.users.find({ _id: userId });
            if (user.profile.type === 'Admin') {
                return false;
            } else {
                return true;
            }
        }
    });
}
