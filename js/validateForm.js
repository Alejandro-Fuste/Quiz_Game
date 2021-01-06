/* Validate Input from All Done Page */

// Get Selectors
const allDoneInput = $('.form-control');
const allDoneButton = $('#button-addon1');
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

// Render error message
function renderErrorMessage(message) {
	errorMessageDiv.css(errorStyles);
	errorMessageDiv.text(message);
}

// Validate Input Function
function validateForm() {
	// Get value from input
	let name = allDoneInput.val().trim();
	console.log(name);

	// Guard clause to check for blank value & return error message
	if ([ '', null, undefined ].includes(name)) {
		renderErrorMessage(errorMessages.blank);
		return false;
	}

	// Guard clause to check for valid input & return error message
	if (/[^A-Za-z\s]/g.test(name)) {
		renderErrorMessage(errorMessages.characters);
		return false;
	}

	if (/[A-Za-z\s]/g.test(name)) {
		return highScores();
	}
}

function highScores() {
	// renderHighScore();

	let name = allDoneInput.val().trim();

	// if (name !== '') {
	// 	highscores = JSON.parse(window.localStorage.getItem('scores')) || [];
	// }

	highscores = JSON.parse(window.localStorage.getItem('scores')) || [];

	let scores = {
		name,
		finalScore
	};

	highscores.push(scores);

	localStorage.setItem('scores', JSON.stringify(highscores));

	window.location.href = 'highscore.html';
}

function renderHighScore() {
	// change display of page
	mainContainer.css('display', 'none');
	allDoneContainer.css('display', 'none');
	highScoreContainer.css('display', 'block');
}

allDoneButton.on('click', function(event) {
	event.preventDefault();
	console.log('click');
	validateForm();
});
