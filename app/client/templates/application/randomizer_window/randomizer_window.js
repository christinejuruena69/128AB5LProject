/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/

getRand = function (n) {
    var min = 0;
    var max = n;
    return Math.floor(Random.fraction() * (max - min + 1)) + min;
};

fisherYatesShuffle = function(assign, size){
    var rand;
    var temp;
    for (var i = size-1; i>=0; i--){
                rand = getRand(i);
                temp = assign[rand]
                assign[rand] = assign[i];
                assign[i] = temp;
            }
}



import jsonQuery from 'json-query';
Template.RandomizerWindow.events({


    'click #save' : function(){
        var list = randomList.find().fetch();
        console.log(list);

        Meteor.call('RemoveRandomList');

        for (var i=0; i<list.length; i++){

            Meteor.call('InsertRandomList', list[i]);
        }

        notify("Successfully saved roster.", "good");


    },
    'click #randomizer-button' : function(){


        var result = filterList._collection.find().fetch();
        if (result.length==0){
            result = this.students;
        }
        //Select N results

        var size = Session.get("nStudent");
        if (size==0){
            notify("Number of students is 0. Please select the number of students you wish to get.", "bad");
            return;
        }
        randomList.remove({});

        var unique = [];
        var curr = getRand(result.length-1);
        //Get N unique random indices from the filtered result
        if (result.length > size) {
            for (i = 0; i < size; i++) {
                while (_.contains(unique, curr)) {
                    curr = getRand(result.length - 1);
                }
                unique.push(curr);
            }
            var newResult = [];
            for (var i = 0; i < size; i++) {
                newResult[i] = result[unique[i]];
            }
            //Push the randomly sorted list to the collection

            for (var i = 0; i < newResult.length; i++) {
                randomList.insert(newResult[i]);
            }
        } else {
            //Just push all of the results since it is lower than the required students
            for (var i = 0; i < result.length; i++) {
                randomList.insert(result[i]);
            }
        }

        notify("Randomized successfully.", "good");



    }
});
/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.RandomizerWindow.helpers({
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
/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.RandomizerWindow.onCreated(function () {

});
Template.RandomizerWindow.onRendered(function () {

});
Template.RandomizerWindow.onDestroyed(function () {});
