// initialize quiz


// timer begins 

const start= document.getElementById("start");
const quiz= document.getElementById("quiz");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const question = document.getElementById("question");


let questions = [
    {
        question: "question 1",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correct: "C"
      },
    {
        question: "question 2",
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

let lastQuestionIndex=questions.length-1;
let runningQuestionIndex=5;
const questionTime=10;
let score=0;
let timer;
let count=0;

function renderQuestion(){
  
choiceA.innerHTML=questions[runningQuestionIndex].choiceA;
choiceB.innerHTML=questions[runningQuestionIndex].choiceB;
choiceC.innerHTML=questions[runningQuestionIndex].choiceC;
choiceD.innerHTML=questions[runningQuestionIndex].choiceD;
}

start.addEventListener("click",startQuiz);

function startQuiz(){
  start.style.display="none";
  renderQuestion();
  quiz.style.display="block";
  renderCounter();
  timer=setInterval(renderCounter,1000);
  
 
}

function answerCorrect(){
  document.getElementById(runningQuestionIndex).style.color="green"
}
function answerWrong(){
  document.getElementById(runningQuestionIndex).style.color="red"
}

// -------->timer<------
function renderCounter(){
  if (count<=questionTime){
  counter.innerHTML=count;
    count++
  }
  else{
    count=0;
    answerWrong();
    if(runningQuestionIndex<lastQuestionIndex){
      runningQuestionIndex++;
      renderQuestion()
    }else { clearInterval(timer);
    renderScore();
    }
  }
}

// ------>varifying answers<-----

function checkAnswer(answer){
  if(questions[runningQuestionIndex].correct==answer){
    score++;
    answerCorrect();
  }else{
  answerWrong();
}
count=0;
if(runningQuestionIndex<lastQuestionIndex){
  runningQuestionIndex++;
  questionRender();
}else{
  clearInterval(timer);
  scoreRender();

  }
}

function answerCorrect(){
  document.getElementById(runningQuestionIndex).style.color="green";
}
function answerWrong(){
  document.getElementById(runningQuestionIndex).style.color="red";
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
