$(document).ready(function() {
	// Variables holding selectors
	const highscoreEl = $('#highscore');
	const timerEl = $('#timer');
	const cardBodyEl = $('.card-body');
	const cardTitleEl = $('.card-title');
	const cardInstuctionsEl = $('#instructions');
	const cardTextEl = $('.card-text');
	const startBtn = $('.btn');
	const cardInstructions =
		'The quiz will begin once the start button is clicked. You will have 75 seconds to complete the quiz. Questions that are answered incorrectly will result in the time being reduced. When questions are answered correctly, the time it took to answer question will be recorded. Your total time will be displayed at the end of the quiz.';
	const startBtnText = 'Start Quiz';
	let secondsLeft = 76;

	// Function declarations

	function startScreen() {
		cardTitleEl.text('Code Quiz Challenge');
		$('.card-body p').before(cardInstuctionsEl.detach());
		cardTextEl.text(cardInstructions);
		$('.card-body').append(startBtn.detach());
	}

	function emptyDiv() {
		cardTitleEl.empty();
		cardInstuctionsEl.detach();
		cardTextEl.empty();
		startBtn.detach();
	}

	function setTime() {
		timerEl.empty();
		var timerInterval = setInterval(function() {
			secondsLeft--;
			timerEl.text('Timer:  ' + secondsLeft);

			if (secondsLeft === 0) {
				clearInterval(timerInterval);
				alert('Time has expired');
			}
		}, 1000);
	}

	function calcScore() {
		var rightScore = secondsLeft;
		var wrongScore = 75 - secondsLeft;

		console.log(score);
	}

	// Event listener for Start Button
	startBtn.on('click', function() {
		event.preventDefault();
		setTime();

		console.log('score');
	});

	// Event listener for viewing highscores

	highscoreEl.on('click', function() {
		event.preventDefault();
		console.log('click');
	});
});
