$(document).ready(function() {
	// Variables holding selectors
	const timerEl = $('#timer');
	const cardBodyEl = $('.card-body');
	const cardTitleEl = $('.card-body h5');
	const cardInstuctionsEl = $('.card-body #instructions');
	const cardTextEl = $('.card-text');
	const btnDiv = $('div.btn-div');
	const startBtn = $('.card-body .btn');
	const allDoneText = $('#resultsText');
	const mainContainer = $('.container');
	const allDoneContainer = $('#allDoneContainer');
	const allDoneButton = $('#button-addon1');
	console.log(allDoneButton);
	const allDoneInput = $('.form-control');
	console.log(allDoneInput);
	const highscoreEl = $('#highscore');
	const highScoreContainer = $('#highScoreContainer');
	const goBackButton = $('#button-addon2');
	const errorMessageDiv = $('#errorMessage');

	// State variables
	let [ secondsLeft, score, finalScore, highscores, counter, timerInterval ] = [ 76, [], '', [], 0 ];

	// Create object to hold error messages
	const errorMessages = { blank: "Input field can't be left blank", characters: 'Input must only contain letters' };

	// Create object to styling for error messages
	const errorStyles = {
		display: 'inline',
		border: '3px solid rgb(235, 78, 78)',
		color: 'rgb(235, 78, 78)',
		padding: '10px'
	};

	// Function declarations

	function emptyDiv() {
		cardTitleEl.empty();
		cardInstuctionsEl.detach();
		cardTextEl.empty();
		startBtn.detach();
	}

	function setTime() {
		timerEl.empty();
		timerInterval = setInterval(function() {
			secondsLeft--;
			timerEl.text('Timer:  ' + secondsLeft);

			if (secondsLeft === 0) {
				clearInterval(timerInterval);
				quizEnd();
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
			quizEnd();
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
			btnDiv.attr('class', 'feedback');
			btnDiv.html(right);
			setTimeout(() => {
				btnDiv.attr('class', 'hide');
			}, 1000);
			score.push(secondsLeft);
			emptyDiv();
			nextQuestion();
		} else {
			btnDiv.attr('class', 'feedback');
			btnDiv.html(wrong);
			setTimeout(() => {
				btnDiv.attr('class', 'hide');
			}, 1000);
			score.push(secondsLeft - 75);
			emptyDiv();
			nextQuestion();
		}
	}

	function quizEnd() {
		clearInterval(timerInterval);
		resultsPage();
	}

	function resultsPage() {
		mainContainer.css('display', 'none');
		allDoneContainer.css('display', 'block');
		finalScore = score.reduce((a, b) => a + b, 0);
		cardTitleEl.html('<h5>All done!</h5>');
		allDoneText.html('<h6></h6>').text('Your score is ' + finalScore + '!');
		allDoneButton.append();
	}

	function highScores() {
		renderHighScore();

		highscores = JSON.parse(localStorage.getItem('scores')) || [];

		let name = allDoneInput.val().trim();

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

	function handler(event) {
		var target = $(event.target);
		var answerChoice;
		if (target.is('p')) {
			answerChoice = target.text().slice(3);
			return answerChoice;
		}
	}

	/* *****  Validate Input from All Done Page ***** */

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

	/*  ********** Event Listeners ********** */

	// Event listener for Start Button
	startBtn.on('click', function(event) {
		event.preventDefault();
		setTime();
		emptyDiv();
		initialQuestion();
	});

	cardTextEl.on('click', function(event) {
		event.preventDefault();
		handler(event);
		answerResponse();
	});

	// Event listener for viewing highscores

	highscoreEl.on('click', function(event) {
		event.preventDefault();
		window.location.href = 'highscore.html';
	});

	allDoneInput.on('submit', function(event) {
		event.preventDefault();
		renderHighScore();
		printHighScores();
	});

	allDoneButton.on('click', function(event) {
		event.preventDefault();
		console.log('click');
		validateForm();
	});

	goBackButton.on('click', function(event) {
		event.preventDefault();
		window.location.href = 'index.html';
	});
});
