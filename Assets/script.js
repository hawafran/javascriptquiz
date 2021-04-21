// initialize quiz


// timer begins 

var start= document.getElementById("start");
var quiz= document.getElementById("quiz");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var counter = document.getElementById("counter");
var question = document.getElementById("question");
var quizscore = document.getElementById("quiz-score");


var questions = [
    {
        question:"Inside which HTML element do we put the JavaScript?",
        choiceA: "<scripting>",
        choiceB: "<script>",
        choiceC: "<javascript>",
        choiceD: "<js>",
        correct: "B"
      },
    {
        question: "Where is the correct place to insert a JavaScript?",
        choiceA: "<head>",
        choiceB: "<body>",
        choiceC: "both <head> and <body>",
        choiceD: "none of the above",
        correct: "C"
      },
    {
        question: "How do you create a function in JavaScript?",
        choiceA: "function = myFunction()",
        choiceB: "function myFunction()  ",
        choiceC: "function:myFunction()",
        choiceD: "none of the above",
        correct: "B"
      },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choiceA: "<script href='xxx.js'>",
        choiceB: "<script src= 'xxx.js'>",
        choiceC: "<script name= 'xxx.js'>",
        choiceD: "none of the above",
        correct: "B"
      },
      {
        question: "The external JavaScript file must contain the <script> tag.",
        choiceA: "True",
        choiceB: "False",
        choiceC: "All of the Above",
        choiceD: "None of the Above",
      correct: "B"
    },

    {
        question: "How do you write 'Hello World' in an alert box?",
        choiceA: "msg('Hello World')",
        choiceB: "alert('Hello World')",
        choiceC: "alertBox('Hello World')",
        choiceD: "msgBox('Hello World')",
      correct: "B"
    }
  ];


// user is presented with test questions

let lastQuestion=questions.length-1;
let currentQuestion=0;
var questionTime=60;
let score=0;
let timer;
let timeLeft=60;

function renderQuestion(){
 question.textContent=questions[currentQuestion].question
choiceA.textContent=questions[currentQuestion].choiceA;
choiceB.textContent=questions[currentQuestion].choiceB;
choiceC.textContent=questions[currentQuestion].choiceC;
choiceD.textContent=questions[currentQuestion].choiceD;
}

// --------->start button<-------

start.addEventListener("click",startQuiz);

function startQuiz(){
  start.style.display="none";
  renderQuestion();
  quiz.style.display="block";
  renderCounter();
  // timer=setInterval(renderCounter,1000);
  
 
}


//--------->timer<--------
function renderCounter() {
var timerInterval=setInterval(function(){
  questionTime--;
  counter.textContent=questionTime;

  if (questionTime===0 || lastQuestion===0){
    clearInterval(timerInterval);
    renderScore()
  }
}, 1000);

}

// --------varify answers<---------

function checkAnswer(answer) {
var answerIncorrect; 
  if(currentQuestion<lastQuestion){
    questionTime--;
    currentQuestion++;
    renderQuestion();
    
  
  }


 var answerCorrect; {
  if(questions[currentQuestion].correct==answer){
    score++;
}}


//----->saving score<----
localStorage.setItem("score", JSON.stringify(score));

function renderScore(){
  quizscore.style.display="block";

  var finalScore = JSON.parse(localStorage.getItem("score"));
   scorePercentage = Math.round(100 * score/questions.length);
  scoreDiv.textContent = scorePercentage +"%"
}
}

// ------->save name 


saveButton.addEventListener("click", function(event) {
  event.saveScore();
  
  var userInitials = {
    initials: initials.value.trim()
    
  }})



