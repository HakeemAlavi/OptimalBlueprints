import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const items = [
  {
    icon: <FitnessCenterIcon />,
    title: 'Personalized Workouts',
    description:
      'Tailored exercise routines designed to fit your fitness goals and preferences.',
  },
  {
    icon: <DirectionsRunIcon />,
    title: 'Cardiovascular Training',
    description:
      'Effective cardio exercises to improve heart health, endurance, and stamina.',
  },
  {
    icon: <LocalDiningIcon />,
    title: 'Nutritional Guidance',
    description:
      'Expert nutritional advice and meal plans to support your fitness journey.',
  },
  {
    icon: <LocalHospitalIcon />,
    title: 'Injury Prevention',
    description:
      'Guidance on proper form and technique to minimize the risk of injuries.',
  },
  {
    icon: <SupervisorAccountIcon />,
    title: 'Professional Support',
    description:
      'Access to certified trainers and fitness experts for personalized assistance.',
  },
  {
    icon: <EmojiObjectsIcon />,
    title: 'Mindfulness Practices',
    description:
      'Incorporate mindfulness techniques to enhance mental well-being and focus.',
  },
];

const Features: React.FC = () => {
  return (
    <Box
      id="features"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#3faedb', // Matching the blue color of the app bar
        fontFamily: 'Poppins', // Using the Poppins font
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 }, // Using the same spacing as in the testimonials section
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
            mb: 4, // Add margin bottom for better separation
          }}
        >
          <Typography component="h2" variant="h4" color="white" fontFamily="Poppins" fontWeight="bold" sx={{ mb: 2 }}>
            Program Features
          </Typography>
          <Typography variant="body1" sx={{ color: 'white', fontFamily: 'Poppins' }}>
            Discover the key features of our fitness programs that set us apart
            and help you achieve your fitness goals effectively.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: '#c2c2c2',
                  background: 'transparent',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                }}
              >
                <Box sx={{ color: 'black', opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="bold" gutterBottom sx={{ color: 'black', fontFamily: 'Poppins' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Poppins' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
