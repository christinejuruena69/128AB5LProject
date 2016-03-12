View = new Mongo.Collection('view');

// Pick only the attributes we need for the view page
StudentViewSchema = StudentSchema.pick(['fullName', 'studentNumber', 'image', 'nickname', 'section']);

// All the flags for the view go here
// It includes the names of the groups as well
ViewState = new SimpleSchema({
    student: {
        type: [StudentViewSchema]
    },
    section: {
        type: String
    },
    group: {
        type: Array
    },
    'group.$': {
        // Can split the array using _.chunk(array, groupsize)
        type: [StudentViewSchema] //Each group is an array of students.
    },
    viewType: {
        type: String
    }
});

// We only need an array of ViewStates.
// This is in case the professor chooses to revert
// back to the previous view state
ViewSchema = new SimpleSchema({
    view: {
        type: [ViewState]
    }
});

View.attachSchema(ViewSchema);

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
