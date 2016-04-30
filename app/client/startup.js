Meteor.startup(function () {
    Session.set('connectaReady', false);

    $.getScript('//cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js', function () {
        // script has loaded
        Session.set('connectaReady', true);
    });

});
