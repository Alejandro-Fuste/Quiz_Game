$(document).ready(function() {
	// Variables holding selectors
	const highscoreEl = $('#highscore');
	const timerEl = $('#timer');
	const cardBodyEl = $('.card-body');
	const cardTitleEl = $('.card-body h5');
	const cardInstuctionsEl = $('#instructions');
	const cardTextEl = $('.card-text');
	const btnDiv = $('div.btn-div');
	console.log(btnDiv);
	const startBtn = $('.card-body .btn');
	const cardInstructions =
		'The quiz will begin once the start button is clicked. You will have 75 seconds to complete the quiz. Questions that are answered incorrectly will result in the time being reduced. When questions are answered correctly, the time it took to answer question will be recorded. Your total time will be displayed at the end of the quiz.';
	const startBtnText = 'Start Quiz';
	let secondsLeft = 76;
	let score = [];
	let quiz = [
		{
			question: 'Commonly used data types DO NOT include:',
			answers: [ 'strings', 'alerts', 'boolean', 'float' ],
			correct: 'alerts'
		},

		{
			question: 'The condition of an if/else statement is enclosed with ',
			answers: [ 'square brackets', 'parentheses', 'curly braces', 'commas' ],
			correct: 'parentheses'
		},

		{
			question: 'Arrays in javascripts can used to store ',
			answers: [ 'numbers', 'strings', 'objects', 'all of the above' ],
			correct: 'all of the above'
		},

		{
			question: 'Strings must be enclosed with which of the following except ',
			answers: [ 'curly braces', 'single quotes', 'double quotes', 'back quotes' ],
			correct: 'curly braces'
		},

		{
			question: 'How do you call a function named "myFunction"?',
			answers: [ 'call function myFunction()', 'call myFunction()', 'myFunction()', 'myfunction()' ],
			correct: 'myFunction()'
		}
	];

	let counter = 0;

	console.log(quiz.length);
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

	function initialQuestion() {
		cardTitleEl.text(quiz[counter].question);

		var a = $('<p></p>').text('A. ' + quiz[counter].answers[0]);
		var b = $('<p></p>').text('B. ' + quiz[counter].answers[1]);
		var c = $('<p></p>').text('C. ' + quiz[counter].answers[2]);
		var d = $('<p></p>').text('D. ' + quiz[counter].answers[3]);

		cardTextEl.append(a, b, c, d);
	}

	function nextQuestion() {
		counter++;

		if (counter < quiz.length) {
			cardTitleEl.text(quiz[counter].question);

			var a = $('<p></p>').text('A. ' + quiz[counter].answers[0]);
			var b = $('<p></p>').text('B. ' + quiz[counter].answers[1]);
			var c = $('<p></p>').text('C. ' + quiz[counter].answers[2]);
			var d = $('<p></p>').text('D. ' + quiz[counter].answers[3]);

			cardTextEl.append(a, b, c, d);
		} else {
			//   resultsPage();
		}
	}

	function answerResponse() {
		/* get the text from the answer choice the user clicked &
			compare it to the list of correct answers */
		var correctAnswers = [];

		for (i = 0; i < quiz.length; i++) {
			correctAnswers.push(quiz[i].correct);
		}

		var choice = correctAnswers.includes(handler(event));
		var right = '<h6>"Correct!"</h6>';
		var wrong = '<h6>"Wrong!"</h6>';

		if (choice === true) {
			btnDiv.append(right);
			score.push(secondsLeft);
			emptyDiv();
			nextQuestion();
			// btnDiv.empty();
		} else {
			btnDiv.append(wrong);
			score.push(secondsLeft - 75);
			emptyDiv();
			// cardBtnSpan.empty(wrong);
			nextQuestion();
		}
		console.log(score);
	}

	function handler(event) {
		var target = $(event.target);
		var answerChoice;
		if (target.is('p')) {
			answerChoice = target.text().slice(3);
			return answerChoice;
		}
		// return answerChoice;
	}

	// Event listener for Start Button
	startBtn.on('click', function() {
		event.preventDefault();
		setTime();
		emptyDiv();
		initialQuestion();

		// console.log('score');
	});

	cardTextEl.on('click', function() {
		event.preventDefault();
		handler(event);
		answerResponse();
	});

	// Event listener for viewing highscores

	highscoreEl.on('click', function() {
		event.preventDefault();
		console.log('click');
	});
});
