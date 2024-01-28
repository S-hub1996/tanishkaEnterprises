import React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import { Logo } from './Logo';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonial from './components/Tesstimonial';
import Banner from './components/Banner';

function App() {
  return (

    <Box textAlign="center" fontSize="xl">

      <Navbar />
      <Banner/>
      <Testimonial/>
      <Contact />
      <Footer />

    </Box>

  );
}

export default App;
