import React, { useState } from "react";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";
import QUESTIONS from "../questions.js";
const Quiz = () => {
  const [answersPool, setAnswersPool] = useState([]);
  const currentQuestion = answersPool.length;
  const quizIsComplete = currentQuestion === QUESTIONS.length
  const updateAnswerPool = function (answer) {
    setAnswersPool((prevState) => [...prevState, answer]);
  };
  if (quizIsComplete) {
    return <Summary userAnswers={answersPool} />;
  }
  return (
    <div id="quiz">
      <Question
        key={currentQuestion}
        updateUserAnswers={updateAnswerPool}
        currentQuestion={currentQuestion}
      />
    </div>
  );
};

export default Quiz;
