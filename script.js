//Assignment Code

// define variables

// define functions

// call functions to run app


//Make a quiz
//click start to get to question 1
// timer hits 0 alert and end quiz
//Given a question
//When first question answered, goes to next question, next question
//When answered incorrectly time is subtracted from timer countdown
//Questions are multiple choice
//5 questions in example
//When all questions answered or timer reaches zero it is done
//When game over you can save score
//example had 75 seconds

//turn each question into a function

let currentQuestion = 0;
let score = 0;
var questiontext = document.querySelector(".questiontext"); //selects question text
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var count = document.querySelector("#time");

var generateBtn = document.querySelector("#start");
var quizArea = document.querySelector(".quizarea");
var saveBtn = document.querySelector("#savebutton");
//generateBtn.onclick = function () { 
let questions = [
  {
    question: "What does CSS stand for?",
    options: [
      "Common Style Selector",
      "Cue Slide Show",
      "Cascading Style Sheet",
      "Color Style Sheet"],
    answer: "Cascading Style Sheet",
  },
  {
    question: "Which of these is not a coding language?",
    options: [
      "html",
      "css",
      "javascript",
      "div"],
    answer: "div",
  },
  {
    question: "What do you use psuedocode for?",
    options: [
      "adding images",
      "adding notation",
      "adding paragraphs",
      "adding music"],
    answer: "adding notation",
  },
  {
    question: "What is an event listener?",
    options: [
      "it waits for an event",
      "it hears everything",
      "it listens to music",
      "it plans events"],
    answer: "it waits for an event",
  },
  {
    question: "What does a string do?",
    options: [
      "makes an example",
      "plays a guitar",
      "ties shoes",
      "stores text"],
    answer: "stores text",
  }
]
//addButton.addEventListener
generateBtn.addEventListener('click', function () {
  quizArea.style.display = "block"
  generateBtn.style.display = "none"
  load_question(currentQuestion)
  setInterval(countdown, 1000)
});
//moved set interval because it was in the wrong function
//each time load question loaded it would make it faster
function load_question(currentQuestion) {
  questiontext.innerText = questions[currentQuestion].question
  button1.innerText = questions[currentQuestion].options[0]
  button2.innerText = questions[currentQuestion].options[1]
  button3.innerText = questions[currentQuestion].options[2]
  button4.innerText = questions[currentQuestion].options[3]
  corr_answer = questions[currentQuestion].answer
};

button1.onclick = function () {
  if (questions[currentQuestion].answer === button1.innerText) {
    score += 1;
    alert('Correct');
  }
  else {
    alert('Incorrect');
  }
  currentQuestion += 1;
  load_question(currentQuestion);
};
button2.onclick = function () {
  if (questions[currentQuestion].answer === button2.innerText) {
    score += 1;
    alert('Correct');
  }
  else {
    alert('Incorrect');
  }
  currentQuestion += 1;
  load_question(currentQuestion);
};
button3.onclick = function () {
  if (questions[currentQuestion].answer === button3.innerText) {
    score += 1;
    alert('Correct');
  }
  else {
    alert('Incorrect');
  }
  currentQuestion += 1;
  load_question(currentQuestion);
};
button4.onclick = function () {
  if (questions[currentQuestion].answer === button4.innerText) {
    score += 1;
    alert('Correct');
  }
  else {
    alert('Incorrect');
  }
  currentQuestion += 1;
  load_question(currentQuestion);
};

//save button and scoring
saveBtn.addEventListener('click', function () {
  //forAnswers.style.display = "block"
  var userInitials = document.querySelector(".form-input").value
  localStorage.setItem(userInitials, score);
  document.getElementById("score").innerText = "Your score is: " + score
});

//no touchy this is timer part 1
var currentCount = 75
count.innerText = currentCount
function countdown() {
  if (currentCount > 0) {
    currentCount--
    count.innerText = currentCount
  }
}
//function countdown added
