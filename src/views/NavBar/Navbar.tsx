import React from "react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  InputGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  InputRightElement,
  Input,
  Container,
  Spacer,
  ButtonGroup,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";
import Cart from "./Cart";
import Login from "./Login";
import SingUp from "./SingUp";

export default function NavBar() {
  return (
    <Container maxWidth="100%">
      <Flex
        minWidth="max-content"
        alingItems="center"
        gap="10"
        justify="space-between"
      >
        <Box p="2">
          <Heading size="md"> KALÚ</Heading>
        </Box>
        <InputGroup gap="2">
          <InputRightElement
            // eslint-disable-next-line react/no-children-prop
            children={<SearchIcon color="gray.300" cursor="pointer" />}
          />
          <Input
            placeholder="Search..."
            width="sm"
            flex={100}
            variant="filled"
          />
        </InputGroup>
        <Spacer />
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            variant="link"
            gap="8"
            border="none"
            color="blackAlpha.900"
          >
            Pages
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon ml="10" />}
            variant="link"
            border="none"
            color="blackAlpha.900"
            gap="10"
            marginX="0"
          >
            Features
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
          </MenuList>
        </Menu>

        <ButtonGroup gap="">
          <Login />

          <SingUp />
        </ButtonGroup>

        <Cart />
      </Flex>
    </Container>
  );
}
