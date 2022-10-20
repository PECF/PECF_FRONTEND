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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  FormLabel,
  FormControl,
  ModalBody,
  ModalCloseButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  Portal,
  PopoverCloseButton,
} from "@chakra-ui/react";
import Cart from "./Cart";
import { useDisclosure } from "@chakra-ui/react";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <Popover>
            <PopoverTrigger>
              <Button colorScheme="blackAlpha.900" variant="outline">
                Log in
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Log In</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <FormControl>
                    <FormLabel>Enter your email</FormLabel>
                    <Input placeholder="email@example.com" />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" />
                  </FormControl>
                </PopoverBody>
                <PopoverFooter>
                  <Button variant="link" color="blackAlpha.900" border="none">
                    Forgot your password?
                  </Button>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={onClose}
                    ml="5"
                    backgroundColor="blackAlpha.900"
                  >
                    Log In
                  </Button>
                </PopoverFooter>
              </PopoverContent>
            </Portal>
          </Popover>

          <Button
            colorScheme="blackAlpha.900"
            variant="outline"
            onClick={onOpen}
          >
            Sign Up
          </Button>
        </ButtonGroup>

        <Modal isOpen={isOpen} onClose={onClose} size="md" gap={10}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sing up</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Enter your email</FormLabel>
                <Input placeholder="email@example.com" />
              </FormControl>

              <FormControl>
                <FormLabel>Enter your full Name</FormLabel>
                <Input placeholder="Juan Perez" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" border="none">
                Forgot your password?
              </Button>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={onClose}
                backgroundColor="blackAlpha.900"
              >
                Sing In
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Cart />
      </Flex>
    </Container>
  );
}
