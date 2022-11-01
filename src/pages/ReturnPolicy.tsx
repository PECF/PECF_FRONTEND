import {
  Box,
  Heading,
  Text,
  Flex,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";

export const ReturnPolicy = () => {
  return (
    <Box marginRight={"10"} paddingTop={"5"} marginLeft={"5"}>
      <Box marginTop={"10"} w="full" bg="teal" px="100px" py="40px">
        <Flex justifyContent="space-between" alignItems="center" pb="30px">
          <Heading color="whiteAlpha.900" ml={-6}>
            Return policies for your purchases
          </Heading>
        </Flex>
      </Box>
      <Flex>
        <Box
          //   mt={5}
          //   ml={"450"}
          //   maxW="500"
          bg={"whiteAlpha.100"}
          overflow="hidden"
          p={50}
          boxShadow="lg"
        >
          <Box>
            <Text fontSize="md" as="i" pb="20px">
              Products can be returned free of charge, regardless of the
              reason..
            </Text>
            <Text mt={5} fontSize="2xl" pb="20px">
              What are the requirements to return a product?
            </Text>
            <Text fontSize="lg">
              <UnorderedList>
                <ListItem>
                  Not more than 30 days have passed since the purchase was made.
                </ListItem>
                <ListItem>
                  The product must be without marks of misuse and as received.
                </ListItem>
                <ListItem>
                  It must have its accessories, manuals and labels.
                </ListItem>
                <ListItem>
                  If it is a cell phone, notebook, tablet or smartwatch, it must
                  be unlocked, without passwords that prevent its use.
                </ListItem>
                <ListItem>
                  If a product has a problem or is incomplete, when you return
                  it and we review it, it must be in the same condition as you
                  describe when claiming.
                </ListItem>
              </UnorderedList>
            </Text>
            <Box pt={5}>
              <Text fontSize="2xl">Can I change a product?</Text>
              <Text fontSize="lg">
                Although we cannot change a product you bought, you can request
                a return and get your money back to buy what you want.
                <br /> In case you have an open claim, you can agree with the
                seller the possibility of replacing the product.
              </Text>
              <Text pt={5} fontSize="2xl">
                When and where do I get my return money refunded?
              </Text>
              <Text fontSize="lg">
                For more information on refund after returning a product,{" "}
                <Link color="teal.500" href="/pages/Refund">
                  you can check when and where you will receive your money
                  according to the means you used to pay.
                </Link>
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
      {/* <Footer/>   */}
    </Box>
  );
};
