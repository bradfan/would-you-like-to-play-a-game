// how many seconds in game GV
var time =100;
// question and answer array (key: value) GV
var question =[
    {
      text: "Question 1",
      options: ["True", "False"],
      correctAnswer: "True",

      text: "Question 2",
      options: ["True", "False"],
      correctAnswer: "True",

      text: "Question 3",
      options: ["True", "False"],
      correctAnswer: "True",
    }
]
// take things out of message as needed.

// // this will populate function to display question, record answer and hide box
// var questionText = document.querySelector("#questionText");
// // this will populate the function to store answers
// var answers = document.querySelector("#answers");
// // this will populate the function to start and stop as answers are given 
// var timer = document.querySelector("#timer");

// var start = document.querySelector("#startPrompt");
// //  this starts the timer
// var startButton = document.querySelector("#start");
// // this starts the function when clicked 
// startButton.addEventListener("click", function(e){
//     timer.textContent = time; 
//     setInterval(function(){
//      time --;
//     //  hides start button after click. (this syntax will hide question box too)
//      start.style.display = "none";
//     }, 1000)
// //   
// //   present with a question
//      questionText.textContent = questions[0].text;
// //   give answers (for each loop(?) or for loop)
//      questions [0].answers.forEach(function(item){
//         //  create html button
//          var answerBtn = document.createElement("button");
//         //  set the text of that button to be current item
//          answer.textContent = item;
//         //  append it to our options div
//          options.append(answerBtn);

//      })
// })










// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score