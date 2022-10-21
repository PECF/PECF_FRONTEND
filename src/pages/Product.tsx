// Path: src/pages/Product.tsx
// Language: typescript jsx

import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "@chakra-ui/icons";

export const Product: React.FC = () => {
  return (
    <Box>
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="calc(100vh - 100px)">
        <Heading as="h1" size="4xl" mb={4}>
          Product
        </Heading>
        <Text fontSize="xl" mb={4}>
          This is the product page
        </Text>
        <Link to="/cart">
          <Text fontSize="xl" color="blue.500" fontWeight="bold">
            View Cart <FaArrowRight />
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};
