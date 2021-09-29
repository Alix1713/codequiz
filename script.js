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
var count = document.querySelector("#time")

var generateBtn = document.querySelector("#start");
var quizArea = document.querySelector(".quizarea");
var saveBtn = document.querySelector("#savebutton");
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
      "Color Style Sheet",
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
      "div",
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
      "it plans events",
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
      "stores text",
    ]
  }
]
//addButton.addEventListener
generateBtn.addEventListener('click', function () {
  quizArea.style.display = "block" //lookup block later this shows questions 
  generateBtn.style.display = "none"
  questiontext.innerText = questions[currentQuestion].question
  button1.innerText = questions[currentQuestion].options[0]
  button2.innerText = questions[currentQuestion].options[1]
  button3.innerText = questions[currentQuestion].options[2]
  button4.innerText = questions[currentQuestion].options[3]
  setInterval(countdown, 1000)
})

//event listener for buttons
//button1.addEventListener('click', function () {
// .questions[currentQuestion[+1]];
//  addScore[+0]
//})
//button2.addEventListener('click', function () {})
//.questions[currentQuestion[+1]];
//  addScore[+0]
//})
//button3.addEventListener('click', function () {})
//.questions[currentQuestion[+1]];
//  addScore[+1]
//button4.addEventListener('click', function () {})
//.questions[currentQuestion[+1]];
//  addScore[+0]

//append next question?

//score
let score
score = [
  {
    text: "Your score is",
  }
]
//save button and scoring
saveBtn.addEventListener('click', function () {
  forAnswers.style.display = "block"
  scoretext.innerText = text
})
//questionsAnswer.push("correct")
//query selectors?
//local storage to store answers
//   var points = 0;
//   var total = [];


//no touchy this is timer part 1
var currentCount = 75
count.innerText = currentCount
function countdown() {
  currentCount--
  count.innerText = currentCount
}
if (currentCount <= 1); {
  alert('Out of Time');
}

//make timer part two : remove time when wrong
// function countdown();
//   {
//   if (questionsAnswer === [0]) {
//    currentCount - 5;
//   }
