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
        question:"question 1",
        choiceA: "wrong",
        choiceB: "wrong",
        choiceC: "correct",
        choiceD: "wrong",
        correct: "C"
      },
    {
        question: "question 2",
        choiceA: "wrong",
        choiceB: "correct",
        choiceC: "wrong",
        choiceD: "wrong",
        correct: "B"
      },
    {
        question: "question 3",
        choiceA: "A",
        choiceB: "w",
        choiceC: "w",
        choiceD: "w",
        correct: "A"
      },
    {
        question: "question 4",
        choiceA: "A",
        choiceB: "w",
        choiceC: "w",
        choiceD: "w",
        correct: "A"
      },
      {
        question: "question 5",
        choiceA: "w",
        choiceB: "w",
        choiceC: "C",
        choiceD: "w",
      correct: "C"
    },

    {
        question: "question 6",
        choiceA: "w",
        choiceB: "w",
        choiceC: "w",
        choiceD: "D",
      correct: "D"
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



