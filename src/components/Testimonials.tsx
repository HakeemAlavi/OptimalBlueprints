import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';


const userTestimonials = [
  {
    name: 'Alice Smith',
    occupation: 'Fitness Enthusiast',
    testimonial:
      "I've never been more motivated to work out than with this program! It's challenging yet rewarding, and the results speak for themselves. Highly recommend!",
  },
  {
    name: 'Mike Johnson',
    occupation: 'Personal Trainer',
    testimonial:
      "As a trainer, I'm always looking for effective programs to recommend to my clients. This one exceeds all expectations. It's versatile, science-backed, and delivers real results.",
  },
  {
    name: 'Emma Davis',
    occupation: 'Athlete',
    testimonial:
      "I've tried many fitness programs throughout my career, but this one stands out. It's tailored to individual needs, adapts to my training schedule, and helps me perform at my best.",
  },
];

const avatarStyle = {
    width: '64px',
    height: '64px',
  };
  
  export default function Testimonials() {
    return (
      <Container
        id="testimonials"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
            mb: 4, // Add margin bottom for better separation
          }}
        >
          <Typography component="h2" variant="h4" color="text.primary" fontFamily="Poppins" fontWeight="bold" sx={{ mb: 2 }}>
            Client Testimonials {/* Increase margin bottom */}
          </Typography>
          <Typography variant="body1" color="text.secondary" fontFamily="Poppins">
            Discover how our fitness programs have transformed the lives of our clients.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {userTestimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flexGrow: 1,
                  p: 1,
                  borderRadius: '12px',
                }}
              >
                <CardContent>
                  <Typography variant="body2" color="text.secondary" fontFamily="Poppins">
                    {testimonial.testimonial}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 2,
                  }}
                >
                  <Avatar alt={testimonial.name} src={`/static/images/avatar/${index + 1}.jpg`} style={avatarStyle} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold" color="text.primary" fontFamily="Poppins">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontFamily="Poppins">
                      {testimonial.occupation}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
