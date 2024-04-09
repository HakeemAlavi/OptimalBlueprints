import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Define props interface for the HeroSection component
interface HeroSectionProps {}

// Define functional component for HeroSection
const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Text content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" gutterBottom fontFamily="Poppins" fontWeight="bold">
            Less Effort, More Results
          </Typography>
          <Typography variant="subtitle1" paragraph color="text.secondary" fontFamily="Poppins"> 
            Unlock your potential with our customized, evidence-based fitness programs
          </Typography>
          {/* Call to action button */}
          <Button variant="contained" color="primary" style={{ fontFamily: 'Poppins', borderRadius: '12px' }}>
            Get Started
          </Button>
        </Grid>
        {/* Image */}
        <Grid item xs={12} md={6}>
          <img src={'/fit-man-illustration.png'} alt="Fitness" style={{ maxWidth: '100%', height: 'auto' }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;