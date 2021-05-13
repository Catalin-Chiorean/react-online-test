import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, fetchUserBytoken, clearState } from '../redux/UserSlice';
import { Typography, Button, Container, CssBaseline } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function Welcome() {

  const history = useHistory();
  const dispatch = useDispatch();

  const { isError } = useSelector(userSelector);
  
  useEffect(() => {
    dispatch(fetchUserBytoken({ token: localStorage.getItem('token') }));
  }, [dispatch]);

  const { username } = useSelector(userSelector);

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

  return (
    <Container>
      <CssBaseline />
      <div>
        <Typography
          variant="h1"
          color="primary"
          align='center'
        >
          Welcome {username}
        </Typography>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={onLogOut}
        >
          Logout
        </Button>
      </div>
    </Container>

  )
}