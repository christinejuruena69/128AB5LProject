RandomizerResult = new Mongo.Collection('ranresult');


Meteor.methods({
    'InsertRandomList': function(list) {
        //Contains two arguments: the ID of the class to edit and the details to update the class with
        RandomizerResult.insert(list);
    },

    'RemoveRandomList' : function(){
    	RandomizerResult.remove({});
    }
});
