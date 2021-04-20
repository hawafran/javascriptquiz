// initialize quiz


// timer begins 

var start= document.getElementById("start");
var quiz= document.getElementById("quiz");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var counter = document.getElementById("counter");
var questions = document.getElementById("questions");


var questions = [
    {
        question:"2+2",
        choiceA: "4",
        choiceB: "wrong",
        choiceC: "correct",
        choiceD: "wrong",
        correct: "C"
      },
    {
        question: "2+3",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correct: "B"
      },
    {
        question: "question 3",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correct: "A"
      },
    {
        question: "question 4",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correct: "A"
      },
      {
        question: "question 5",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
      correct: "C"
    },

    {
        question: "question 6",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
      correct: "D"
    }
  ];


// user is presented with test questions

let lastQuestion=questions.length-1;
let currentQuestion=0;
var questionTime=10;
let score=0;
let timer;
let timeLeft=10;

function renderQuestion(){
 question.textContent=questions[currentQuestion].question
choiceA.textContent=questions[currentQuestion].choiceA;
choiceB.textContent=questions[currentQuestion].choiceB;
choiceC.textContent=questions[currentQuestion].choiceC;
choiceD.textContent=questions[currentQuestion].choiceD;
}



start.addEventListener("click",startQuiz);

function startQuiz(){
  start.style.display="none";
  renderQuestion();
  quiz.style.display="block";
  renderCounter();
  // timer=setInterval(renderCounter,1000);
  
 
}



// -------->timer<------
// function renderCounter(){
//   if (count<=questionTime){
//   counter.textContent=timeLeft;
//     timeLeft--
//   }
//   else{

//     answerIncorrect();
//     if(currentQuestion<lastQuestion){
//       runningQuestion++;
//       renderQuestion();
//     }else { clearInterval(timer);
//     renderScore();
//     }
//   }
// }

function renderCounter() {
var timerInterval=setInterval(function(){
  questionTime--;
  counter.textContent=questionTime;

  if (questionTime===0){
    clearInterval(timerInterval);
  }
}, 1000);

}


// ------>varifying answers<-----

function checkAnswer(answer){
  if(questions[currentQuestion].correct==answer){
    score++;
    answerCorrect();
  }else{
  answerIncorrect();
}
count=0;
if(currentQuestion<lastQuestion){
  currentQuestion++;
  renderQuestion();
}
else{
  clearInterval(timer);
  scoreRender();

  }
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
