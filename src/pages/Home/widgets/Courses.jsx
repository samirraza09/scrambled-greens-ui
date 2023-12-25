import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const Courses = ({ courses }) => {
  const handleAddCourse = () => {
    // Handle logic for adding a course
    console.log('Add Course button clicked!');
  };

  return (
    <Card sx={{ borderRadius: 2, p: 2, bgcolor: '#52D3D8', position: 'relative' }}>
      {/* Add Course button in the top right */}
      <Button
        onClick={handleAddCourse}
        variant="contained"
        color="primary"
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          m: 4,
        }}
      >
        Add Course
      </Button>

      <CardContent>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Courses
        </Typography>
        {courses?.map((course) => (
          <Card
            key={course.id}
            sx={{
              mt: 2,
              border: '1px solid #ccc',
              borderRadius: 2,
              p: 2,
              bgcolor: '#3887BE',
            }}
          >
            <Typography variant="h6">{course.name}</Typography>
            <Typography variant="body1" color="textSecondary">
              Par: {course.par}
            </Typography>
            {course?.tee_boxes?.map((tee_box) => (
              <div key={tee_box.id} sx={{ mt: 1 }}>
                <Typography variant="subtitle1">{tee_box.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Rating: {tee_box.rating}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Slope: {tee_box.slope}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Total Distance: {tee_box.total_distance}
                </Typography>
              </div>
            ))}
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default Courses;