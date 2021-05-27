import React, { useEffect } from 'react';
import { Avatar, Button, Container, CssBaseline } from '@material-ui/core';
import { TextField, Link, Grid, Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userSelector, clearState } from '../redux/UserSlice';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

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

export default function Login() {

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const { isSuccess, isError, errorMessage } = useSelector(
    userSelector
  );

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }

    if (isSuccess) {
      dispatch(clearState());
      history.push('/');
    }
  }, [isError, isSuccess, dispatch, history, errorMessage]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
        >
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email Address"
            variant="outlined"
            margin="normal"
            {...register('email', {
              pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
            })}
            required
            fullWidth
            autoComplete="email"
            autoFocus
          />
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            margin="normal"
            {...register('password', { required: true })}
            required
            fullWidth
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register">
                {"Don't have an account? Register"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}