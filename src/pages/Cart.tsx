// Path: src/pages/Cart.tsx
// Language: typescript jsx

import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import { FaArrowRight } from "@chakra-ui/icons";

export const Cart: React.FC = () => {
  return (
    <Box>
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="calc(100vh - 100px)">
        <Heading as="h1" size="4xl" mb={4}>
          Cart
        </Heading>
        <Text fontSize="xl" mb={4}>
          This is the cart page
        </Text>
        <Link to="/checkout">
          <Text fontSize="xl" color="blue.500" fontWeight="bold">
            {/* View Checkout <FaArrowRight /> */}
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};
