import React from 'react';
import AppBarComponent from './components/AppBar';
import HeroSection from './components/HeroSection';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppBarComponent />
      <HeroSection />
      {/* Add other components here */}
    </div>
  );
};

export default App;
