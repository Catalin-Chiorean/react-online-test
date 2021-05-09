import React, { useReducer } from 'react';
import { Avatar, Button, Container, CssBaseline } from '@material-ui/core';
import { TextField, Link, Grid, Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const classes = useStyles();
  const history = useHistory();

  const registerPage = {
    email: '',
    password: '',
    confirmPassword: '',
    emailError: false,
    passwordError: false,
    confirmPasswordError: false
  }

  function reducer(_, newState) {
    return newState;
  }
  
  const [state, setValue] = useReducer(reducer, registerPage);
  
  const handleRegister = (e) => {
    e.preventDefault();
    setValue({ emailError: false });
    setValue({ passwordError: false });
    setValue({ confirmPasswordError: false });

    if (registerPage.email === '') {
      setValue({ emailError: true});
    }
    if (registerPage.password === '') {
      setValue({ passwordError: true });
    }
    if (registerPage.confirmPassword === '' 
        || registerPage.confirmPassword !== registerPage.password) {
      setValue({ passwordError: true});
    }

    if (registerPage.email
      && registerPage.password 
      && registerPage.confirmPassword === registerPage.password) {
      axios.post('http://localhost:3001/register', registerPage.email, registerPage.password)
        .then(res => {
          console.log(res)
        })
        .then(() => history.push('/'))
        .catch(err => {
          console.log(err)
        })
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleRegister}>
          <TextField
            onChange={(e) => setValue({email: e.target.value})}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            autoFocus
            error={registerPage.emailError}
          />
          <TextField
            onChange={(e) => setValue({password: e.target.value})}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            error={registerPage.passwordError}
          />
          <TextField
            onChange={(e) => setValue({confirmPassword: e.target.value})}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            error={registerPage.confirmPasswordError}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
          <Grid item>
            <Link href="/" variant="body2">
              {"Already have an account? Login"}
            </Link>
          </Grid>
        </form>
      </div>
    </Container>
  );
}