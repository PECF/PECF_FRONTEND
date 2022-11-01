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
  FormHelperText,
} from "@chakra-ui/react";
import React from "react";

export default function ContactUs() {
  return (
    <Box marginRight={"10"} paddingTop={"5"} marginLeft={"5"}>
      {/* <Box marginTop={"10"} ml={5} w="100%" bg="teal" px="100px" py="40px">
        <Flex justifyContent="space-between" alignItems="center" pb="30px">
          <Heading fontSize={54} letterSpacing="2px" color="whiteAlpha.900">
            Contact us
            <Text fontSize={24}>
              We would love to hear from you. Contact us by filling out the
              following form...
            </Text>
          </Heading>
        </Flex>
      </Box> */}

      <Box marginTop={"10"} w="full" bg="teal" px="80px" py="40px">
        <Flex justifyContent="space-between" alignItems="center" pb="30px">
          <Heading
            fontSize={54}
            letterSpacing="1px"
            color="whiteAlpha.900"
            ml={-8}
          >
            Contact us
            <Text fontSize={24}>
              We would love to hear from you. Contact us by filling out the
              following form...
            </Text>
          </Heading>
        </Flex>
      </Box>

      <Box
        mt={"5"}
        ml={"5"}
        mr={"5"}
        maxW="100%"
        bg={"whiteAlpha.100"}
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        p={50}
        boxShadow="lg"
      >
        <Box>
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel mt={3}>Last Name</FormLabel>
            <Input placeholder="Last name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel mt={3}>Email address</FormLabel>
            <Input type="email" placeholder="example@gmail.com" />
            <FormHelperText>We´ll never share your email.</FormHelperText>
          </FormControl>
          <FormControl marginTop={"2"}>
            <FormLabel>How may we help you?</FormLabel>
            <Textarea placeholder="Help me understand how i can help you?" />
          </FormControl>
          <Button colorScheme="teal" mr={3} backgroundColor="teal" mt="10">
            Send Form
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
