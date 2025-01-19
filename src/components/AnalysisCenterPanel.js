import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const CenterPanel = ({ analysisData, courses, gridConfig }) => {
  const { rows, columns } = gridConfig;

  // Issue descriptions for each card
  const issueDescriptions = {
    searchability: [
      "Ensure your resume is ATS-compatible for better visibility.",
      "Optimize file names and formats for recruiter searches.",
    ],
    hardSkills: [
      "Include more specific technical skills relevant to the role.",
      "Mention any certifications that validate your hard skills.",
      "Provide examples of projects showcasing your technical expertise.",
    ],
    softSkills: [
      "Highlight teamwork abilities in previous roles.",
      "Emphasize leadership experiences with measurable outcomes.",
      "Showcase adaptability in handling dynamic challenges.",
      "Mention effective communication skills through achievements.",
    ],
    recruiterTips: [
      "Tailor your resume to align with the job description.",
      "Focus on quantifiable achievements to grab attention.",
    ],
    formatting: [
      "Use consistent font sizes and styles throughout the resume.",
      "Add proper spacing for better readability.",
      "Ensure section headers stand out visually.",
      "Avoid clutter and maintain a clean layout.",
      "Stick to a professional format with ATS-friendly designs.",
    ],
    keywords: [
      "Incorporate relevant industry-specific keywords for better matching.",
    ],
  };

  return (
    <Box
      sx={{
        width: 'calc(100% - 80px)',
        minHeight: '100vh',
        marginTop: '50px',
        marginLeft: '50px',
        padding: 10,
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
          mr: 50
        }}
      >
        {analysisData
          .filter((item) => item.label !== 'Match Rate') // Remove Match Rate card
          .map((item, index) => {
            // Map item label to issue description key
            const key = item.label
              .toLowerCase()
              .replace(/\s+issues/, '')
              .replace('hard skills', 'hardSkills')
              .replace('soft skills', 'softSkills')
              .replace('recruiter tips', 'recruiterTips');
            return (
              <Card
                key={index}
                sx={{
                  height: 'auto',
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
                    Issues Count: {item.value}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {issueDescriptions[key]?.map((desc, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        sx={{ color: 'text.secondary', mt: 1 }}
                      >
                        - {desc}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            );
          })}
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
                sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1, textAlign: 'center' }}
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
