import React from 'react';
import Quiz from 'react-quiz-component';
import { quiz1, quiz2, quiz3 } from './data.js';
import { useSelector } from 'react-redux';
import { quizSelector } from '../redux/QuizSlice';

export default function QuizControl() {

  const level = useSelector(quizSelector);

  if (level === 'easy') {
    return <Quiz quiz={quiz1} ontinueTillCorrect={false} />;
  }
  if (level === 'medium') {
    return <Quiz quiz={quiz2} ontinueTillCorrect={false} />;
  }
  return <Quiz quiz={quiz3} ontinueTillCorrect={false} />;
}