import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import "./App.css";
import {
  Box,
  InputGroup,
  InputRightElement,
  Input,
  Container,
  Spacer,
  ButtonGroup,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";

function NavBar() {
  return (
    <Container maxWidth="100%">
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="90"
        justify="space-between"
        ml={-10}
      >
        <Box p="2">
          <Heading size="md">Logo</Heading>
        </Box>
        <InputGroup>
          <InputRightElement
            // eslint-disable-next-line react/no-children-prop
            children={<SearchIcon color="gray.300" cursor="pointer" />}
          />
          <Input
            placeholder="Search..."
            width="md"
            flex={100}
            variant="filled"
          />
        </InputGroup>

        <Spacer />

        <ButtonGroup gap="1">
          <Button colorScheme="teal" variant="outline">
            Sign Up
          </Button>

          <Button colorScheme="teal" variant="outline">
            Log in
          </Button>
        </ButtonGroup>
        <Button colorScheme="teal" size="md" padding="5" width="60">
          Cart
        </Button>
      </Flex>
    </Container>
  );
}

export default NavBar;
