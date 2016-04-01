/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.filterPanel.events({
	'click #selectAll': function (){
		checkboxes = $('.labSection');
		if(document.getElementById('selectAll').checked == true){
			  for(var i=0, n=checkboxes.length;i<n;i++) {
			  	checkboxes[i].name = i;
			    checkboxes[i].checked = true;
			  }
			return;
		}
	}
	
	'click #custom': function (){
		checkboxes = $('.labSection');
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
