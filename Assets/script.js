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
        correctAnswer: "C"
      },
    {
        question: "question 2",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correctAnswer: "B"
      },
    {
        question: "question 3",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correctAnswer: "A"
      },
    {
        question: "question 4",
        a: "A",
        b: "B",
        c: "C",
        d: "D",
        correctAnswer: "A"
      },
      {
        question: "question 5",
      a: "A",
      b: "B",
      c: "C",
      d: "D",
      correctAnswer: "C"
    },

    {
        question: "question 6",
      a: "A",
      b: "B",
      c: "C",
      d: "D",
      correctAnswer: "D"
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
