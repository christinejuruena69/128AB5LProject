/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
import jsonQuery from 'json-query';
Template.filterPanel.events({
    'click #male-sex': function() {    
        $('.filtered-attributes-sex').html("Sex: Male");
    },

    'click #female-sex': function() {    
        $('.filtered-attributes-sex').html("Sex: Female");
    },

    'click #2010': function() {    
        var str = $('.filtered-attributes-batch').text()
        if(document.getElementById('2010').checked == true){
            $('.filtered-attributes-batch').append(" 2010");
        }else{
            $('.filtered-attributes-batch').each(function(){
                $(this).html($(this).html().split("2010").join(""));
            });
        }
    },

    'click #2011': function() {    
        if(document.getElementById('2011').checked == true){
            $('.filtered-attributes-batch').append(" 2011");
        }else{
            $('.filtered-attributes-batch').each(function(){
                $(this).html($(this).html().split(" 2011").join(""));
            });
        }
    },

    'click #2012': function() {    
        if(document.getElementById('2012').checked == true){
            $('.filtered-attributes-batch').append(" 2012");
        }else{
            $('.filtered-attributes-batch').each(function(){
                $(this).html($(this).html().split(" 2012").join(""));
            });
        }
    },

    'click #2013': function() {    
        if(document.getElementById('2013').checked == true){
            $('.filtered-attributes-batch').append(" 2013");
        }else{
            $('.filtered-attributes-batch').each(function(){
                $(this).html($(this).html().split(" 2013").join(""));
            });
        }
    },

    'click #2014': function() {    
        if(document.getElementById('2014').checked == true){
            $('.filtered-attributes-batch').append(" 2014");
        }else{
            $('.filtered-attributes-batch').each(function(){
                $(this).html($(this).html().split(" 2014").join(""));
            });
        }    
    },

    'click #2015': function() {    
        if(document.getElementById('2015').checked == true){
            $('.filtered-attributes-batch').append(" 2015");
        }else{
            $('.filtered-attributes-batch').each(function(){
                $(this).html($(this).html().split(" 2015").join(""));
            });
        }
    },

    'click #others': function() {    
        if(document.getElementById('2010').checked == true){
            $('.filtered-attributes-batch').append(" Others");
        }else{
            $('.filtered-attributes-batch').each(function(){
                $(this).html($(this).html().split(" Others").join(""));
            });
        }
    },

    'click .select-by-dropdown': function() {
        var dropdownValue = $( ".select-by-dropdown" ).val();
        if(dropdownValue == "Sex"){
            $('.sex-choices').show();
            $('.batch-choices').hide();
        }else if(dropdownValue == "Batch"){
            $('.sex-choices').hide();
            $('.batch-choices').show();
        }else{
            $('.sex-choices').hide();
            $('.batch-choices').hide();
        }
    },   
    
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

    'click #selectAllBatch': function (){
        var checkboxes = $('.batch');
        $('.filtered-attributes-batch').html("Batch: All");
        if(document.getElementById('selectAllBatch').checked == true){
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

    'click #customBatch': function (){
        var checkboxes = $('.batch');
        $('.filtered-attributes-batch').html("Batch: ");
        if(document.getElementById('customBatch').checked == true){
              for(var i=0, n=checkboxes.length;i<n;i++) {
                checkboxes[i].checked = false;
                checkboxes[i].name = "batch";
            }
            return;
        }
    }, 

    'click #filter-li-groupings': function(){
        $('.filtered-attributes-batch').html('');
        $('.filtered-attributes-sex').html('');
    },
    
    'change #section1l' : function(){
        var state = event.target.checked;
        Session.set("section1l", state);
        
        /* Code block to make this filter draw from the results in the adjacent table ONLY and not from the whole classlist
        var data;
        var count = filterList._collection.find().fetch();
        if (count.length==0){ //filterList is currently empty
            data = this.students;
        } else {
            data = filterList._collection.find().fetch();
        }
        */
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

    'change #section7l' : function(){
        var state = event.target.checked;
        Session.set("section7l", state);
        var data = this.students;
        current = jsonQuery(['[*section=?]', '7-L'], {data:data}).value;
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

    'change #section8l' : function(){
        var state = event.target.checked;
        Session.set("section8l", state);
        var data = this.students;
        current = jsonQuery(['[*section=?]', '8-L'], {data:data}).value;
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
    },
    
    'change #2010' : function(){
        var state = event.target.checked;
        Session.set("2010", state);
        var data = this.students;
        var contains;
        var current=[];
        
        for (var i=0; i<data.length; i++){
            contains = data[i].studentNumber.indexOf("2010");
            if (contains == 0){
                current.push(data[i]);
            }
        }
        
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
    
    'change #2011' : function(){
        var state = event.target.checked;
        Session.set("2011", state);
        var data = this.students;
        var contains;
        var current=[];
        
        for (var i=0; i<data.length; i++){
            contains = data[i].studentNumber.indexOf("2011");
            if (contains == 0){
                current.push(data[i]);
            }
        }
        
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
    
    'change #2012' : function(){
        var state = event.target.checked;
        Session.set("2012", state);
        var data = this.students;
        var contains;
        var current=[];
        
        for (var i=0; i<data.length; i++){
            contains = data[i].studentNumber.indexOf("2012");
            if (contains == 0){
                current.push(data[i]);
            }
        }
        
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
    
    'change #2013' : function(){
        var state = event.target.checked;
        Session.set("2013", state);
        var data = this.students;
        var contains;
        var current=[];
        
        for (var i=0; i<data.length; i++){
            contains = data[i].studentNumber.indexOf("2013");
            if (contains == 0){
                current.push(data[i]);
            }
        }
        
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
    
    'change #2014' : function(){
        var state = event.target.checked;
        Session.set("2014", state);
        var data = this.students;
        var contains;
        var current=[];
        
        for (var i=0; i<data.length; i++){
            contains = data[i].studentNumber.indexOf("2014");
            if (contains == 0){
                current.push(data[i]);
            }
        }
        
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
    
    'change #2015' : function(){
        var state = event.target.checked;
        Session.set("2015", state);
        var data = this.students;
        var contains;
        var current=[];
        
        for (var i=0; i<data.length; i++){
            contains = data[i].studentNumber.indexOf("2015");
            if (contains == 0){
                current.push(data[i]);
            }
        }
        
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
