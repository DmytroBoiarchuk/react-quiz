import React, { useState } from "react";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import QUESTIONS from "../questions.js";
const Question = ({currentQuestion, updateUserAnswers}) => {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null,
    })

    const onAnswer = function (pickedAnswer) {
        setAnswer({
            selectedAnswer: pickedAnswer,
            isCorrect: null,
        })
        setTimeout(()=>{
            setAnswer({
                selectedAnswer: pickedAnswer,
                isCorrect: QUESTIONS[currentQuestion].answers[0] === pickedAnswer,
            })
            setTimeout(()=>{
                updateUserAnswers(pickedAnswer);
            },2000)
        }, 1000)

    };
    let timer = 10000;
  if (answer.selectedAnswer !== '') {
    timer = 1000;
  }
  if(answer.isCorrect !== null){
      timer = 2000;
  }
  let answerState = ''
    if (answer.selectedAnswer && answer.isCorrect !== null){
        answerState = answer.isCorrect? 'correct' : 'wrong'
    }else if(answer.selectedAnswer){
        answerState = 'answered'
    }
  const onTimeOut = function () {
    updateUserAnswers(null);
  };

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        onTimeOut={answer.selectedAnswer === '' ? onTimeOut : null}
        timeout={timer}
        mode={answerState}
      />
      <h2>{QUESTIONS[currentQuestion].text}</h2>
      <Answers
        selectedAnswer={answer.selectedAnswer}
        onSelect={onAnswer}
        questionNumber={currentQuestion}
        mode={answerState}
      />
    </div>
  );
};

export default Question;
