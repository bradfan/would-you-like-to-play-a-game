// this starts the function when clicked
var startButton = document.querySelector("#start");
var clock = document.querySelector("#clock");
// HIDES CONTAINERS AT OPEN SCREEN
var openScreen = document.querySelector("body");
var qcontainer1 = document.querySelector("#qcontainer1");
var qcontainer2 = document.querySelector("#qcontainer2");
var qcontainer3 = document.querySelector("#qcontainer3");
// how many seconds in game GV
var time = 20;
// sets up array for total score
var tally = "";
// sets up area for end time
var endTime = ""; 
// question and answer array (key: value) GV
var question1 = "Who is the inventor of JavaScript?";
var answer1 = "";
var question2 = "When was Javascript invented?";
var answer2 = "";
var question3 = "Typically, JavaScript provides web pages with which of the following?";
var answer3 = ".";
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
qcontainer1.addEventListener("click",function(event){
    questiontext2.textContent = question2
    qcontainer1.style.display = "none";
    qcontainer2.style.display = "block";
    var element = event.target;
    if (element.matches(".correct")) {
      console.log(element)
      
    } return answer1 
    
    
  }) 
 
  qcontainer2.addEventListener("click",function(event){
  questiontext3.textContent = question3
  qcontainer2.style.display = "none";
  qcontainer3.style.display = "block";
  var element = event.target;
    if (element.matches(".correct")) {
      console.log(element)
      
    } return answer2
  
})
  qcontainer3.addEventListener("click",function(event){
  qcontainer3.style.display = "none";
   
  end.style.display = "GAME OVER!";
  
  
  var element = event.target;
    if (element.matches(".correct")) {
      console.log(element)
      
    } return answer3   
})
var final=function(){
  if (answer1===true) {
    tally += (answer1)
  }
  if (answer2===true) {
    tally += (answer2)
  }
  if (answer3===true) {
    tally += (answer3)
    console.log(tally.length)
  } return (arr.length) 
}  


