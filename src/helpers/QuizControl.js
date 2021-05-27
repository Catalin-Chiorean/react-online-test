import React from 'react';
import Quiz from 'react-quiz-component';
import { quiz1, quiz2, quiz3, meme } from '../data/QuizData';
import { useSelector } from 'react-redux';
import { quizSelector } from '../redux/QuizSlice';

export default function QuizControl() {

  const { level } = useSelector(quizSelector);

  const onCompleteAction = (obj) => {
    fetch('http://localhost:5000/results', {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(obj)
 
    })
  }

  if (level === "easy") {
    return <Quiz quiz={quiz1} ontinueTillCorrect={false} onComplete={onCompleteAction} />;
  }
  if (level === "medium") {
    return <Quiz quiz={quiz2} ontinueTillCorrect={false} onComplete={onCompleteAction} />;
  }
  if (level === "hard") {
    return <Quiz quiz={quiz3} ontinueTillCorrect={false} onComplete={onCompleteAction} />;
  }
  return <Quiz quiz={meme} ontinueTillCorrect={false} onComplete={onCompleteAction} />;
}