RandomizerResult = new Mongo.Collection('ranresult');


Meteor.methods({
    'InsertRandomList': function(list) {
        //Contains two arguments: the ID of the class to edit and the details to update the class with
        // var id = Meteor.userId();
        // if (id === null) {
        //     throw new Meteor.Error(403, 'Forbidden');
        //     return;
        // }
        
        RandomizerResult.remove({});
        RandomizerResult.insert(list);

    }
});