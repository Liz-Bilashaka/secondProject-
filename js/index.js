
// list of quiz questions
// JSON
const easyQuiz = [
  {
    question: "What makes a hybrid car different from other types?",
    options: [
      {
        a: "It is powered by an electric motor and an internal combustion engine",
        
      },
      { b: "It combines designs of different car forms" },
      { c: "It can run on both road and water" },
    ],
    answer(){
      return this.options[0]
    }
  },
  {
    question: "How many rings does the Audi logo have?",
    options: [{ a: "3" }, { b: "5" }, { c: "4" }],
    answer(){
      return this.options[2]
    }
  },

  {
    question: "What does SUV stand for?",
    options: [
      { a: "Speed Universal Vehicle " },
      { b: "Sports Utility Vehicle" },
      { c: "Sports Universal Vehicle " },
    ],
    answer(){ this.options[1]},
  },
  {
    question: "What do the initials BMW stand for?",
    options: [
      { a: "Baden Motor Works " },
      { b: "Bavarian Motor Works " },
      { c: "Berlin Motor Works" },
    ],
    answer(){ this.options[1]},
  },
  {
    question: "What is the best-selling car of all time?",
    options: [{ a: "Toyota" }, { b: "Nissan " }, { c: "Ford" }],
    answer(){ this.options[0]},
  },
  {
    question: "What is the most popular colour of a car? ",
    options: [{ a: "White" }, { b: "Red" }, { c: "Black" }],
    answer(){ this.options[0]},
  },
  {
    question:
      "What is the average length of time an American will spend sitting at a red light in their lifetime?",
    options: [
      { a: "About 1 Year " },
      { b: "About 6 Months " },
      { c: "About 3 Months " },
    ],
    answer(){ this.options[1]},
  },
  {
    question: "What luxury car has a prancing horse on its logo?  ",
    options: [{ a: "Ferrari" }, { b: "Lamborghini" }, { c: "Roll-Royce" }],
    answer(){ this.options[0]},
  },
  // {
  //   question: "Which car manufacturer was the first to add seat belts?  ",
  //   answer: options[2],
  //   options: [{ a: "Cadillac" }, { b: "Toyota" }, { c: "Nash" }],
  // },
  // {
  //   question:
  //     "Austin Martin customised a car for Prince Charles to run on which special fuel?  ",
  //   answer: options[1],
  //   options: [{ a: "Hydrogen" }, { b: "Wine" }, { c: "Cooking oil" }],
  // },
  // {
  //   question: "What car brand does Mr. Bean drive? ",
  //   answer: options[1],
  //   options: [{ a: "Jaguar" }, { b: "Mini Copper" }, { c: "Land Rover" }],
  // },
  // {
  //   question: "Most sport cars are typically designed with how many seats?  ",
  //   answer: options[1],
  //   options: [{ a: "7 Seats " }, { b: "2 Seats " }, { c: "4 Seats " }],
  // },
  // {
  //   question: "Which lion is on the Peugeot? ",
  //   answer: options[0],
  //   options: [{ a: "Lion" }, { b: "Tiger" }, { c: "Horse" }],
  // },
  // {
  //   question: "What does Volkswagen mean? ",
  //   answer: options[0],
  //   options: [
  //     { a: "Peoples Car" },
  //     { b: "Beautiful Car" },
  //     { c: "Powerful Car" },
  //   ],
  // },
  // {
  //   question: "What is the slogan for Ford?  ",
  //   answer: options[1],
  //   options: [
  //     { a: "Motion & Emotion" },
  //     { b: "Go Further" },
  //     { c: "Above & Beyond" },
  //   ],
  // },
  // {
  //   question: "What was the original colour of all Ferrari models?  ",
  //   answer: options[0],
  //   options: [{ a: "Red" }, { b: "White" }, { c: "Yellow" }],
  // },
  // {
  //   question: "What is the smallest car model ever made?  ",
  //   answer: options[0],
  //   options: [
  //     { a: "Peel P50" },
  //     { b: "Cadillac Eldorado Convertible" },
  //     { c: "BMW Isetta “Bubble Car”" },
  //   ],
  // },
  // {
  //   question:
  //     "Which of the following car models is driven by the famous secret agent James Bond? ",
  //   answer: options[2],
  //   options: [{ a: "DeLorean DMC-12" }, { b: "Herbie" }, { c: "Aston Martin" }],
  // },
  // {
  //   question: "What year was the first Tesla car introduced in? ",
  //   answer: options[2],
  //   options: [{ a: "2005" }, { b: "2011" }, { c: "2008" }],
  // },
  // {
  //   question: "What was the first car model to be sent into space in 2018? ",
  //   answer: options[1],
  //   options: [
  //     { a: "Roll-Royce Vision 100" },
  //     { b: "Tesla Roadster" },
  //     { c: "Porsche 911" },
  //   ],
  // },
];



// store different sections
const introduction = document.getElementById("introductionPage");
const question = document.getElementById("questionPage");
const score = document.getElementById("scorePage");

let quizList = ""


  for(let i = 0; i < 5; i++){
    //  "<li>"+ question[i]+"</li>"
    quizList +=  `<li><div>
    ${easyQuiz[i].question}
    ${easyQuiz[i].options.find((val)=>`<input type="radio" value=${val}`)}
    </div></li>`;
  }

const listOfQuestion = document.getElementById('questionList')


// Determines what section is shown
if (
  localStorage.fullName !== "undefined" &&
  localStorage.state === "question"
) {
  question.style.display = "block";
  introduction.style.display = "none";
  score.style.display = "none";
  listOfQuestion.innerHTML = `<li> ${quizList} </li>`
} else if (
  localStorage.fullName !== "undefined" &&
  localStorage.state === "score"
) {
  question.style.display = "none";
  introduction.style.display = "none";
  score.style.display = "block";
} else {
  question.style.display = "none";
  score.style.display = "none";
  introduction.style.display = "block";
}

// introduction section
let valueOfFullName;

// Store the textName in Variable
const fullNameTxt = document.getElementById("fullName");

// Use event Listener and callback to get the value of the text whilst storing in variable valueOfFullName
fullNameTxt.addEventListener("input", function (event) {
  valueOfFullName = event.target.value;
});

const storeUserNameBtn = document.getElementById("storeUserName");

storeUserNameBtn.addEventListener("click", function (e) {
  localStorage.setItem("fullName", valueOfFullName);
  localStorage.setItem("state", "question");

   

});

//Get Question Div and display Quiz
// question.innerHTML=``

//const regoMessage = document.getElementById("showFullName")
//if(localStorage.fullName !== undefined){
//    regoMessage.innerHTML= `Thank you ${localStorage.fullName} `
// }



