'use client'

import React from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function Banner() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(<Slider />);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Tanishka Enterprises Ltd.',
      text: "Welcome to Tanishka Enterprises Ltd. - Your Premier Destination for Quality Sports Wear Wholesale and Manufacturing in New Delhi",
      image:one,
    },
    {
      title: 'Tanishka Enterprises Ltd.',
      text: "Welcome to Tanishka Enterprises Ltd. - Your Premier Destination for Quality Sports Wear Wholesale and Manufacturing in New Delhi",
      image:
        two,
    },
    {
      title: 'Tanishka Enterprises Ltd.',
      text: "Welcome to Tanishka Enterprises Ltd. - Your Premier Destination for Quality Sports Wear Wholesale and Manufacturing in New Delhi",
      image:
        three,
    },
    {
      title: 'Tanishka Enterprises Ltd.',
      text: "Welcome to Tanishka Enterprises Ltd. - Your Premier Destination for Quality Sports Wear Wholesale and Manufacturing in New Delhi",
      image:
        four,
    },
  ]

  return (
    <Box 
      position={"relative"}
      // height={""}
      // width={"full"}
      overflow={"hidden"}
      >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={['30vh','40vh','50vh','90vh']}
            mt={'115px'}
            width={'100vw'}
            position="relative"
            backgroundPosition="top center"
            backgroundRepeat="no-repeat"
            backgroundSize={'contain'}
            backgroundImage={card.image}>
            {/* This is the block you need to change, to customize the caption */}
            {/* <Container size="container.lg" height="auto" position="relative"> */}
              {/* <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text>
              </Stack> */}
            {/* </Container> */}
          </Box>
        ))}
      </Slider>
    </Box>
  )
}