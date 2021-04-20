// initialize quiz


// timer begins 

var correct=0;
var choiceA, choiceB, choiceC, choiceD;
var choices;
var userChoice;

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
        a: "A",
        b: "B",
        c: "C",
        d: "D",
        correct: "A"
      },
      {
        question: "question 5",
      a: "A",
      b: "B",
      c: "C",
      d: "D",
      correct: "C"
    },

    {
        question: "question 6",
      a: "A",
      b: "B",
      c: "C",
      d: "D",
      correct: "D"
    }
  ];


// user is presented with test questions
let lastQuestionIndex=questions.length-1;
let runningQuestionIndex=0;

function renderQuestion(){
  let x = questions[runningQuestionIndex];
question.innerHTML="<p>"+ x.question +"</p>";
choiceA.innerHTML=x.choiceA;
choiceB.innerHTML=x.choiceB;
choiceC.innerHTML=x.choiceC;
choiceD.innerHTML=x.choiceD;
}

function answerCorrect(){
  document.getElementById(runningQuestionIndex).style.color="green"
}
function answerWrong(){
  document.getElementById(runningQuestionIndex).style.color="red"
}

// -------->timer<------
var questionTime=10;
let count=0;


function counterRender(){
  if (count<=questionTime){
    counterRender.innerHTML=count;
    count++
  }
  else{
    count=0;
    count+2;
    answerWrong();
    if(runningQuestionIndex<lastQuestionIndex){
      runningQuestionIndex++;
      questionRender()
    }else { clearInterval(timer);
    scoreRender();
    }
  }
}

// ------>varifying answers<-----
let score =0;
function checkAnswer(answer){
  if(questions[runningQuestionIndex].correct==answer){
    score++;
    answerCorrect();
  }else{
  answerWrong();
}
if(runningQuestionIndex<lastQuestionIndex){
  count=0;
  runningQuestionIndex++;
  questionRender();
}else{
  clearInterval(timer);
  scoreRender();

  }
}

var start=document.getElementById("start");
start.addEventListener("click",startQuiz);
let timer;

function startQuiz(){
  start.style.display="none";
  counterRender();
  timer=setInterval(counterRender,1000);
  questionRender();
  quiz.style.display="block";
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
