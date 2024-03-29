import { Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

export const SlideCard = ({Props}) => {
    // console.log(Props)
    const {title,image,id}= Props
    // console.log(title)
    return (
        <>
        {/* <Link to={`${id}`}> */}
        <Link to={`/men`}>
      <VStack
        w="１００％"
        h="420px"
        // bg="cyan.400"
        // border="cyan.700"
        alignContent="center"
        justifyContent="center"
        mx="4"
        >
        <Image src={image} fit={"contain"} h={'375px'} w={['360px','420px','500px']}/>
        <Text color={'gray.400'} fontWeight="bold">
          {title}
        </Text>
      </VStack>

        </Link>
        
          </>
    );
  };
  