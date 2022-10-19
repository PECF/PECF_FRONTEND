import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

export const ResetPassword: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const toast = useToast();

  const onSubmit = async (data: any) => {
    try {
      setError("");
      setLoading(true);
      await resetPassword(data.email);
      toast({
        title: "Password reset email sent.",
        description: "Check your inbox for further instructions.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      history.push("/");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  };

  return (
    <Center h="100vh">
      <Flex
        direction="column"
        w="400px"
        h="500px"
        bg="white"
        borderRadius="md"
        boxShadow="md">
        <Box p="4">
          <Heading as="h1" size="lg" mb="4">
            Reset Password
          </Heading>
          {error && <Text color="red.500">{error}</Text>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="email"
              placeholder="Email"
              ref={register({
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              mb="4"
            />
            {errors.email && (
              <Text color="red.500">{errors.email.message}</Text>
            )}
            <Button
              type="submit"
              colorScheme="teal"
              isLoading={loading}
              loadingText="Sending email">
              Reset Password
            </Button>
          </form>
          <Text mt="4">
            <Link to="/">Login</Link>
          </Text>
        </Box>
      </Flex>
    </Center>
  );
};
