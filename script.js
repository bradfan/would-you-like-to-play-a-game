// how many seconds in game GV
var time = 100;
// question and answer array (key: value) GV
var myQuestions = [
  {
    question: "Question 1",
    options: ["a", "b","c","d"],
    correctAnswer: "b",
  },{
    question: "Question 2",
    options: ["a", "b","c","d"],
    correctAnswer: "c",
  },{
    question: "Question 3",
    options: ["a", "b","c","d"],
    correctAnswer: "d",
  },
];
// // this starts the function when clicked
var startButton = document.querySelector("#start");
var clock = document.querySelector("#clock");
startButton.addEventListener("click", function (e) {
  startButton.style.display = "none";
  startQuestions();
  clock.textContent = time;
  var clockMsg = setInterval(function () {
    time--;
    clock.textContent = time;
    if (time === 0) {
      clearInterval(clockMsg);
    }
  }, 1000);
 }
);

var qcontainer = document.querySelector("#qcontainer");

function startQuestions() {
    qcontainer.textContent = myQuestions[0].question
   
}

 //or add the button html dynamically here
    // for all 4 buttons
    // for button text for button with id a as  myQuestions[0].options[0]

    //creat a new attribute for each button, with a value=

var answerBtn = document.querySelector(".answer"); 
answerBtn.addEventListener("click", function(event){
  var element = event.target;

  if (element.matches("")){
    var state = element.getAttribute("data-state");
    if(state ===""){

    }

  }
  
})
// console.log(event.target.getAttribute("id")

// TAKE SYNTAX OUT OF MESSAGE AS NEEDED

// THIS WILL POPULATE THE FUNCTION THAT DISPLAYS QUESTION (AND MOVE THROUGH ARRAY?)
// var questionText = document.querySelector("#questionText");

// THIS WILL POPULATE THE FUNCTION THAT STORES ANSWERS
// var answers = document.querySelector("#answers");





// GIVE ANSWERS (FOR EACH LOOP?) OR FOR LOOP
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
