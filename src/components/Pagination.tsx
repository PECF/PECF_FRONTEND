import {
  Box,
  Flex,
  IconButton,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";
import React, { Fragment } from "react";

export const Pagination = ({
  functionPagination,
  productsLength,
  productsPage,
  currentPage,
}: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(productsLength / productsPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Fragment>
      <Flex
        justifyContent="center"
        alignItems="center"
        mt="1rem"
        mb="1rem"
        flexDir="row">
        {pageNumbers.map((number) => (
          <Box
            key={number}
            mx="0.5rem"
            _hover={{ cursor: "pointer" }}
            onClick={() => functionPagination(number)}>
            <IconButton
              aria-label="Dots"
              colorScheme="teal"
              borderRadius="full"
              bgColor="teal.500"
              _hover={{ bgColor: "teal.600" }}
              _active={{ bgColor: "teal.700" }}
              _focus={{ boxShadow: "none" }}
              size={useBreakpointValue({ base: "sm", md: "md" })}>
              <Text>{number}</Text>
            </IconButton>
          </Box>
        ))}
      </Flex>
    </Fragment>
  );
};
