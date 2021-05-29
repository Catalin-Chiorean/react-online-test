import React, { useEffect, useState } from 'react';
import { Typography, Button, Container, CssBaseline, AppBar, Toolbar, Grid, Paper } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

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

export default function LeaderBoard() {

  const classes = useStyles();
  const history = useHistory();

  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/results')
      .then(resp => {
        setResults(resp.data)
        console.log(resp.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  const onClickQuiz = () => {
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
            Leader Board
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={onClickQuiz}
          >
            Go back to Quiz
          </Button>
        </Toolbar>
      </AppBar>
      <Typography
        className={classes.text}
        variant="h5"
        color="inherit"
      >
      </Typography>
      <Typography variant="text">
        {results.map(result => (
          <Paper key={result.id}>
            <p>Username: {result.username}
            &nbsp;&nbsp;&nbsp;
            Email: {result.email}
            &nbsp;&nbsp;&nbsp;
            Correct answers: {result.correctAnswers}
            &nbsp;&nbsp;&nbsp;
            Total points: {result.totalPoints}
            &nbsp;&nbsp;&nbsp;
            Time spent: {result.time}
            </p>
          </Paper>
        ))}
      </Typography>
    </Container>
  )
}