Session.set('connectaReady', false);
Meteor.startup(function(){
 $.getScript('//cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js', function(){
  // script has loaded
  Session.set('conectaReady', true);
 });
});