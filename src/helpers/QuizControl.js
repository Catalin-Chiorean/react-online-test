import React from 'react';
import Quiz from 'react-quiz-component';
import { quiz1, quiz2, quiz3, meme } from '../data/QuizData';
import { useSelector } from 'react-redux';
import { quizSelector } from '../redux/QuizSlice';
import { userSelector} from '../redux/UserSlice';
import axios from 'axios';

export default function QuizControl(props) {

  const { level } = useSelector(quizSelector);
  const { username, email } = useSelector(userSelector);

  const onCompleteAction = (obj) => {
    //console.log(obj);
    const correctAnswers = obj.numberOfCorrectAnswers;
    const totalPoints = obj.totalPoints;
    const time = props.minutes+":"+props.seconds;
    axios.post('http://localhost:5000/results', {
      username, email, correctAnswers, totalPoints, time
    }).then(resp => {
      console.log(resp.data);
    }).catch(error => {
      console.log(error);
    });
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