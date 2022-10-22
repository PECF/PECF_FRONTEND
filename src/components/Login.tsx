import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/actions/authActions";
import { AppDispatch } from "../redux/rootStore";
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
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { emailRegex } from "../constant/Regex";
import { useRecoveryData } from "../hooks/useRecoveryData";

export const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { error } = useRecoveryData("userLogin");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
  const send = useToast();

  const handleSubmit = () => {
    if (emailRegex.test(email)) {
      dispatch(login(email, password));
      send({
        title: "Success",
        description: "You have successfully logged in",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      send({
        title: "Invalid email or password",
        description: "Please enter a valid email or password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

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

  return (
    <Box>
      <Button
        mr={3}
        colorScheme="teal"
        backgroundColor="blackAlpha.900"
        onClick={onOpen}>
        Log In
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3}>
              <Link to="/forgotpassword">Forgot Password</Link>
            </Button>
            <Button colorScheme="teal" mr={3} onClick={handleSubmit}>
              Log In
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
