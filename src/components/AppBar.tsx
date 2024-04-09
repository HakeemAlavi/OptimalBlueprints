import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface AppBarProps {}

const AppBarComponent: React.FC<AppBarProps> = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&display=swap');
        `}
      </style>
      <AppBar position="static" sx={{ backgroundColor: '#3faedb' }}>
        <Toolbar sx={{ padding: 0 }}>
          <img src="/gym.png" alt="Workout Logo" style={{ marginRight: '12px', height: '32px' }} />
          <Typography variant="h6" component="a" href="/" color="inherit" style={{ textDecoration: 'none', fontFamily: '"Love Ya Like A Sister", cursive', fontSize: '18px', fontWeight: 600 }}>
            Optimal Blueprints
          </Typography>
          <Button variant="contained" style={{ marginLeft: 'auto', backgroundColor: '#fff', color: '#000', fontFamily: 'Poppins', borderRadius: '12px' }}>
            GET PROGRAM
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarComponent;
