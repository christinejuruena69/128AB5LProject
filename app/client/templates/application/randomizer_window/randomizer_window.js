/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/

getRand = function (n) {
    var min = 0;
    var max = n;
    return Math.floor(Random.fraction() * (max - min + 1)) + min;
};

import jsonQuery from 'json-query';
Template.RandomizerWindow.events({
    
    
    'click #randomizer-button' : function(){
        var result=[];
        var current;
        var data = this.students;
        var sectionName = "7-L";
        randomList._collection.remove({});
        
        //Filter by sections
        if (Session.get("section1l")){
            current = jsonQuery(['[*section=?]', '1-L'], {data:data}).value;
            result = result.concat(current);
        }
        
        if (Session.get("section2l")){
            current = jsonQuery(['[*section=?]', '2-L'], {data:data}).value;
            result = result.concat(current);
        }
        
        if (Session.get("section3l")){
            current = jsonQuery(['[*section=?]', '3-L'], {data:data}).value;
            result = result.concat(current);
        }
        
        if (Session.get("section4l")){
            current = jsonQuery(['[*section=?]', '4-L'], {data:data}).value;
            result = result.concat(current);
        }
        
        if (Session.get("section5l")){
            current = jsonQuery(['[*section=?]', '5-L'], {data:data}).value;
            result = result.concat(current);
        }
        
        if (Session.get("section6l")){
            current = jsonQuery(['[*section=?]', '6-L'], {data:data}).value;
            result = result.concat(current);
        }
        for (var i=0; i<result.length; i++){
            randomList.insert(result[i]);
        }
        
        
        //Select N results
        console.log(Session.get("nStudent"));
        console.log(getRand(10));
        
    }
});
/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.RandomizerWindow.helpers({});
/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.RandomizerWindow.onCreated(function () {

});
Template.RandomizerWindow.onRendered(function () {});
Template.RandomizerWindow.onDestroyed(function () {});
