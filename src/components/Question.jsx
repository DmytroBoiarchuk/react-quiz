import React, { useState } from "react";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import QUESTIONS from "../questions.js";
const Question = ({currentQuestion, updateUserAnswers}) => {
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [answerIsCorrect, setAnswerIsCorrect] = useState(null)
    const onAnswer = function (pickedAnswer) {
        setSelectedAnswer(pickedAnswer);
        setTimeout(()=>{
            setAnswerIsCorrect(QUESTIONS[currentQuestion].answers[0] === pickedAnswer)
            setTimeout(()=>{
                updateUserAnswers(pickedAnswer);
            },2000)
        }, 1000)

    };
    let timer = 10000;
  if (selectedAnswer !== '') {
    timer = 1000;
  }
  if(answerIsCorrect !== null){
      timer = 2000;
  }
  let answerState = ''
    if (selectedAnswer && answerIsCorrect !== null){
        answerState = answerIsCorrect? 'correct' : 'wrong'
    }else if(selectedAnswer){
        answerState = 'answered'
    }
  const onTimeOut = function () {
    updateUserAnswers(null);
  };

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        onTimeOut={selectedAnswer === '' ? onTimeOut : null}
        timeout={timer}
        mode={answerState}
      />
      <h2>{QUESTIONS[currentQuestion].text}</h2>
      <Answers
        selectedAnswer={selectedAnswer}
        onSelect={onAnswer}
        questionNumber={currentQuestion}
        mode={answerState}
      />
    </div>
  );
};

export default Question;
