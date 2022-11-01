import { Box, Heading, Text, Flex, Divider, Center } from "@chakra-ui/react";
import React from "react";

export const AboutUs = () => {
  return (
    <Box marginRight={"10"} paddingTop={"5"} marginLeft={"5"}>
      <Box marginTop={"10"} w="full" bg="teal" px="100px" py="40px">
        <Flex justifyContent="space-between" alignItems="center" pb="30px">
          <Heading
            fontSize={54}
            letterSpacing="1px"
            color="whiteAlpha.900"
            ml={-8}
          >
            About us
            <Text fontSize={24}>Get to know us a little better</Text>
          </Heading>
        </Flex>
      </Box>
      <Flex direction={"column"} justifyContent="center" alignItems="center">
        <Box
          bg={"whiteAlpha.100"}
          overflow="hidden"
          p={50}
          marginTop={"7"}
          boxShadow="lg"
        >
          <Heading textAlign={"center"} fontSize={34} letterSpacing="2px">
            Who we are
            <Divider />
          </Heading>
          <Center>
            <Flex
              gap={"20"}
              direction={"column"}
              justifyContent="space-between"
              alignItems="center"
              pb="30px"
            >
              <Box paddingTop={"5"}></Box>
            </Flex>
          </Center>
          <Flex
            direction={"column"}
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <Text align={"justify"} pb="20px">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia similique aliquid praesentium in magnam quisquam
                corrupti voluptatum quam vel consectetur nobis id, quaerat
                cupiditate cum perferendis, impedit doloremque! Dicta, iste!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia similique aliquid praesentium in magnam quisquam
                corrupti voluptatum quam vel consectetur nobis id, quaerat
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box
          bg={"whiteAlpha.100"}
          overflow="hidden"
          p={50}
          marginTop={"7"}
          boxShadow="lg"
        >
          <Box>
            <Flex
              direction={"column"}
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <Heading textAlign={"center"} fontSize={34} letterSpacing="2px">
                  How to work?
                  <Divider />
                </Heading>
              </Box>
            </Flex>
          </Box>
          <Flex
            direction={"column"}
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <Text pt={"5"} align={"justify"} pb="20px">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia similique aliquid praesentium in magnam quisquam
                corrupti voluptatum quam vel consectetur nobis id, quaerat
                cupiditate cum perferendis, impedit doloremque! Dicta, iste!
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box
          bg={"whiteAlpha.100"}
          overflow="hidden"
          p={50}
          marginTop={"7"}
          boxShadow="lg"
        >
          <Box>
            <Flex
              direction={"column"}
              justifyContent="center"
              alignItems="center"
              pb="30px"
            >
              <Box>
                <Heading textAlign={"center"} fontSize={34} letterSpacing="2px">
                  Tools
                  <Divider />
                </Heading>
              </Box>
            </Flex>
          </Box>
          <Flex justifyContent="center" alignItems="center">
            <Box>
              <Text pt={"5"} align={"justify"} pb="20px">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia similique aliquid praesentium in magnam quisquam
                corrupti voluptatum quam vel consectetur nobis id, quaerat
                cupiditate cum perferendis, impedit doloremque! Dicta, iste!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia similique aliquid praesentium in magnam quisquam
                corrupti voluptatum quam vel consectetur nobis id, quaerat
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
