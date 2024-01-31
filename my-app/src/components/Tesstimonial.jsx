'use client'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Flex,
    useColorModeValue,
    Text,
    Container,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

export default function Testimonial() {
    return (
        <Flex
            //   minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Container>
                <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
                    <AccordionItem>
                        <AccordionButton
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            p={4}>
                            <Text fontSize="md">What Tanishka Enterprises Ltd. is?</Text>
                            <ChevronDownIcon fontSize="24px" />
                        </AccordionButton>
                        <AccordionPanel pb={4} >
                            <Text color="gray.600" textAlign={'justify'}>
                                Your Premier Destination for Quality Sports Wear Wholesale and Manufacturing in New Delhi

                                At Tanishka Enterprises Ltd., we pride ourselves on being the leading wholesaler and manufacturer of premium sports wear for men and women in New Delhi. With a commitment to quality, style, and performance, we cater to the diverse needs of athletes, fitness enthusiasts, and sports teams nationwide.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            p={4}>
                            <Text fontSize="md">Why Choose Tanishka Enterprises Ltd.?</Text>
                            <ChevronDownIcon fontSize="24px" />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Text color="gray.600" textAlign={'justify'}>
                                Quality Assurance: We adhere to stringent quality standards, ensuring that each product meets our rigorous specifications.
                                Innovative Designs: Our team of designers stays ahead of the curve, bringing you the latest trends and innovations in sports wear.
                                <br />
                                Customization Options: We understand that every client has unique needs. That's why we offer customization services to tailor our products according to your preferences.
                                <br />
                                Competitive Pricing: Enjoy competitive wholesale prices without compromising on quality, making Tanishka Enterprises Ltd. the go-to choice for businesses and retailers.
                                Exceptional Customer Service: Our dedicated team is committed to providing prompt assistance and personalized support to ensure a seamless experience from order placement to delivery.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            p={4}>
                            <Text fontSize="md">Partner with Us</Text>
                            <ChevronDownIcon fontSize="24px" />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Text color="gray.600" textAlign={'justify'}>
                            Whether you're a retailer looking to stock premium sports wear or a sports team in need of custom uniforms, Tanishka Enterprises Ltd. is your reliable partner. With flexible ordering options, timely delivery, and unparalleled expertise, we make collaboration easy and rewarding.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Container>
        </Flex>
    )
}