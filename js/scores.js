/* file to hold code for scores */

function printHighScores() {
	// get scores from localStorage or set empty array
	let hScores = JSON.parse(window.localStorage.getItem('scores'));

	// sort scores from most to least
	hScores.sort(function(a, b) {
		return b.finalScore - a.finalScore;
	});
	console.table(hScores);
	// loop through each score to create an li
	const highScoreOl = $('#highScoreCard ol');
	hScores.forEach(function(scores) {
		let liTag = $('<li>').html(`${scores.name} - ${scores.finalScore}`);
		highScoreOl.append(liTag);
	});
	// display on page my appending
}
