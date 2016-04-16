/*****************************************************************************/
/* CoolRandomizer: Event Handlers */
/*****************************************************************************/
Template.CoolRandomizer.events({
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
    'click #gender': function (){
        $("#gender-div").show();
    }
});

/*****************************************************************************/
/* CoolRandomizer: Helpers */
/*****************************************************************************/
Template.CoolRandomizer.helpers({
    
});

/*****************************************************************************/
/* CoolRandomizer: Lifecycle Hooks */
/*****************************************************************************/
Template.CoolRandomizer.onCreated(function () {});
Template.CoolRandomizer.onRendered(function () {});
Template.CoolRandomizer.onDestroyed(function () {});
