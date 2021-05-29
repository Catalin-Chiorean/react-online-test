import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, fetchUserBytoken, clearState } from '../redux/UserSlice';
import { setLevel } from '../redux/QuizSlice';
import { Typography, Button, Container, CssBaseline, AppBar, Toolbar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

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

export default function Start() {

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { isError, username } = useSelector(userSelector);

  const [quizLevel, setQuizLevel] = useState('meme');

  useEffect(() => {
    dispatch(fetchUserBytoken({ token: localStorage.getItem('token') }));
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      dispatch(clearState());
      history.push('/login');
    }
  }, [isError, dispatch, history]);

  const onLogOut = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  const onStartQuiz = () => {
    dispatch(setLevel(quizLevel));
    history.push('/quiz');
  };

  const onLeaderBoard = () => {
    history.push('/top');
    //window.open("http://localhost:5000/results");
  };


  const handleChange = e => {
    setQuizLevel(e.target.value);
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
            Welcome {username}
          </Typography>
          <Button
            variant="contained"
            color="default"
            onClick={onLeaderBoard}
          >
            Leader board (WIP)
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button
            variant="contained"
            color="secondary"
            onClick={onLogOut}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Typography
        className={classes.text}
        variant="h5"
        color="inherit"
      >
        Chose the difficulty level:
      </Typography>
      <FormControl>
        <RadioGroup
          aria-label="level"
          name="level"
          onChange={handleChange}
          defaultValue='meme'
        >
          <FormControlLabel value="meme" control={<Radio />} label="Memes" />
          <FormControlLabel value="easy" control={<Radio />} label="Easy" />
          <FormControlLabel value="medium" control={<Radio />} label="Medium" />
          <FormControlLabel value="hard" control={<Radio />} label="Hard" />
        </RadioGroup>
        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          color="secondary"
          onClick={onStartQuiz}
        >
          Start
        </Button>
      </FormControl>
    </Container>
  )
}