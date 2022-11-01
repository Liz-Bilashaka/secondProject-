// store different sections
const introduction = document.getElementById("introductionPage");
const question = document.getElementById("questionPage");
const score = document.getElementById("scorePage");
const restartBtn = document.getElementById("restart");
const endQuizBtn = document.getElementById("endQuiz");
const scoreInfo = document.getElementById("scoreInfo");
const acknowledgement = document.getElementById("acknowledgement");

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const gamerName = document.getElementById("gamerName");


const displayFullName = localStorage.getItem("fullName") || " ";

gamerName.innerHTML = `Welcome ${displayFullName}`;

// Determines what section is shown
function navigatePage() {
	if (
		localStorage.fullName !== "undefined" &&
		localStorage.state === "question"
	) {
		question.style.display = "block";
		introduction.style.display = "none";
		score.style.display = "none";
		gamerName.style.display = "block";
	} else if (
		localStorage.fullName !== "undefined" &&
		localStorage.state === "score"
	) {
		question.style.display = "none";
		introduction.style.display = "none";
		score.style.display = "block";
		gamerName.style.display = "block";
		scoreInfo.innerHTML = `${localStorage.getItem(
      "totalCorrectAnswer"
    )} out of ${localStorage.getItem("totalQuizMark")}`;
		// Function that triggers acknowledgement
		accreditScores(
			calcPercentage(
				localStorage.getItem("totalCorrectAnswer"),
				localStorage.getItem("totalQuizMark")
			)
		);
	} else {
		question.style.display = "none";
		score.style.display = "none";
		introduction.style.display = "block";
		gamerName.style.display = "none";
	}
}

navigatePage();

function calcPercentage(totalCorrectAnswer, lengthOfQuiz) {
	return (totalCorrectAnswer * 100) / lengthOfQuiz || 0;
}

function accreditScores(percentage) {
	if (percentage >= 90) {
		acknowledgement.innerHTML = ` Hi ${displayFullName} You had ${percentage}%. Excellent`;
		//DOcument.inner = 'Excellent
	} else if (percentage >= 70) {
		acknowledgement.innerHTML = ` Hi ${displayFullName} You had ${percentage}%. Very Good`;
		// //DOcument.inner = 'VGood
	} else if (percentage >= 50) {
		acknowledgement.innerHTML = ` Hi ${displayFullName} You had ${percentage}%. Good. Try harder next time`;
		// //DOcument.inner = 'Good
	} else {
		acknowledgement.innerHTML = ` Hi ${displayFullName} You had ${percentage}%. Hmmm, play again to be a master`;
		// //DOcument.inner = 'Try Again
	}
}

// list of quiz questions
// JSON
const easyQuiz = [{
		question: "What makes a hybrid car different from other types?",
		options: {
			a: "It is powered by an electric motor and an internal combustion engine",
			b: "It combines designs of different car forms",
			c: "It can run on both road and water",
		},
		answer: "a",
	}, {
		question: "How many rings does the Audi logo have?",
		options: {
			a: "3",
			b: "5",
			c: "4"
		},
		answer: "c",
	},

	{
		question: "What does SUV stand for?",
		options: {
			a: "Speed Universal Vehicle ",
			b: "Sports Utility Vehicle",
			c: "Sports Universal Vehicle ",
		},
		answer: "b",
	}, {
		question: "What do the initials BMW stand for?",
		options: {
			a: "Baden Motor Works ",
			b: "Bavarian Motor Works ",
			c: "Berlin Motor Works",
		},

		answer: "b",
	},

	{
		question: "What is the best-selling car of all time?",
		options: {
			a: "Toyota",
			b: "Nissan ",
			c: "Ford"
		},
		answer: "a",
	}, {
		question: "What is the most popular colour of a car? ",
		options: {
			a: "White",
			b: "Red",
			c: "Black"
		},
		answer: "a",
	}, {
		question: "What is the average length of time an American will spend sitting at a red light in their lifetime?",
		options: {
			a: "About 1 Year ",
			b: "About 6 Months ",
			c: "About 3 Months "
		},

		answer: "b",
	}, {
		question: "What luxury car has a prancing horse on its logo?  ",
		options: {
			a: "Ferrari",
			b: "Lamborghini",
			c: "Roll-Royce"
		},
		answer: "a",
	}, {
		question: "Which car manufacturer was the first to add seat belts?  ",
		options: {
			a: "Cadillac",
			b: "Toyota",
			c: "Nash"
		},
		answer: "c",
	}, {
		question: "Austin Martin customised a car for Prince Charles to run on which special fuel?  ",
		options: {
			a: "Hydrogen",
			b: "Wine",
			c: "Cooking oil"
		},
		answer: "b",
	}, {
		question: "What car brand does Mr. Bean drive? ",
		options: {
			a: "Jaguar",
			b: "Mini Copper",
			c: "Land Rover"
		},
		answer: "b",
	}, {
		question: "Most sport cars are typically designed with how many seats?  ",
		options: {
			a: "7 Seats ",
			b: "2 Seats ",
			c: "4 Seats "
		},
		answer: "b",
	}, {
		question: "Which animal is on the Peugeot? ",
		options: {
			a: "Lion",
			b: "Tiger",
			c: "Horse"
		},
		answer: "a",
	}, {
		question: "What does Volkswagen mean? ",
		options: {
			a: "Peoples Car",
			b: "Beautiful Car",
			c: "Powerful Car"
		},

		answer: "a",
	}, {
		question: "What is the slogan for Ford?  ",
		options: {
			a: "Motion & Emotion",
			b: "Go Further",
			c: "Above & Beyond"
		},

		answer: "b",
	}, {
		question: "What was the original colour of all Ferrari models?  ",
		options: {
			a: "Red",
			b: "White",
			c: "Yellow"
		},
		answer: "a",
	}, {
		question: "What is the smallest car model ever made?  ",
		options: {
			a: "Peel P50",
			b: "Cadillac Eldorado Convertible",
			c: "BMW Isetta “Bubble Car”",
		},

		answer: "a",
	}, {
		question: "Which of the following car models is driven by the famous secret agent James Bond? ",
		options: {
			a: "DeLorean DMC-12",
			b: "Herbie",
			c: "Aston Martin"
		},
		answer: "c",
	}, {
		question: "What year was the first Tesla car introduced in? ",
		options: {
			a: "2005",
			b: "2011",
			c: "2008"
		},
		answer: "c",
	}, {
		question: "What was the first car model to be sent into space in 2018? ",
		options: {
			a: "Roll-Royce Vision 100",
			b: "Tesla Roadster",
			c: "Porsche 911",
		},

		answer: "b",
	},
];
// Shuffle Quiz and Slice the amount we want
/* https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array */
const shuffle = (quiz, number) =>
	quiz
	.map((x) => ({
		x, r: Math.random()
	}))
	.sort((a, b) => a.r - b.r)
	.map((a) => a.x)
	.slice(0, number);

