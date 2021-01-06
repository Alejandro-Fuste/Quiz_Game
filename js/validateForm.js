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
