import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#3faedb',
        color: 'white',
        py: 8,
        px: 4,
        fontFamily: 'Poppins, sans-serif', // Set overall font family to Poppins
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
        >
          <Box>
            <Typography variant="h6" fontWeight="bold" mb={2} fontFamily="Poppins, sans-serif"> {/* Set font family to Poppins */}
              Support
            </Typography>
            <Typography variant="body2" color="inherit" fontFamily="Poppins, sans-serif"> {/* Set font family to Poppins */}
              If you have any questions or need assistance, please don't hesitate to contact us.
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <IconButton
              color="inherit"
              href="https://www.facebook.com/"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://twitter.com/"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Stack>
        <Box
          sx={{
            borderTop: '1px solid',
            borderColor: 'divider',
            mt: 4,
            pt: 4,
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'Poppins, sans-serif', // Set overall font family to Poppins
          }}
        >
          <Typography variant="body2" color="inherit" fontFamily="Poppins, sans-serif"> {/* Set font family to Poppins */}
            © {new Date().getFullYear()} Optimal Blueprints. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link variant="body2" color="inherit" href="#" fontFamily="Poppins, sans-serif"> {/* Set font family to Poppins */}
              Privacy Policy
            </Link>
            <Typography display="inline" color="inherit" fontFamily="Poppins, sans-serif"> {/* Set font family to Poppins */}
              &nbsp;•&nbsp;
            </Typography>
            <Link variant="body2" color="inherit" href="#" fontFamily="Poppins, sans-serif"> {/* Set font family to Poppins */}
              Terms of Service
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
