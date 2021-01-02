/* file to hold code for scores */

function printHighScores() {
	// get scores from localStorage or set empty array
	let hScores = JSON.parse(window.localStorage.getItem('scores')) || [];
	console.table(hScores);
	// sort scores from most to least
	// loop through each score to create an li
	// display on page my appending
}
