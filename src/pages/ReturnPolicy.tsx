import { Box, Heading, Text, Flex, Link } from "@chakra-ui/react";
import React from "react";

export const ReturnPolicy = () => {
  return (
    <Box marginRight={"10"} paddingTop={"5"} marginLeft={"5"}>
      <Box marginTop={"10"} w="full" bg="teal" px="100px" py="40px">
        <Flex justifyContent="center" alignItems="center" pb="30px">
          <Heading color="whiteAlpha.900">
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
          borderWidth="2px"
          borderRadius="lg"
          overflow="hidden"
          p={50}
          boxShadow="lg"
        >
          <Box>
            <Text fontSize={26} pb="20px">
              Products can be returned free of charge, regardless of the
              reason..
            </Text>
            <Text fontSize={35} pb="20px">
              What are the requirements to return a product?
            </Text>
            <Text fontSize={20}>
              -Not more than 30 days have passed since the purchase was made.
              <br />
              -The product must be without marks of misuse and as received.
              <br />
              -It must have its accessories, manuals and labels.
              <br />
              -If it is a cell phone, notebook, tablet or smartwatch, it must be
              unlocked, without passwords that prevent its use.
              <br />
              -If a product has a problem or is incomplete, when you return it
              and we review it, it must be in the same condition as you describe
              when claiming.
            </Text>
            <Box pt={5}>
              <Text fontSize={30}>Can I change a product?</Text>
              <Text fontSize={20}>
                Although we cannot change a product you bought, you can request
                a return and get your money back to buy what you want.
                <br /> In case you have an open claim, you can agree with the
                seller the possibility of replacing the product.
              </Text>
              <Text pt={5} fontSize={30}>
                When and where do I get my return money refunded?
              </Text>
              <Text fontSize={20}>
                For more information on refund after returning a product,
                <br />
                <Link color="teal.500" href="/#">
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
