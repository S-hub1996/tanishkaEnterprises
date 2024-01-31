import React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonial from './components/Tesstimonial';
import Banner from './components/Banner';
import About from './components/About';
import MarqueeSlider from './components/Marquee';

function App() {
  return (

    <Box textAlign="center" fontSize="xl">
      <MarqueeSlider/>
      <Navbar />
      <Banner/>
      <About/>
      <Testimonial/>
      <Contact />
      <Footer />

    </Box>

  );
}

export default App;
