$(document).ready(function(){
	$( "#expander" ).hide();
	$( "#searchbox" ).hide();

	// set string variable for loop
	var looptext = "One Morning, When Gregor Samsa Woke";

	// get ID of container
	var container = document.getElementById("loop-container");
		for (var i = 0; i < 6; i++) {

			var indy = "";

			// set second class of div based off of index
			switch(i) {
				case 0:
					indy = "zero";
					break;
				case 1:
					indy = "one";
					break;
				case 2:
					indy = "two";
					break;
				case 3:
					indy = "three";
					break;
				case 4:
					indy = "four";
					break;
				case 5:
					indy = "five";
					break;
			}

			// append div HTML to container
			$(container).append("<div class='loop-class " + indy + "'>" + looptext + "</div><div class='second-class " + indy + "'>" + looptext +  "</div><br>");
		};

		// Change string variable for loop with 0 index
		$(".loop-class")[0].innerHTML = "One Morning, When Gregor Samsa";

		// Toggle expanding menu
		$('#expandMenu').click(function(){
			$('#expander').removeClass('hidden');
		   $( "#expander" ).fadeToggle( "slow", function() {
  		});
		});

		// Toggle search box
		$('#searching').click(function(){
			$('#searchinput').val('');
			$('#searchbox').removeClass('hidden');
		   $("#searchbox").fadeToggle( "slow", function() {
  		});
		});

		// Toggle search box from X
		$("#closesearch").click(function() {
			$('#searchinput').val('');
			$("#searchbox").fadeToggle( "slow", function() {
			});
		});

});