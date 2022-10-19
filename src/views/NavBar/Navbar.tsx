import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
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
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  FormLabel,
  FormControl,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <Button colorScheme="teal" variant="outline" onClick={onOpen}>
            Sign Up
          </Button>

          <Button colorScheme="teal" variant="outline" onClick={onOpen}>
            Log in
          </Button>
        </ButtonGroup>

        <Modal isOpen={isOpen} onClose={onClose} size="md" >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Log In</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Enter your email</FormLabel>
                <Input placeholder="email@example.com" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost">Forgot your password?</Button>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Log In
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal isOpen={isOpen} onClose={onClose} size="md" >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sing in</ModalHeader>
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
              <Button variant="ghost">Forgot your password?</Button>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Log In
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Button colorScheme="teal" size="md" padding="5" width="60">
          Cart
        </Button>
      </Flex>
    </Container>
  );
}

export default NavBar;
