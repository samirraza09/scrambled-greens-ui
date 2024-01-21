import React, {useState} from 'react';
import { Card, CardContent, Typography, Button, Box, TextField } from '@mui/material';

const Courses = ({ courses }) => {
  const [showCreateCourse, setShowCreateCoruse] = useState(false);
  const [courseButtonText, setCourseButtonText] = useState('Add Course');
  const [courseButtonColor, setCourseButtonColor] = useState('primary');
  const handleAddCourse = () => {
    if (!showCreateCourse) {
      setShowCreateCoruse(true)
      setCourseButtonText('X')
      setCourseButtonColor('secondary')
    } else {
      setShowCreateCoruse(false)
      setCourseButtonText('Add Course')
      setCourseButtonColor('primary')
    }
  };

  return (
    <Card sx={{ borderRadius: 2, p: 2, bgcolor: '#618264', position: 'relative' }}>
      <Button
        onClick={handleAddCourse}
        variant="contained"
        color={courseButtonColor}
        sx={{
          backgroundColor: '#4caf50', 
          color: '#fff',
          position: 'absolute',
          top: 0,
          right: 0,
          m: 4,
        }}
      >
        {courseButtonText}
      </Button>

      <CardContent>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Courses
        </Typography>
        {showCreateCourse &&  <Box
          component="form"
          noValidate
          onSubmit={() => {}}
          sx={{ width: '100%' }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="createCourseName"
            label="Name"
            name="createCourseName"
            autoFocus
            value={"yourmom"}
            onChange={() => {}}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ marginTop: 3, backgroundColor: '#4caf50', color: '#fff' }}
          >
            Login
          </Button>
        </Box>}
        {courses?.map((course) => (
          <Card
            key={course.id}
            sx={{
              mt: 2,
              border: '1px solid #ccc',
              borderRadius: 2,
              p: 2,
              bgcolor: '#6db073',
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