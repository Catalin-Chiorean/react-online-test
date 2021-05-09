import React from 'react';
import { Typography, Container, CssBaseline } from '@material-ui/core';

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