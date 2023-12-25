import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Profile = ({ currentUser }) => {
  return (
    <Card sx={{ borderRadius: 2, p: 2, bgcolor: '#52D3D8' }}>
      <CardContent>
        <Typography variant="h4">Profile</Typography>
        <Card sx={{ mt: 2, border: '1px solid #ccc', borderRadius: 2, p: 2, bgcolor: '#3887BE' }}>
            <Typography variant="h6" gutterBottom>
            {`${currentUser.first_name} ${currentUser.last_name}`}
            </Typography>
            <Typography variant="body1">
            Handicap: {currentUser.handicap || 'N/A'}
            </Typography>
        </Card>
      </CardContent>
    </Card>
  );
};

export default Profile;