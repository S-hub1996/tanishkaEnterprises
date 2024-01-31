import React from 'react'
import Contact from '../components/Contact';
import Testimonial from '../components/Tesstimonial';
import Banner from '../components/Banner';
import About from '../components/About';
import { Heading } from '@chakra-ui/react';
import ImgSlider from '../components/ImgSlider';
import men1 from '../assets/products/track-pants-men1.webp'
import women1 from '../assets/products/track-pants-women1.webp'
const Home = () => {

    const men = [
        {
            id: '1',
            image: { men1 },
            title: `Men's Track Pants`
        }
    ]
    const women = [
        {
            id: '1',
            image: { women1 },
            title: `Women's Track Pants`
        }
    ]

    return (
        <div>
            <Banner />
            <Heading fontWeight={'light'} mt={8} textAlign={'center'}>Trending Men Sports Wear</Heading>
            <ImgSlider pack={men} />
            <Heading mt={8} fontWeight={'light'} textAlign={'center'}>Trending Women Sports Wear</Heading>
            <ImgSlider pack={women} />

            <About />
            <Testimonial />
            <Contact />
        </div>
    )
}

export default Home