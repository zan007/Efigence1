(function(){

	const button = document.querySelectorAll('.button_go')[0];
	const input = document.querySelectorAll('.submit')[0];
	const login = document.querySelectorAll('.login_input')[0];
	const error_message = document.querySelectorAll('.error_message')[0];
	const error_text = document.querySelectorAll('.error_text')[0];
	const form = document.querySelectorAll('.main_form')[0];

	login.addEventListener('blur', event => {
		if (login.value.length > 1){
			document.querySelectorAll('.login_number')[0].innerHTML = login.value;
			document.querySelectorAll('.login_div')[0].style.display = "";
			document.querySelectorAll('.login_input')[0].style.display = 'none';
		}
	});

	button.addEventListener('click', event => {
		event.preventDefault(); // zapobiega wczytaniu strony od nowa
		$.ajax({
  			type: "post",
  			data: {
    			login: login.value,
   				password: input.value
 			 },
 			 url: "https://efigence-camp.herokuapp.com/api/login",
 			 error: function(response) {
  			  console.log(response.responseJSON.message);
  			  error_text.innerHTML = response.responseJSON.message;
  			  error_message.style.display = "";
  			  $("form").css("padding-bottom", "210px");
  			},
  			success: function(response) {
   			 console.log(response);
   			 error_message.style.display = "none";
 			 }
		});

		if (input.value.length <1)
		{
			input.style.border = "3px solid #c00000";
		}
		else {
			input.style.border = "none";
		}
		if (login.value.length <1)
		{
			login.style.border = "3px solid #c00000";
		}
		else {login.style.border = "none";
		}

	});
		

	input.addEventListener('click', event => {
		input.value = "";
	});
	login.addEventListener('click', event => {
		login.value = "";
	});


})();

