import React, { useContext } from 'react';
import { AuthContext } from '../../context';
import Profile from './widgets/Profile';
import Courses from './widgets/Courses';
import { Container, Grid } from '@mui/material';

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Profile currentUser={currentUser} />
        </Grid>
        <Grid item xs={12}>
          <Courses courses={currentUser.courses} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;