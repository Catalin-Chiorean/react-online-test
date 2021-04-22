import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import UsersList from '../server/UsersList';

export default function Users() {
  return (
    <Container>
      <CssBaseline />
      <div>
        <Typography variant="h4" color="primary">
          Users
        </Typography>
      </div>
      <div>
        <Typography variant="h6">
          <UsersList />
        </Typography>
      </div> 
    </Container>

  )
}