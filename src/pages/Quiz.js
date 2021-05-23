import React, { useEffect, useState } from 'react';
import { Typography, Button, Container, CssBaseline, AppBar, Toolbar, Grid } from '@material-ui/core';
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

export default function Welcome() {

  const classes = useStyles();
  const history = useHistory();
  
  const [seconds, setSeconds] = React.useState(70);

  React.useEffect(() => {
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
        Quiz placeholder
      </Typography>
      <FormControl>
        <RadioGroup 
          aria-label="level" 
          name="level" 
          //value={value} 
          //onChange={handleChange}
          defaultValue="easy"
        >
          <FormControlLabel value="1" control={<Radio />} label="1" />
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="3" control={<Radio />} label="3" />
        </RadioGroup>
        <Button 
          className={classes.button}
          type="submit" 
          variant="contained" 
          color="secondary"
        >
        Next
        </Button>
      </FormControl>

    </Container>
  )
}