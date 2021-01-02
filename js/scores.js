/* file to hold code for scores */

function printHighScores() {
	// get scores from localStorage or set empty array
	let hScores = JSON.parse(window.localStorage.getItem('scores')) || [];

	// sort scores from most to least
	hScores.sort(function(a, b) {
		return b.finalScore - a.finalScore;
	});
	console.table(hScores);
	// loop through each score to create an li
	// display on page my appending
}
