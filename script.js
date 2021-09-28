//Assignment Code
//Make a quiz
//click start and a timer begins
//Given a question
//When first question answered, goes to next question next question
//When answered incorrectly time is subtracted from timer countdown
//Questions are multiple choice
//5 questions in example
//When all questions answered or timer reaches zero it is done
//When game over you can save score
//example had 75 seconds

//write 5 questions for the html box
//5 questions : 4 answers for each question : buttons for each answer make buttons
//turn each question into a function
// make strings for answers to questions?
//write start button

let currentQuestion = 0
var questiontext = document.querySelector(".questiontext") //selects question text
var button1 = document.querySelector(".button1")
var button2 = document.querySelector(".button2")
var button3 = document.querySelector(".button3")
var button4 = document.querySelector(".button4")

var generateBtn = document.querySelector("#start");
var quizArea = document.querySelector(".quizarea")
//generateBtn.onclick = function () { 
let questions
questions = [
  {
    numb: 1,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Selector",
      "Cue Slide Show",
      "Cascading Style Sheet",
      "Color Style Sheet"
    ]
  },
  {
    numb: 2,
    question: "Which of these is not a coding language?",
    answer: "div",
    options: [
      "html",
      "css",
      "javascript",
      "div"
    ]
  },
  {
    numb: 3,
    question: "What do you use psuedocode for?",
    answer: "adding notation",
    options: [
      "adding images",
      "adding notation",
      "adding paragraphs",
      "adding music",
    ]
  },
  {
    numb: 4,
    question: "What is an event listener?",
    answer: "it waits for an event",
    options: [
      "it waits for an event",
      "it hears everything",
      "it listens to music",
      "it plans events"
    ]
  },
  {
    numb: 5,
    question: "What does a string do?",
    answer: "stores text",
    options: [
      "makes an example",
      "plays a guitar",
      "ties shoes",
      "stores text"
    ]
  }
]

//questionsAnswer.push("correct")
//query selectors?

//local storage to store answers

//TIMER?!!??!?
//setInterval(timer, 75) //set timer at 75 seconds
//generateBtn.onclick
//function timer(); {
//  {
//   if (questionsAnswer === false) {
//     timer - 5;
//   }
//   var sec = 15;
//   var time = setInterval(myTimer, 750000);
// function myFunction() {
//  alert('Out of Time');
// }
//   //input box for name


//   //store score
//   var points = 0;
//   var total = [];

//   //for loop from w3
//   for (var i = 0; i < total; i++) {
//     if (questions[i] == answers[i]) { //reference 128 styling
//       points = points + 1;
//     }
//   }
// }
//show score
//function show.results

//addEventListener 
//generateBtn.addEventListener('click'), function ("score");

//addButton.addEventListener
generateBtn.addEventListener('click', function () {
  quizArea.style.display = "block" //lookup block later this shows questions 
  generateBtn.style.display = "none" //dont need a second event listener this hides start button
  questiontext.innerText = questions[currentQuestion].question
  button1.innerText = questions[currentQuestion].options[0]
  button2.innerText = questions[currentQuestion].options[1]
  button3.innerText = questions[currentQuestion].options[2]
  button4.innerText = questions[currentQuestion].options[3]
  // onclick = "setTimeout(myTimer, 750000)";
})
//event listener for buttons