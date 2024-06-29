import React, {useRef} from "react";
import QUESTIONS from "../questions.js";
const Answers = ({ onSelect, questionNumber, selectedAnswer, mode }) => {
  const shuffledAnswers = useRef()
  if(!shuffledAnswers.current){
    shuffledAnswers.current = [...QUESTIONS[questionNumber].answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        let cssClass = '';
        if (selectedAnswer === answer && mode === 'answered') {
          cssClass = "selected";
        }else if(selectedAnswer === answer){
          cssClass = mode
        }
        return (
          <li key={Math.random() * 1000} className="answer">
            <button
              className={cssClass}
              disabled={selectedAnswer !== ""}
              onClick={() => onSelect(answer)}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
