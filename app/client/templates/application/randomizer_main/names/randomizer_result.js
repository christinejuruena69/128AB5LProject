Template.RandomizerResult.helpers({
    tableSettings : function() {
            return {
                fields: [
                    { key: 'fullname', label: 'Name'},
                    { key: 'studentNumber', label: 'Student Number'},
                    { key: 'section', label: 'Section'},
                    { key: 'points', label: 'Points'},
                    { key: 'bias', label: 'Bias'},
                    { key: 'isBlackListed', label: 'Blacklisted'}
                ]
            };
        }
});