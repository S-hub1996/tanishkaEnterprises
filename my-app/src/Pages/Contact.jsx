import React from 'react'
import {
  Heading,
  Box,
  Text
} from '@chakra-ui/react'
import  ContactForm from "../components/Contact";
const Contact = () => {
  return (
  <Box pt={'108px'} >
  <Heading>

  Contact Tanishka Enterprises Ltd.
  </Heading>

  <Text textAlign={'justify'} my={10} mx={20}>
Thank you for your interest in Tanishka Enterprises Ltd., your premier destination for wholesale and manufacturing of sports wear for men and women in New Delhi. For inquiries, orders, or further information, please reach out to us using the following contact details:
</Text>
<br />
<ContactForm/>
<br />
<Text textAlign={'justify'}  my={10} mx={20}>

Our dedicated team is ready to assist you with any questions or requirements you may have. Feel free to contact us during our business hours for prompt and personalized service. We look forward to serving you and meeting your sports wear needs.
</Text>

  </Box>
  )
}

export default Contact