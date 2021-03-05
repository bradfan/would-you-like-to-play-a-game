// this starts the function when clicked
var startButton = document.querySelector("#start");
var clock = document.querySelector("#clock");
// HIDES CONTAINERS AT OPEN SCREEN
var openScreen = document.querySelector("body");
var qcontainer1 = document.querySelector("#qcontainer1");
var qcontainer2 = document.querySelector("#qcontainer2");
var qcontainer3 = document.querySelector("#qcontainer3");
// how many seconds in game GV
var time = 100;
// sets up array for score
var tally = "";
// question and answer array (key: value) GV
var question1 = "Who is the inventor of JavaScript?";
var question2 = "When was Javascript invented?";
var question3 = "Typically, JavaScript provides web pages with which of the following?";
window.addEventListener("load", function () {
  qcontainer1.style.display = "none";
  qcontainer2.style.display = "none";
  qcontainer3.style.display = "none";
  score.style.display = "none";
});
startButton.addEventListener("click", function (event) {
  startButton.style.display = "none";
  would.style.display = "none";
  words.style.display = "none";
  document.querySelector("#questiontext1").textContent = question1;
  qcontainer1.style.display ="block"
  event.target.getAttribute("id")
  clock.textContent = time;
  var clockMsg = setInterval(function () {
    time--;
    clock.textContent = time;
    if (time === 0) {
      clearInterval(clockMsg);
    }
  }, 1000); 
});
// FUNCTIONS BELOW MOVE FROM ONE TO ANOTHER DISPLAYING QCONTAINERS IN SEQUENCE
qcontainer1.addEventListener("click",function(){
    questiontext2.textContent = question2
    qcontainer1.style.display = "none";
    qcontainer2.style.display = "block";
    
  })// console.log(getelementById("f"))
  // console.log(tally.length)
// // event.target.getElementById("f")
    
qcontainer2.addEventListener("click",function(){
  questiontext3.textContent = question3
  qcontainer2.style.display = "none";
  qcontainer3.style.display = "block";
  
})

qcontainer3.addEventListener("click",function(){
  qcontainer3.style.display = "none";
  score.style.display = "block";
    
})
  

  

//   var element = event.target;
//   if (element.matches("")){
//     var state = element.getAttribute("data-state");
//     if(state ===""){
//     }
//   }
// })
// console.log(event.target.getAttribute("id"))


// TAKE SYNTAX OUT OF MESSAGE AS NEEDED
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

