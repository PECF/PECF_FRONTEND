import React, { Fragment, useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Text,
  Box,
  Button,
  useToast,
} from "@chakra-ui/react";

import { EmailIcon } from "@chakra-ui/icons";

const ForgotPassword = () => {

  const send = useToast();

  const [input, setInput] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);


  // !insertar navbar y footer
  //!enviar email por body, guardo estado local y lo envio por accion? deberia devolver un objeto {status: true, response: info}
  // !user not found, user found, envia mail al ususario, error que falle el back
  // blackAlpha.900 y gray.300
  return (
    <Box>
      {/* <NavBar/> */}
      <Box>
        <Box
          mt={20}
          maxW="100%"
          bg={"whiteAlpha.100"}
          borderWidth="2px"
          borderRadius="lg"
          overflow="hidden"
          p={50}
          boxShadow='lg'
        >
          <FormControl isRequired>
            <FormLabel fontSize={20}>Let's find your Password</FormLabel>
            <Text mt={5} fontSize={16}>
              Please enter your email to search for your account.
            </Text>
            <Input
              mt={5}
              onChange={handleChange}
              placeholder="example@pecf.com"
              value={input}
              type="email"
            />  
            <FormHelperText>
              Your Email is private, we'll never share your email.
            </FormHelperText>
            <Button
              leftIcon={<EmailIcon />}
              mt={10}
              color={"whiteAlpha.900"}
              bg={"blackAlpha.900"}
              borderColor={"whiteAlpha"}
              _hover={{ bg: "gray.300", color: "blackAlpha.900" }}
              //habria que aplicar logica si encuentra el mail o no si no tira error
              onClick={() =>
                send({
                  title: "Email Sended!",
                  description: "Your recovery email should arrive soon.",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                })
              }
              /*  : send({
               title: "Ups, something went wrong!",
               description: "We couldn't find your email please verify or try another one",
                  status: "error",
                  duration: 3000,
                  isClosable: true,
                }) */
            >
              Recover!
            </Button>
          </FormControl>
        </Box>
        {/* <Footer/> */}
      </Box>
    </Box>
  );
};
/* }; */

export default ForgotPassword;
