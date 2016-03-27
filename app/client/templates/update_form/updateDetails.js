// Projects = new Meteor.Collection('projects');

Template.updateDetails.onCreated(function() {
  Session.set('updateDetailsErrors', {});
});

Template.updateDetails.events({
  'submit form': function(e) {
    e.preventDefault();

    var user = Meteor.user();

    user.fullname = $(e.target).find('[name=fullname]').val();
    user.email = $(e.target).find('[name=email]').val();
 
    Meteor.users.update(user.userId, {$set: user}, function(error) {
      if (error) {
        throwError(error.reason);
        console.log('Error');
      } else {        
        Router.go('/');
        console.log('Success');
      }
    });

  }
});



/*
  simple form syntax
  ___________________

  Template.updateDetails.events({
    'submit form': function(event) {
        event.preventDefault();
        var data = SimpleForm.processForm(event.target);        
        Projects.insert(data);
    }
  });
*/
