const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputQuiz = document.querySelector("#output-quiz");

const correctAnswer = ["90deg",'right angled'];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResult = new FormData(quizForm);
    for(let value of formResult.values()){
        if(value===correctAnswer[index]){
            score = score+1;
        }
        index = index+1
    }
    outputQuiz.innerHTML= "Your score is "+ score;

}

submitAnswerBtn.addEventListener('click',calculateScore)