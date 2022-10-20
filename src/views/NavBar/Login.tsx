import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  ButtonGroup,
  FormControl,
  FormLabel,
  Box,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button colorScheme="blackAlpha.900" variant="outline" onClick={onOpen}>
        Log in
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="md" gap={10}>
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
            <Button variant="ghost" border="none">
              Forgot your password?
            </Button>
            <Button
              colorScheme="teal"
              mr={3}
              onClick={onClose}
              backgroundColor="blackAlpha.900"
            >
              Log In
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
