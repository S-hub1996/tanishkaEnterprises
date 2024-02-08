import React from 'react'
import ContactForm from '../components/Contact';
import Testimonial from '../components/Tesstimonial';
import Banner from '../components/Banner';
import About from '../components/About';
import {Heading} from '@chakra-ui/react'
import ImgSlider from '../components/ImgSlider';
import {men} from '../data'
import {women} from '../data'
const Home = () => {


    return (
        <div>
            <Banner />
  <Heading fontWeight={'light'} mt={8} textAlign={'center'}>Trending Men Sports wear</Heading>
  {/* <Image src={men1} alt='image'/> */}
      <ImgSlider pack={men}/>
      <Heading mt={8} fontWeight={'light'} textAlign={'center'}>Trending Women Sports wear</Heading>
      <ImgSlider pack={women}/>
    
            <About />
            <Testimonial />
            <ContactForm />
        </div>
    )
}

export default Home