let questionArray = shuffle(easyQuiz, 5);

function displayQuiz() {
	// variable to store the HTML output
	const output = [];
	// for each question...


	questionArray.forEach((currentQuestion, questionNumber) => {
		// variable to store the list of possible options
		const options = [];

		// and for each available answer...
		for (const letter in currentQuestion.options) {
			if (letter) {
				// ...add an HTML radio button 
				options.push(
					`<label class="form-check-label">
            <input type="radio" class="form-check-input"  name="question${
              questionNumber + 1
            }" value="${letter}" required>
            ${letter} :
            ${currentQuestion.options[letter]}
          </label>`
				);

			}


		}

		// add this question and its options to the output
		output.push(
			`<div class='questionList'> ${
        questionNumber + 1
      }. <div class="question"> ${currentQuestion.question} </div>
        <div class="options"> ${options.join(" ")} </div>
        </div>`
		);
	});



	// finally combine our output list into one string of HTML and put it on the page
	quizContainer.innerHTML = output.join(" ");
}

displayQuiz();

function showResults() {
	// gather answer containers from our quiz
	const optionContainers = quizContainer.querySelectorAll(".options");

	// keep track of user's answers
	let numCorrect = 0;

	// for each question...
	questionArray.forEach((currentQuestion, questionNumber) => {
		// find selected option
		const optionContainer = optionContainers[questionNumber];
		const selector = `input[name=question${questionNumber + 1}]:checked`;
		const userAnswer = (optionContainer.querySelector(selector) || {}).value;
		// if answer is correct
		if (userAnswer === currentQuestion.answer) {
			// add to the number of correct answers
			numCorrect++;
		}
		localStorage.setItem("totalCorrectAnswer", numCorrect);
		localStorage.setItem("totalQuizMark", questionArray.length);
		localStorage.setItem("state", "score");
	});
}

// on submit, show results
submitButton.addEventListener("click", function() {
	showResults();
	navigatePage();
});

const displayYear = document.getElementById("reservedYear");
displayYear.innerHTML = new Date().getFullYear();
// introduction section
let valueOfFullName;

// Store the textName in Variable
const fullNameTxt = document.getElementById("fullName");

// Use event Listener and callback to get the value of the text whilst storing in variable valueOfFullName
fullNameTxt.addEventListener("input", function(event) {
	valueOfFullName = event.target.value;
});

const storeUserNameBtn = document.getElementById("storeUserName");

storeUserNameBtn.addEventListener("click", function() {
	localStorage.setItem("fullName", valueOfFullName);
	localStorage.setItem("state", "question");
});

// Restart Quiz overides the state back to question
restartBtn.addEventListener("click", function(e) {
	e.preventDefault();
	localStorage.setItem("state", "question");
	navigatePage();
	questionArray = shuffle(easyQuiz, 5);
	displayQuiz();

});

// End Quiz clears all the localstorage key value
endQuizBtn.addEventListener("click", function() {
	localStorage.clear();
	navigatePage();
});