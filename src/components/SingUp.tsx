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
  FormControl,
  FormLabel,
  Box,
  ModalFooter,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

export default function SingUp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button
        mr={3}
        colorScheme="teal"
        backgroundColor="blackAlpha.900"
        onClick={onOpen}>
        Sign Up
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="md">
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
            <Button
              colorScheme="teal"
              mr={3}
              onClick={onClose}
              backgroundColor="blackAlpha.900">
              Sing In
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
