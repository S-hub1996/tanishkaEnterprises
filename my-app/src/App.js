// import ReactDOM from "react-dom/client";
import React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Home from "./Pages/Home"
import Contact from "./Pages/Contact";
import Mens from "./Pages/Mens";
import Women from "./Pages/Women";
import About from "./Pages/About";
import Footer from './components/Footer';
import MarqueeSlider from './components/Marquee';
import { Routes, Route } from "react-router-dom";

function App() {
  return (

    <Box textAlign="center" fontSize="xl">
      <MarqueeSlider />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Mens />} />
        <Route path="/women" element={<Women />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" /> */}
      </Routes>
      <Footer />

    </Box>

  );
}

export default App;
