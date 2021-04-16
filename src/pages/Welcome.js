import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Welcome() {
  return (
    <Container>
      <CssBaseline />
      <div>
        <Typography
          variant="h1"
          color="primary"
          align='center'
        >
          Welcome
                </Typography>
      </div>
    </Container>

  )
}