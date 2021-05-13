import React, { useEffect } from 'react';
import { Avatar, Button, Container, CssBaseline } from '@material-ui/core';
import { TextField, Link, Grid, Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { signupUser, userSelector, clearState } from '../redux/UserSlice';
import toast from 'react-hot-toast';

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
  const dispatch = useDispatch();

  const { handleSubmit } = useForm();

  const {isSuccess, isError, errorMessage } = useSelector(
    userSelector
  );

  const onSubmit = (data) => {
    dispatch(signupUser(data));
  };
  
  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      history.push('/');
    }

    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }
  }, [isSuccess, isError]);

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
        <form
          className={classes.form}
          //noValidate
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
        >
          <TextField
            id="name"
            name="name"
            type="name"
            label="User name"
            variant="outlined"
            margin="normal"
            autoComplete="username"
            required
            fullWidth
            autoFocus
          />
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email Address"
            variant="outlined"
            margin="normal"
            autoComplete="email"
            required
            fullWidth
          />
          <TextField
            id="password"
            name="password"
            type="password"
            variant="outlined"
            margin="normal"
            label="Password"
            autoComplete="current-password"
            required
            fullWidth
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