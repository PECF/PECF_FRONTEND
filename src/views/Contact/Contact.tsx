import {
    Box,
    Heading,
    Text,
    Flex,
    Textarea,
    FormControl,
    FormLabel,
    Input,
    Button,
    FormHelperText
  } from "@chakra-ui/react";
  import React from "react";
  import NavBar from "../Navbar/Navbar";
  
const Contact = () => {
    return (
      <Box mt={"5"}>
        <NavBar/>
      <Box marginTop={"10"} w="full" bg="blue.700" px="100px" py="40px">
        <Flex justifyContent="space-between" alignItems="center" pb="80px">
          <Heading fontSize={54} letterSpacing="3px" color="whiteAlpha.900">
            Contact us 
            <Text fontSize={24} >We would love to hear from you. Contact us by filling out the following form...</Text>
          </Heading>
        </Flex>
      </Box>
        <Box mt={"5"}
            ml={"5"}
            mr={"5"}
            maxW="100%"
            bg={"whiteAlpha.100"}
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            p={50}
            boxShadow='lg'>
          <Box>
          <FormControl isRequired>
          <FormLabel>First name</FormLabel>
          <Input placeholder='First name' />
          </FormControl>
          <FormControl isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input placeholder='Last name' />
          </FormControl>
          <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type='email' />
          <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl marginTop={"2"}>
          <FormLabel>How may we help you?</FormLabel>
          <Textarea placeholder='Help me understand how i can help you?' />
          </FormControl>
          <Button
            colorScheme="teal"
            mr={3}
            backgroundColor="blackAlpha.900"
            mt="10"
          >
            Send Form
          </Button>
          </Box>
        </Box>
        {/* <Footer/> */}
      </Box>
    );
  };

export default Contact;