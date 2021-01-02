/* file to hold code for scores */

function printHighScores() {
	// get scores from localStorage or set empty array
	let highscores = JSON.parse(window.localStorage.getItem('scores')) || [];
	console.table(highscores);
	// sort scores from most to least
	// loop through each score to create an li
	// display on page my appending
}
