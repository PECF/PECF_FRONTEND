import {
  Box,
  Heading,
  Text,
  Flex,
  Divider
} from "@chakra-ui/react";
import React from "react";
import NavBar from "../Navbar/Navbar";


const About = () => {
  return (
    <Box marginRight={"10"} paddingTop={"5"} marginLeft={"5"}>
       <NavBar/> 
       <Box marginTop={"10"} w="full" bg="blue.700" px="100px" py="40px">
        <Flex justifyContent="space-between" alignItems="center" pb="30px">
          <Heading fontSize={54} letterSpacing="3px" color="whiteAlpha.900">
            About us 
            <Text fontSize={24}>Get to know us a little better</Text>
          </Heading>
        </Flex>
      </Box>
    <Flex gap={"20"} direction={"row"}>
    <Box mt={20}
    maxW="500px"
    bg={"whiteAlpha.100"}
    borderWidth="2px"
    borderRadius="lg"
    overflow="hidden"
    p={50}
    marginTop={"20"}
    boxShadow='lg'>
        <Heading marginLeft={"6"} fontSize={34} letterSpacing="4px" color="blackAlpha.900">
          Who we are
        <Divider />
        </Heading>
      <Box>
      <Flex justifyContent="space-between" alignItems="center" pb="30px">
        <Box paddingTop={"5"}>
        </Box>
      </Flex>
      </Box>
        <Flex>
        <Box>
          <Text textAlign={"center"} color="blackAlpha.700" pb="20px">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia similique aliquid praesentium in magnam quisquam corrupti voluptatum quam vel consectetur nobis id, quaerat cupiditate cum perferendis, impedit doloremque! Dicta, iste!
          </Text>
        </Box>
        </Flex>
    </Box>
    <Box mt={20}
    maxW="500px"
    bg={"whiteAlpha.100"}
    borderWidth="2px"
    borderRadius="lg"
    overflow="hidden"
    p={50}
    marginTop={"20"}
    boxShadow='lg'>
      <Box>
      <Flex pb="30px">
        <Box>
        <Heading marginLeft={"6"} fontSize={34} letterSpacing="4px" color="blackAlpha.900">
          How to work?
        <Divider />
        </Heading>
        </Box>
      </Flex>
      </Box>
        <Flex>
        <Box>
          <Text pt={"5"} textAlign={"center"} color="blackAlpha.700" pb="20px">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia similique aliquid praesentium in magnam quisquam corrupti voluptatum quam vel consectetur nobis id, quaerat cupiditate cum perferendis, impedit doloremque! Dicta, iste!
          </Text>
        </Box>
        </Flex>
    </Box>
    <Box mt={20}
    maxW="500px"
    bg={"whiteAlpha.100"}
    borderWidth="2px"
    borderRadius="lg"
    overflow="hidden"
    p={50}
    marginTop={"20"}
    boxShadow='lg'>
      <Box>
      <Flex justifyContent="space-between" alignItems="center" pb="30px">
        <Box>
        <Heading textAlign={"center"} marginLeft={"6"} fontSize={34} letterSpacing="4px" color="blackAlpha.900">
          Tools
        <Divider />
        </Heading>
        </Box>
      </Flex>
      </Box>
        <Flex>
        <Box>
          <Text pt={"5"} textAlign={"center"} color="blackAlpha.700" pb="20px">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia similique aliquid praesentium in magnam quisquam corrupti voluptatum quam vel consectetur nobis id, quaerat cupiditate cum perferendis, impedit doloremque! Dicta, iste!
          </Text>
        </Box>
        </Flex>
    </Box>
    </Flex>
         {/* <Footer/> */}
    </Box>
  );
};

export default About;