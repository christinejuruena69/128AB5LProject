/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.filterPanel.events({
    'click .male-sex': function() {    
        $('.filtered-attributes-sex').html("Sex: Male");
    },

    'click .female-sex': function() {    
        $('.filtered-attributes-sex').html("Sex: Female");
    },

    'click .batch10': function() {    
        $('.filtered-attributes-batch').html("Batch: 2010");
    },

    'click .batch11': function() {    
        $('.filtered-attributes-batch').html("Batch: 2011");
    },

    'click .batch12': function() {    
        $('.filtered-attributes-batch').html("Batch: 2012");
    },

    'click .batch13': function() {    
        $('.filtered-attributes-batch').html("Batch: 2013");
    },

    'click .batch14': function() {    
        $('.filtered-attributes-batch').html("Batch: 2014");
    },

    'click .batch15': function() {    
        $('.filtered-attributes-batch').html("Batch: 2015");
    },

    'click .batch-others': function() {    
        $('.filtered-attributes-batch').html("Batch: Others");
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
