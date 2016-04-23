/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
import jsonQuery from 'json-query';
Template.RandomizerWindow.events({
    
    
    'click #randomizer-button' : function(){
        var data = this.students;
        console.log(data[0]);
        console.log(jsonQuery('[nickname=Doris].studentNumber', {data: data}));
       
        
    }
});
/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.RandomizerWindow.helpers({});
/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.RandomizerWindow.onCreated(function () {});
Template.RandomizerWindow.onRendered(function () {});
Template.RandomizerWindow.onDestroyed(function () {});
