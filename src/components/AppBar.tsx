import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Define props interface for the AppBar component
interface AppBarProps {}

// Define functional component for AppBar
const AppBarComponent: React.FC<AppBarProps> = () => {
  // JSX structure for the AppBar component
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&display=swap');
        `}
      </style>
      <AppBar position="static" sx={{ backgroundColor: '#3faedb', padding: '0 2%' }}>
        <Toolbar>
          {/* Logo */}
          <img src="/gym.png" alt="Workout Logo" style={{ marginRight: '12px', height: '32px' }} />
          <Typography variant="h6" component="a" href="/" color="inherit" style={{ textDecoration: 'none', fontFamily: '"Love Ya Like A Sister", cursive', fontSize: '18px', fontWeight: 400 }}>
            Optimal Blueprints
          </Typography>
          {/* Join Button */}
          <Button variant="contained" style={{ marginLeft: 'auto', backgroundColor: '#fff', color: '#000'}}>
            GET PROGRAM
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarComponent;
