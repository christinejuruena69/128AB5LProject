/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.filterPanel.events({

    'click #Randomize': function(){
        var array = this.students;
        var randomIndex = Math.floor( Math.random() * array.length );
        var element = array[randomIndex];

        console.log(element.fullname);
    },

	'click #selectAll': function (){
		var checkboxes = $('.labSection');
		if(document.getElementById('selectAll').checked == true){
			  for(var i=0, n=checkboxes.length;i<n;i++) {
			  	checkboxes[i].name = i;
			    checkboxes[i].checked = true;
			  }
			return;
		}
	},
	
	'click #custom': function (){
		var checkboxes = $('.labSection');
		if(document.getElementById('custom').checked == true){
			  for(var i=0, n=checkboxes.length;i<n;i++) {
			  	checkboxes[i].checked = false;
			  	checkboxes[i].name = "labSection";
			  }
			return;
		}
	}
});
/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.filterPanel.helpers({});
/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.filterPanel.onCreated(function () {});
Template.filterPanel.onRendered(function () {});
Template.filterPanel.onDestroyed(function () {});
