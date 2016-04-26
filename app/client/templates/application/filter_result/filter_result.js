Template.FilterResult.helpers({
    tableSettings: function () {
        return {
            fields: [
                { key: 'fullname', label: 'Name' },
                { key: 'studentNumber', label: 'Student Number' },
                { key: 'section', label: 'Section' },
                { key: 'points', label: 'Points' },
                { key: 'bias', label: 'Bias' },
                { key: 'isBlackListed', label: 'Blacklisted' }
            ]
        };
    },
    
    listFilter: function () {
        return filterList;
    },
    empty: function(){
        if (!filterList._collection.findOne()){
            return true;
        } else {
            return false;
        }
    }
});