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
var status = document.getElementById("answer-status");


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

  if (questionTime===0){
    clearInterval(timerInterval);
    renderScore()
  }
}, 1000);

}

// --------varify answers<---------

function checkAnswer(answer) {
var answerIncorrect; 
  if(currentQuestion<lastQuestion){
    questionTime-=5;
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

  var finalScore = JSON.parse(localStorage.getItem("score"));
   scorePercentage = Math.round(100 * score/questions.length);
  scoreDiv.textContent = scorePercentage +"%"
}





// ------>varifying answers<-----

// function checkAnswer(answer){
//   if(questions[currentQuestion].correct==answer){
//     score++;
//     answerCorrect();
//   }
//   else{
//   answerIncorrect();
// }
// count=0;
// if(currentQuestion<lastQuestion){
//   currentQuestion++;
//   renderQuestion();
// }
// else{
//   clearInterval(timer);
//   scoreRender();

  // }
}








// computer alerts user whether correct or incorrect
    // if answer is incorrect, time is subtracted 
// answer is stored
// computer moves to the next question after answer is solected 
// quiz is over when timer hits 0 or all questions are asnwered 
// user presented with score 
// user saves score with initials
    // computer stores score
// computer shows users score alone with other saved scores 


// function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

// 	function showQuestions(questions, quizContainer){
// 		// code will go here
// 	}

// 	function showResults(questions, quizContainer, resultsContainer){
// 		// code will go here
// 	}

// 	// show the questions
// 	showQuestions(questions, quizContainer);

// 	// when user clicks submit, show results
// 	submitButton.onclick = function(){
// 		showResults(questions, quizContainer, resultsContainer);
// 	}
