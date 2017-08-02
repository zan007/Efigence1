(function(){

	// const button = document.getElementsByTagName('button')[0];
	// const input = document.getElementsByTagName('input')[0];

	// const button = document.querySelector('.login');
	// const input = document.querySelector('.submit');

	// const button = document.querySelectorAll('.login')[0];
	// const input = document.querySelectorAll('.submit')[0];

	// const button = document.getElementByID('button')[0];
	// const input = document.getElementByID('input')[0];

	const button = document.querySelectorAll('.button_go')[0];
	const input = document.querySelectorAll('.submit')[0];
	const login = document.querySelectorAll('.login_input')[0];

	login.addEventListener('blur', event => {
		if (login.value.length > 1){
			document.querySelectorAll('.login_number')[0].innerHTML = login.value;
			document.querySelectorAll('.login_div')[0].style.display = "";
			document.querySelectorAll('.login_input')[0].style.display = 'none';
		}
	});

	button.addEventListener('click', event => {
		event.preventDefault(); // zapobiega wczytaniu strony od nowa
		if (input.value.length <1)
		{
			document.querySelectorAll('.submit')[0].style.border = "3px solid #c00000";
			document.querySelectorAll('.submit')[0].value = "Wprowadź hasło";
			document.querySelectorAll('.submit')[0].style.color = "#c00000";
		}
		else document.querySelectorAll('.submit')[0].style.border = "none";
		if (login.value.length <1)
		{
			document.querySelectorAll('.login_input')[0].style.border = "3px solid #c00000";
			document.querySelectorAll('.login_input')[0].value = "Wprowadź login";
			document.querySelectorAll('.login_input')[0].style.color = "#c00000";
		}
		else document.querySelectorAll('.login_input')[0].style.border = "none";

		if (input.value.length <1){
			if (login.value.length <1) location.href = 'index.html';
		};
	});

	input.addEventListener('click', event => {
		input.value = "";
	});
	login.addEventListener('click', event => {
		login.value = "";
	});



	// button.addEventListener('click', function(event){

	//}); 

})();