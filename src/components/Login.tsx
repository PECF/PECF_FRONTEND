import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react"
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
  useColorModeValue,
} from "@chakra-ui/react";
import { emailRegex } from "../constant/Regex";
import { useRecoveryData } from "../hooks/useRecoveryData";

export const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { error } = useRecoveryData("userLogin");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
  const [authing, setAuthing] = useState(false);
  const send = useToast();

  useEffect(() => {
    if (error) {
      send({
        title: "Error",
        description: error,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [error]);

  const { loginWithRedirect } = useAuth0();

  const submitHandler = () => {
    if (emailRegex.test(email)) {
      dispatch(login(email, password));
      send({
        title: "Success",
        description: "You are logged in",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      send({
        title: "Error",
        description: "Email is not valid",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Button mr={3} colorScheme="teal" variant="solid" onClick={() => loginWithRedirect()}>
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
            <Button
              as={Link}
              to={"/forgot-password"}
              colorScheme="teal"
              variant="solid"
              mr={3}
              onClick={onClose}>
              Forgot Password
            </Button>
            <Button
              colorScheme="teal"
              variant="solid"
              mr={3}>
              Log In
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};