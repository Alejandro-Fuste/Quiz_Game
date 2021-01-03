/* Validate Input from All Done Page */

// Get Input Selector
const allDoneInput = $('.form-control');
let name = allDoneInput.val().trim();

// Create object to hold error messages
const errorMessages = { blank: "Input field can't be left blank", characters: 'Input must only contain letters' };

// Validate Input Function
