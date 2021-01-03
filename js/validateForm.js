/* Validate Input from All Done Page */

// Get Selectors
const allDoneInput = $('.form-control');
const errorMessageDiv = $('#errorMessage');

// Create object to hold error messages
const errorMessages = { blank: "Input field can't be left blank", characters: 'Input must only contain letters' };

// Create object to styling for error messages
const errorStyles = {
	display: 'inline',
	border: '3px solid rgb(235, 78, 78)',
	color: 'rgb(235, 78, 78)',
	padding: '10px'
};

// Validate Input Function
function validateForm() {
	// Get value from input
	let name = allDoneInput.val().trim();

	// Guard clause to check for blank value & return error message
	if ([ '', null, undefined ].includes(name)) {
	}

	// Guard clause to check for valid input & return error message
	if (/[A-Za-z]/g.test(name)) {
	}
}
