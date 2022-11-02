import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Text,
  Box,
  Container,
  Button,
  useToast,
  Grid,
  Spacer,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/rootStore";
import { forgotPassword } from "../../redux/actions/authActions";
import { useRecoveryData } from "../../hooks/useRecoveryData";
import { emailRegex } from "../../constant/Regex";

export default function ForgotPassword() {
  const send = useToast();

  const [email, setEmail] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const { error, userInfo, loading } = useRecoveryData("userForgotPassword");
  const data = useRecoveryData("userForgotPassword");

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

  const handleSubmit = () => {
    if (emailRegex.test(email)) {
      dispatch(forgotPassword(email));
    } else {
      send({
        title: "Invalid email",
        description: "Please enter a valid email",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Container>
      <Box
        mt={20}
        maxW="100%"
        bg={"whiteAlpha.100"}
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        p={50}
        boxShadow="lg">
        <FormControl isRequired>
          <FormLabel fontSize={20}>Let&apos;s find your Password</FormLabel>
          <Text mt={5} fontSize={16}>
            Please enter your email to search for your account.
          </Text>
          <Input
            mt={5}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            value={email}
            type="email"
          />
          <FormHelperText>
            Your password is private, we&apos;ll never share your passwords.
          </FormHelperText>
          <Grid mt={5} templateColumns="repeat(2, 1fr)" gap={6}>
            <Spacer />
            <Button
              leftIcon={<EmailIcon />}
              mt={10}
              colorScheme="teal"
              backgroundColor="blackAlpha.900"
              isLoading={loading}
              onClick={handleSubmit}>
              Recover!
            </Button>
          </Grid>
        </FormControl>
      </Box>
    </Container>
  );
}
