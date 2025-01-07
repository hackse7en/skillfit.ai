import * as React from 'react';
import { Container, Grid, Typography, Card, Avatar, Box } from '@mui/material';
import { styled } from '@mui/system';

// Styled components using MUI's `styled` API
const MemberCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
  gap: theme.spacing(2),
  textAlign: 'center',
  boxShadow: theme.shadows[4],
}));

const MemberAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
}));

const MemberName = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1.2rem',
  marginTop: theme.spacing(1),
}));

const MemberDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.95rem',
  marginTop: theme.spacing(1),
}));

// About Us Component
export default function AboutUs() {
  const teamMembers = [
    {
      name: 'Alice Johnson',
      image: 'https://via.placeholder.com/150',
      description: 'Alice is the frontend developer with a passion for user experience design and creating seamless interfaces.',
    },
    {
      name: 'Bob Smith',
      image: 'https://via.placeholder.com/150',
      description: 'Bob is the backend expert, managing data and building the architecture that supports our platform.',
    },
    {
      name: 'Charlie Lee',
      image: 'https://via.placeholder.com/150',
      description: 'Charlie is the AI specialist, focused on building intelligent systems that power our product features.',
    },
    {
      name: 'Dana Clark',
      image: 'https://via.placeholder.com/150',
      description: 'Dana is the project manager, ensuring everything runs smoothly and guiding the team to meet deadlines.',
    },
  ];

  return (
    <Container
      id="aboutus"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography component="h2" variant="h4" gutterBottom>
        Meet Our Team
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <MemberCard>
              <MemberAvatar alt={member.name} src={member.image} />
              <MemberName variant="h6">{member.name}</MemberName>
              <MemberDescription variant="body2">{member.description}</MemberDescription>
            </MemberCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
