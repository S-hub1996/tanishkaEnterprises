// import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import { Box, Code } from "@chakra-ui/react";
// import times from "lodash/times";
import Marquee from "react-fast-marquee";

export default function MarqueeSlider(){



 return <Box position={'fixed'} w={'full'}   zIndex={4} height="50px"  textAlign={'center'}>
  <Marquee >
    <Code  color={"gray.100"} bg={'gray.900'} fontSize={['lg','2xl']}>| Tanishka Enterprises | Sports Wear | Custom Manufacturing | Bulk Whole Selling | Product Designing | Custom Branding | Impoted Fabric Material |</Code>
  </Marquee>
</Box>

}