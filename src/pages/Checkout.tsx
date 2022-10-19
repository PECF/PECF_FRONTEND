// Path: src/pages/Checkout.tsx
// Language: typescript jsx

import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Checkout: React.FC = () => {
  return (
    <Box>
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="calc(100vh - 100px)">
        <Heading as="h1" size="4xl" mb={4}>
          Checkout
        </Heading>
        <Text fontSize="xl" mb={4}>
          This is the checkout page
        </Text>
        <Link to="/checkout/success">
          <Text fontSize="xl" color="blue.500" fontWeight="bold">
            View Success
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};
