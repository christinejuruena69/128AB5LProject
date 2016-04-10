View = new Mongo.Collection('view');

// Pick only the attributes we need for the view page
Schema.StudentViewSchema = Schema.StudentSchema.pick([
    'fullName', 'studentNumber', 'image', 'nickname', 'section'
]);

// All the flags for the view go here
// It includes the names of the groups as well
Schema.ViewState = new SimpleSchema({
    student: {
        type: [Schema.StudentViewSchema] //N Random Students
    },
    group: {
        type: Array
    },
    'group.$': {
        // Can split the array using _.chunk(array, groupsize)
        type: [Schema.StudentViewSchema] //Each group is an array of students.
    },
    viewType: {
        type: String
    },
    createdAt: {
        type: Date, //time stamp
        autoValue: function() {
            return new Date();
        }
    }
});

// We only need an array of ViewStates.
// This is in case the professor chooses to revert
// back to the previous view state
Schema.ViewSchema = new SimpleSchema({
    courseTitle: {
        type: String
    },
    lecturer: {
        type: String
    },
    section: {
        type: String
    },
    view: {
        type: [Schema.ViewState]
    }
});

View.attachSchema(Schema.ViewSchema);

if (Meteor.isServer) {

    View.allow({
        insert: function (userId, doc) {
            return false;
        },
        update: function (userId, doc, fieldNames, modifier) {
            return false;
        },
        remove: function (userId, doc) {
            return false;
        }
    });

    View.deny({
        insert: function (userId, doc) {
            return true;
        },
        update: function (userId, doc, fieldNames, modifier) {
            return true;
        },
        remove: function (userId, doc) {
            return true;
        }
    });
}

Meteor.methods({
    'Teacher/editView': function (viewId, viewToEdit) { //Contains two arguments: the ID of the class to edit and the details to update the class with
        var id = Meteor.userId();
        if(id === null || id !== viewToEdit.lecturer){
            throw new Meteor.Error(403, 'Forbidden');
            return;
        }
        View.update({'_id' : viewId}, {viewToEdit$set:viewToEdit});
    }
});