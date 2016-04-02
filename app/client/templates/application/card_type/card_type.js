Template.CardType.events({
    'click #add-email': function() {  

        var newspan = document.createElement('span');
        newspan.innerHTML = '<span class=""><input  type="email" id="emailadd" name="emailadd" placeholder="Email address" class="form-control input-md"></span>';
        document.getElementById('emails').appendChild(newspan);
    }

    // 'click #drpdwn-user-type': function() {
        // var a = document.getElementById("drpdwn-user-type");
        // var val = a.options[a.selectedIndex].value;
      
        // alert(a.options[a.selectedIndex].value);
        // alert($('#thedropdown').val());

  //       $(".text_div").text(function () {
	 //    	return $(this).text().replace("contains", "hello everyone"); 
		// });
		// $("#selected-user-type").text(function () {
	 //    	return $(this).text( val ); 
		// });
		// 	var val;
		// $("#drpdwn-user-type li a").click( function() {
  // 			  var yourText = $(this).text();
		// });
		// alert(val);




    // }
});

Template.CardType.helpers({
    dataType: function() {

        var type = Meteor.users.findOne({
            _id: Meteor.userId()
        }).profile.type;

        return (type === 'Teacher') ? 'Classes' : 'Accounts';
    }
});