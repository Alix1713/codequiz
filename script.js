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

//write start button
var generateBtn = document.querySelector("#start");

generateBtn.onclick = activate timer;

//write 5 questions for the html box
//5 questions : 4 answers for each question : buttons for each answer make buttons
//turn each question into a function
// make strings for answers to questions?

let questions = [
    {
    numb: 1,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Selector",
      "Cue Slide Show",
      "Cascading Style Sheet",
      "Color Style Sheet"
    ]}
      let questions = [
        {
        numb: 2,
        question: "Which of these is not a coding language?",
        answer: "div",
        options: [
          "html",
          "css",
          "javascript",
          "div"
        ]}
          let questions = [
            {
            numb: 3,
            question: "What do you use psuedocode for?",
            answer: "adding notation",
            options: [
              "adding images",
              "adding notation",
              "adding paragraphs",
              "adding music" 
            ]}
              let questions = [
                {
                numb: 4,
                question: "What is....",
                answer: "Cascading Style Sheet",
                options: [
                  "Common Style Selector",
                  "Cue Slide Show",
                  "Cascading Style Sheet",
                  "Color Style Sheet"
                ]}
                  let questions = [
                    {
                    numb: 5,
                    question: "What does....",
                    answer: "Cascading Style Sheet",
                    options: [
                      "Common Style Selector",
                      "Cue Slide Show",
                      "Cascading Style Sheet",
                      "Color Style Sheet"
                    ]}

questionsAnswer.push ("correct")
//query selectors?

//local storage to store answers

//TIMER?!!??!?
setInterval(timer, 75) //set timer at 75 seconds
function timer();{
    {if (questionsAnswer ===false){
    timer -=5; 
}

//input box for name

//store score

//show score
function show.results

//addEventListener 
generateBtn.addEventListener('click'), function ("score");

//addButton.addEventListener("questionOne", function)
generateBtn.addEventListener('click'), function ("start");