import './App.css';
import React from 'react';
import AppBarComponent from './components/AppBar';
import HeroSection from './components/HeroSection';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppBarComponent />
      <HeroSection />
      <Testimonials />
      <Features />
      <Footer />
      {/* Add other components here */}
    </div>
  );
};

export default App;
