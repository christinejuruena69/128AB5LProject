/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
import jsonQuery from 'json-query';
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
		var state = event.target.checked;
		Session.set("section1l", state);
		var data = this.students;
		current = jsonQuery(['[*section=?]', '1-L'], {data:data}).value;
		if (state){
			for (var i = 0; i < current.length; i++) {
				if (!filterList.findOne(current[i])) {
					filterList.insert(current[i]);
				}
			}
		} else {
			for (var i = 0; i < current.length; i++) {
				filterList.remove(current[i]);
			}
		}
        
	},
	
	'change #section2l' : function(){
		var state = event.target.checked;
		Session.set("section2l", state);
		var data = this.students;
		current = jsonQuery(['[*section=?]', '2-L'], {data:data}).value;
		if (state){
			for (var i = 0; i < current.length; i++) {
				if (!filterList.findOne(current[i])) {
					filterList.insert(current[i]);
				}
			}
		} else {
			for (var i = 0; i < current.length; i++) {
				filterList.remove(current[i]);
			}
		}
	},
	
	'change #section3l' : function(){
		var state = event.target.checked;
		Session.set("section3l", state);
		var data = this.students;
		current = jsonQuery(['[*section=?]', '3-L'], {data:data}).value;
		if (state){
			for (var i = 0; i < current.length; i++) {
				if (!filterList.findOne(current[i])) {
					filterList.insert(current[i]);
				}
			}
		} else {
			for (var i = 0; i < current.length; i++) {
				filterList.remove(current[i]);
			}
		}
	},
	
	'change #section4l' : function(){
		var state = event.target.checked;
		Session.set("section4l", state);
		var data = this.students;
		current = jsonQuery(['[*section=?]', '4-L'], {data:data}).value;
		if (state){
			for (var i = 0; i < current.length; i++) {
				if (!filterList.findOne(current[i])) {
					filterList.insert(current[i]);
				}
			}
		} else {
			for (var i = 0; i < current.length; i++) {
				filterList.remove(current[i]);
			}
		}
	},
	
	'change #section5l' : function(){
		var state = event.target.checked;
		Session.set("section5l", state);
		var data = this.students;
		current = jsonQuery(['[*section=?]', '5-L'], {data:data}).value;
		if (state){
			for (var i = 0; i < current.length; i++) {
				if (!filterList.findOne(current[i])) {
					filterList.insert(current[i]);
				}
			}
		} else {
			for (var i = 0; i < current.length; i++) {
				filterList.remove(current[i]);
			}
		}
	},
	
	'change #section6l' : function(){
		var state = event.target.checked;
		Session.set("section6l", state);
		var data = this.students;
		current = jsonQuery(['[*section=?]', '6-L'], {data:data}).value;
		if (state){
			for (var i = 0; i < current.length; i++) {
				if (!filterList.findOne(current[i])) {
					filterList.insert(current[i]);
				}
			}
		} else {
			for (var i = 0; i < current.length; i++) {
				filterList.remove(current[i]);
			}
		}
	},
	
	'change #nStudent' : function(){
		var x = event.target.value;
		Session.set("nStudent", x);
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
