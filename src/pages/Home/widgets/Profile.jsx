import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Button } from '@mui/material';

const Profile = ({ currentUser, removeCookie }) => {
  const navigate = useNavigate();

  const logout = () => {
    removeCookie("user", { path: "/" })
    navigate('/login');
  }
  if (!currentUser) {
    return (
      <Card sx={{ borderRadius: 2, p: 2, bgcolor: '#618264', position: 'relative' }}>
      <CardContent>
        <Typography variant="h4">Loading</Typography>
      </CardContent>
    </Card>
    )
  }
  return (
    <Card sx={{ borderRadius: 2, p: 2, bgcolor: '#618264', position: 'relative' }}>
      <Button
        onClick={logout}
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: '#4caf50', 
          color: '#fff',
          position: 'absolute',
          top: 0,
          right: 0,
          m: 4,
        }}
      >
        Logout
      </Button>
      <CardContent>
        <Typography variant="h4">Profile</Typography>
        <Card sx={{ mt: 2, border: '1px solid #ccc', borderRadius: 2, p: 2, bgcolor: '#6db073' }}>
            <Typography variant="h6" gutterBottom>
            {`${currentUser?.first_name} ${currentUser?.last_name}`}
            </Typography>
            <Typography variant="body1">
              Handicap: {currentUser?.handicap || 'N/A'}
            </Typography>
        </Card>
      </CardContent>
    </Card>
  );
};

export default Profile;