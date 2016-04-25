Template.NamesList.events({
});

Template.NamesList.helpers({
    tableSettings : function() {
            return {
                fields: [
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
/* NamesList: Lifecycle Hooks */
/*****************************************************************************/
Template.NamesList.onCreated(function() {});

Template.NamesList.onRendered(function() {});

Template.NamesList.onDestroyed(function() {});
