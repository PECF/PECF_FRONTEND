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

export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { error } = useRecoveryData("userLogin");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
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
      onClose();
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
      <Button size="md" colorScheme="teal" variant="ghost" onClick={onOpen}>
        Log In
      </Button>
      {/* <Text fontWeight="semibold" color="teal" as={Link} onClick={onOpen}>
        Log In
      </Text> */}
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
              onClick={onClose}
            >
              Forgot Password
            </Button>
            <Button
              colorScheme="teal"
              variant="solid"
              mr={3}
              onClick={submitHandler}
            >
              Log In
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
