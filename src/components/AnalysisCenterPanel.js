import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const CenterPanel = ({ analysisData, courses, gridConfig }) => {
  const { rows, columns } = gridConfig;

  return (
    <Box
      sx={{
        width: 'calc(100% - 20px)',
        minHeight: '100vh',
        marginTop: '50px',
        padding: 4,
        bgcolor: 'background.default',
        borderRadius: 2,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: 'bold',
          color: 'text.primary',
          textAlign: 'center',
        }}
      >
        Analysis Overview
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: 4,
        }}
      >
        {analysisData
          .filter((item) => item.label !== 'Match Rate') // Remove Match Rate card
          .map((item, index) => (
            <Card
              key={index}
              sx={{
                height: '220px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 3,
                borderRadius: 3,
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.25)',
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}
                >
                  {item.label}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          ))}
      </Grid>

      <Typography
        variant="h4"
        sx={{
          mt: 6,
          mb: 4,
          fontWeight: 'bold',
          color: 'text.primary',
          textAlign: 'center',
        }}
      >
        Recommended Courses
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: 4,
        }}
      >
        {courses.map((course, index) => (
          <Card
            key={index}
            sx={{
              height: '180px',
              padding: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: 3,
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.25)',
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}
              >
                {course.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {course.description}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              sx={{
                alignSelf: 'center',
                marginTop: 'auto',
                width: '80%',
                textAlign: 'center',
              }}
            >
              Enroll Now
            </Button>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default CenterPanel;
