import React from 'react'
import {
  Heading,
  Box,
  Text,
  Image,
  SimpleGrid
} from '@chakra-ui/react'
import bannerwomen from '../assets/products/bannerwomen.webp'
import {women} from '../data'
import ProductCard from '../components/Card'

const Women = () => {
  return (
    <div>
      <Image src={bannerwomen} pt={20} />
    <SimpleGrid  columns={[1,1,2,2,3]} spacing={2}>
{women.map((i)=>{
    return <ProductCard data={i}/>
})}
    </SimpleGrid>

    </div>
  )
}

export default Women