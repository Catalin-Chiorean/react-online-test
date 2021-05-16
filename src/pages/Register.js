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
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
}));

export default function Register() {

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const { isSuccess, isError, errorMessage } = useSelector(
    userSelector
  );

  const onSubmit = (data) => {
    dispatch(signupUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      history.push('/');
    }

    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }
  }, [isSuccess, isError, dispatch, history, errorMessage]);

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
            {...register('name', { required: true })}
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
            {...register('email', {
              pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
            })}
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
            {...register('password', { required: true })}
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
            <Link href="/">
              {"Already have an account? Login"}
            </Link>
          </Grid>
        </form>
      </div>
    </Container>
  );
}