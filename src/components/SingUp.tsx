import React, { useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useRecoveryData } from "../hooks/useRecoveryData";
import { useAuth0 } from "@auth0/auth0-react"
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
  useToast,
} from "@chakra-ui/react";

import { emailRegex } from "../constant/Regex";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/rootStore";
import { register } from "../redux/actions/authActions";

export function SingUp() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const { error } = useRecoveryData("userRegister");

  const send = useToast();

  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (error) {
      send({
        title: "Error",
        description: error,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [error]);

  const handleSubmit = () => {
    if (emailRegex.test(email)) {
      dispatch(register(name, email, password));
      return send({
        title: "Success",
        description: "You have successfully registered",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      return send({
        title: "Invalid email or password",
        description: "Please enter a valid email or password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };


  return (
    <Box>
      <Button colorScheme="teal" variant="solid" onClick={() => loginWithRedirect()}>
        Sign Up
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              variant="solid"
              mr={3}
              onClick={handleSubmit}>
              Sign Up
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
