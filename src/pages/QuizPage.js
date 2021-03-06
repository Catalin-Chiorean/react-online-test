import React, { useEffect, useState } from 'react';
import { Typography, Button, Container, CssBaseline, AppBar, Toolbar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import QuizControl from '../helpers/QuizControl';

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

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    if(seconds===60) {
      setSeconds(0);
      setMinutes(minutes + 1);
    }
    setTimeout(() => setSeconds(seconds + 1), 1000);
  },[minutes, seconds]);

  const onEndQuiz = () => {
    history.push('/');
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
            Time spent: {minutes} : {seconds}
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
      <QuizControl minutes={minutes} seconds={seconds} />
    </Container>
  )
}