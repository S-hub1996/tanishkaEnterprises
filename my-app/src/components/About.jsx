'use client'

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { GoGraph } from "react-icons/go";
import { BiRupee } from "react-icons/bi";
import { SearchIcon } from "@chakra-ui/icons";

import { ReactElement } from 'react'

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function About() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Our Story
          </Text>
          <Heading>A Sports wear whole-selling and manufacturing brand.</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          
Welcome to Tanishka Enterprises Ltd. - Your Premier Destination for Quality Sports Wear Wholesale and Manufacturing in New Delhi
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Feature
              icon={<Icon as={GoGraph} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Business Planning'}
            />
            <Feature
              icon={<Icon as={BiRupee} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Financial Planning'}
            />
            <Feature
              icon={<Icon as={SearchIcon} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Market Analysis'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://imgs.search.brave.com/IUAPlMmXTIW5PDv5HeBG5kSJoObp88T2_qbsCg0xxco/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c3BvcnRzd2Vhcm1m/Zy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTkvMDkvb3V0/ZG9vci1mYWJyaWNz/LW1hbnVmYWN0dXJl/ci1wcm9jZXNzLmpw/Zw'
            }
            objectFit={'contain'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}