/* file to hold code for rendering high scores */

// Variables to hold selectors

const highScoreContainer = $('#highScoreContainer');
const highScoreOl = $('#highScoreCard ol');

function renderHighScore() {
	// change display to show container
	highScoreContainer.css('display', 'block');
}

function printHighScores() {
	renderHighScore();

	// get scores from localStorage or set empty array
	let hScores = JSON.parse(window.localStorage.getItem('scores'));

	// sort scores from most to least
	hScores.sort(function(a, b) {
		return b.finalScore - a.finalScore;
	});
	console.table(hScores);
	// loop through each score to create an li

	hScores.forEach(function(scores) {
		let liTag = $('<li>').html(`${scores.name} - ${scores.finalScore}`);
		highScoreOl.append(liTag);
	});
	// display on page my appending
}

printHighScores();
