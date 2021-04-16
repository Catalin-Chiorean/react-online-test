import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <Container>
      <CssBaseline />
      <div>
        <Typography variant="h4" color="primary">
          Users
        </Typography>
      </div>
      <div>
        {users.map(user => (
          <Typography variant="h6" key={user.id}>
            {user.email}
          </Typography>
        ))}
      </div>
    </Container>

  )
}