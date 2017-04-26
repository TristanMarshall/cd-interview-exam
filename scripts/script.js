$(document).ready(function(){

	console.log("jQuery movin!");

	// function loop () {
	var looptext = "One Morning, When Gregor Samsa Woke";

	var container = document.getElementById("loop-container");

		for (var i = 0; i < 6; i++) {

			var indy = "";

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

			$(container).append("<div class='loop-class " + indy + "'>" + looptext + "</div><div class='second-class " + indy + "'>" + looptext +  "</div>");
		};

		console.log($(".loop-class"));

		$(".loop-class")[0].innerHTML = "One Morning, When Gregor Samsa";

});