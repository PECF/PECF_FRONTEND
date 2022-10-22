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
  Grid,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { emailRegex, passwordRegex } from "../constant/Regex";
import { useRecoveryData } from "../hooks/useRecoveryData";

export const Login = () => {
  const send = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch<AppDispatch>();

  const { error, userInfo } = useRecoveryData("userLogin");
  const handleSubmit = () => {
    if (emailRegex.test(email)) {
      dispatch(login(email, password));
    } else {
      send({
        title: "Invalid email",
        description: "Please enter a valid email",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

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
      if (userInfo) {
        send({
          title: "Success",
          description: userInfo,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    }, [error, userInfo]);
  };

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
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel mt={3}>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Grid
              templateColumns="3fr 1fr"
              gap={6}
              alignItems="center"
              justifyContent="center">
              <Button
                variant="ghost"
                border="none"
                as={Link}
                to="/forgotpassword"
                onClick={onClose}>
                Forgot your password?
              </Button>

              <Button
                mr={3}
                colorScheme="teal"
                backgroundColor="blackAlpha.900"
                onClick={handleSubmit}>
                Log In
              </Button>
            </Grid>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
