import React from 'react'
import {
  Heading,
  Box,
  Text,
  Image,
  SimpleGrid
} from '@chakra-ui/react'
import bannermen from '../assets/products/bannermen.webp'
import {men} from '../data'
import ProductCard from '../components/Card'

const Women = () => {
  return (
    <div>
      <Image src={bannermen} pt={20} />
    <SimpleGrid  columns={[1,1,2,2,3]} spacing={2}>
{men.map((i)=>{
    return <ProductCard data={i}/>
})}
    </SimpleGrid>

    </div>
  )
}

export default Women