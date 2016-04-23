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
	},
	
	'change #section1l' : function(){
		var x = event.target.checked;
		Session.set("section1l", x);
	},
	
	'change #section2l' : function(){
		var x = event.target.checked;
		Session.set("section2l", x);
	},
	
	'change #section3l' : function(){
		var x = event.target.checked;
		Session.set("section3l", x);
	},
	
	'change #section4l' : function(){
		var x = event.target.checked;
		Session.set("section4l", x);
	},
	
	'change #section5l' : function(){
		var x = event.target.checked;
		Session.set("section5l", x);
	},
	
	'change #section6l' : function(){
		var x = event.target.checked;
		Session.set("section6l", x);
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
Template.filterPanel.onRendered(function () {
	Session.set("section1l", false);
	Session.set("section2l", false);
	Session.set("section3l", false);
	Session.set("section4l", false);
	Session.set("section5l", false);
	Session.set("section6l", false);
	Session.set("nStudent", 0);
});
Template.filterPanel.onDestroyed(function () {});
