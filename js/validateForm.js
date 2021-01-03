/* Validate Input from All Done Page */

// Get Input Selector
const allDoneInput = $('.form-control');

// Create object to hold error messages
const errorMessages = { blank: "Input field can't be left blank", characters: 'Input must only contain letters' };

// Validate Input Function
function validateForm() {
	// Get value from input
	let name = allDoneInput.val().trim();

	// Guard clause to check for blank value & return error message

	// Guard clause to check for valid input & return error message
}
