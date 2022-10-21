import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Text,
  Box,
  Button,
  useToast,
} from "@chakra-ui/react";

import { RepeatIcon } from "@chakra-ui/icons";

const ResetPassword = () => {

  const send = useToast();

  const [inputNew, setInputNew] = React.useState("");
  const [inputNewAgain, setInputNewAgain] = React.useState("");

  const handleChangeNew = (e: React.ChangeEvent<HTMLInputElement>) =>
  setInputNew(e.target.value);
  const handleChangeNewAgain = (e: React.ChangeEvent<HTMLInputElement>) =>
  setInputNewAgain(e.target.value);


    return (
      <Box>
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
              <FormLabel fontSize={20}>Password Reset</FormLabel>
              <Text mt={5} fontSize={16}>
              Please enter your new password.
              </Text>
              <Input
                mt={3}
                onChange={handleChangeNew}
                placeholder="Insert new password here"
                value={inputNew}
                type="password" 
                required
              />  

              <Text mt={5} fontSize={16}>
              Please enter your new password again.
              </Text>
              <Input
                mt={3}
                onChange={handleChangeNewAgain}
                placeholder="Insert new password again"
                value={inputNewAgain}
                type="password" 
                required
              />  
              <FormHelperText>
              Please save your password safetly, never share them with anyone.
              </FormHelperText>
              <Button
                leftIcon={<RepeatIcon />}
                mt={10}
                color={"whiteAlpha.900"}
                bg={"blackAlpha.900"}
                borderColor={"whiteAlpha"}
                _hover={{ bg: "gray.300", color: "blackAlpha.900" }}
                //habria que aplicar logica si encuentra el mail o no si no tira error
                onClick={() =>
                  send({
                    title: "Your password has changed!",
                    description: "Password was changed sucessfuly",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  })
                }
                /*  : send({
                 title: "Ups, something went wrong!",
                 description: "Please verify your password something went wrong",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                  }) */
              >
                Reset!
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Box>
    );
  };


export default ResetPassword;