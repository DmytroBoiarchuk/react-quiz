import React, { useEffect, useState } from "react";

const QuestionTimer = ({ onTimeOut, timeout, mode }) => {
  const [countDown, setCountDown] = useState(timeout);
  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeout);
    console.log("Timer Set")
    return () => {
      clearTimeout(timer)
    };
  }, [onTimeOut, timeout]);


  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((prevState) => prevState - 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);


  return <progress id="question-time" max={timeout} value={countDown} className={mode}/>;
};

export default QuestionTimer;
