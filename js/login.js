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
	const input = document.getElementsByClassName('submit')[0];

	button.addEventListener('click', event => {
		event.preventDefault();
		console.log(input.value);

	}); 

	// button.addEventListener('click', function(event){

	//}); 

})();