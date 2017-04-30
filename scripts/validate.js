$(document).ready(function(){

	// hide account state
	$(".jumbo-inner-container-account").hide();

	// Set header login state to "login" on ready
	$(".login-account")[0].innerHTML = "LOG IN";
	$(".login-account-mobile")[0].innerHTML = "LOG IN";

	// Close dialog / reset values
	$("#cancelLogin").click(function() {
		$(".validation-div")[0].innerHTML = "";
		$(".email-input").val("");
		$(".password-input").val("");
		$("#dialogoverlay").fadeToggle( "slow", function() {
		});
	});

	// Submit email / password validation
	$("#submitLogin").click(function() {

		// get password, email value
		var password = $("#passwordcheck").val();
		var emailaddress = $("#emailinput").val();

		// filter for valid email address
		var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		// check for empty input fields
		if (password.length === 0 && emailaddress.length === 0 ) {
			$(".validation-div")[0].innerHTML = "Please enter an Email Address & Password";
			return;
		}

		// check to see if length is greater than 6
		if (password.length < 7 ) {
		$(".validation-div")[0].innerHTML = "Password must be greater than 6 characters";
		return;
		} 

		if(!filter.test(emailaddress)) {

			$(".validation-div")[0].innerHTML = "Please enter a valid email address";
			return;
		} 

		// change element inner HTML
		$(".jumbo-header-account")[0].innerHTML = "Welcome Back to Z-Wave!";
		$(".jumbo-subheader-account")[0].innerHTML = "Account Email: " + emailaddress;
		$(".login-account")[0].innerHTML = "ACCOUNT";
		$(".login-account-mobile")[0].innerHTML = "ACCOUNT";


		// change jumbo account state
		$(".jumbo-inner-container").hide();
		$(".jumbo-inner-container-account").show();

		// reset input values
		$(".validation-div")[0].innerHTML = "";
		$(".email-input").val("");
		$(".password-input").val("");
		$("#dialogoverlay").fadeToggle( "slow", function() {
		});
	});


});