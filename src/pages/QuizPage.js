import React, { useEffect, useState } from 'react';
import { Typography, Button, Container, CssBaseline, AppBar, Toolbar, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Quiz from 'react-quiz-component';
import { quiz1 } from '../data/quiz1.js';


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  },
  text: {
    marginTop: 120,
    marginBottom: 20
  },
  button: {
    marginTop: 20
  }
}));

export default function QuizPage() {

  const classes = useStyles();
  const history = useHistory();
  
  const [seconds, setSeconds] = useState(70);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds('BOOOOM!');
    }
  });

  const onEndQuiz = () => {
    history.push('/login');
  };

  return (
    <Container>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h5"
            color="inherit"
          >
            Time left: {seconds}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={onEndQuiz}
          >
            End quiz
          </Button>
        </Toolbar>
      </AppBar>
      <Typography
        className={classes.text}
        variant="h5"
        color="inherit"
      >
      </Typography>
      <Quiz 
        quiz={quiz1}
        ontinueTillCorrect={false}
      />
    </Container>
  )
}