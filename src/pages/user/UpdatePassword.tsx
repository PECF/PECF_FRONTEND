import React, { useState } from "react";
//import { useSelector } from "react-redux";

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

export const UpdatePassword = () => {
  const send = useToast();

  // const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangeOld = (e: React.ChangeEvent<HTMLInputElement>) =>
    setOldPassword(e.target.value);
  const handleChangeNew = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewPassword(e.target.value);
  const handleConfirm = (e: React.ChangeEvent<HTMLInputElement>) =>
    setConfirmPassword(e.target.value);

  return (
    <Box>
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
          <FormLabel fontSize={20}>Password Reset</FormLabel>
          <Text mt={5} fontSize={16}>
            Please enter your old password.
          </Text>
          <Input
            mt={3}
            onChange={handleChangeOld}
            placeholder="Insert old password here"
            value={oldPassword}
            type="password"
            required
          />
          <Text mt={5} fontSize={16}>
            Please enter your new password.
          </Text>
          <Input
            mt={3}
            onChange={handleChangeNew}
            placeholder="Insert new password here"
            value={newPassword}
            type="password"
            required
          />
          <Text mt={5} fontSize={16}>
            Please confirm your new password.
          </Text>
          <Input
            mt={3}
            onChange={handleConfirm}
            placeholder="Insert new password again"
            value={confirmPassword}
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
            Update!
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};
