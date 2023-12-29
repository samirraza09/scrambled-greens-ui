import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context';
import Profile from './widgets/Profile';
import Courses from './widgets/Courses';
import { Container, Grid } from '@mui/material';

const Home = ({userCookies, removeCookie}) => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser.username = 'refreshed') {
      if (!userCookies) {
        navigate('/login')
      }
      setCurrentUser(userCookies)
    }
  }, [currentUser])

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Profile currentUser={currentUser} removeCookie={removeCookie}/>
        </Grid>
        <Grid item xs={12}>
          <Courses courses={currentUser.courses} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;