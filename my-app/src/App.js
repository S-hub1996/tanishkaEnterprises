import React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import MarqueeSlider from './components/Marquee';
import Home from './Pages/Home';

function App() {
  return (

    <Box textAlign="center" fontSize="xl">
      <MarqueeSlider />
      <Navbar />
      <Home />


      <Footer />

    </Box>

  );
}

export default App;
