import React, { Fragment, useState, useEffect } from "react";
//import Loader from "../layout/Loader/Loader";
//import { useDispatch, useSelector } from "react-redux";
//import { clearErrors, updatePassword } from "../../actions/userAction";
//import { useAlert } from "react-alert";
//import { UPDATE_PASSWORD_RESET } from "../../constants/userConstants";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";

const UpdatePassword = (/* { history } */) => {
  //   const dispatch = useDispatch();
  //   const alert = useAlert();

  //   const { error, isUpdated, loading } = useSelector((state) => state.profile);

  //   const [oldPassword, setOldPassword] = useState("");
  //   const [newPassword, setNewPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");

  //   const updatePasswordSubmit = (/* e */) => {
  //     e.preventDefault();

  //     const myForm = new FormData();

  //     myForm.set("oldPassword", oldPassword);
  //     myForm.set("newPassword", newPassword);
  //     myForm.set("confirmPassword", confirmPassword);

  //     dispatch(updatePassword(myForm));
  //   };

  //   useEffect(() => {
  //     if (error) {
  //       alert.error(error);
  //       dispatch(clearErrors());
  //     }

  //     if (isUpdated) {
  //       alert.success("Profile Updated Successfully");

  //       history.push("/account");

  //       dispatch({
  //         type: UPDATE_PASSWORD_RESET,
  //       });
  //     }
  //   }, [dispatch, error, alert, history, isUpdated]);

  return (
    <Box>
      <Box m={5}>Logo</Box>

      <FormControl isRequired>
        <FormLabel fontSize={20}>Update your Password</FormLabel>

        <Text fontSize={16}>Please enter your old password.</Text>
        <Input type="password" />
        <Text fontSize={16}>Please enter your new password.</Text>
        <Input type="password" />
        <Text fontSize={16}>Please enter your new password.</Text>
        <Input type="password" />

        <Button
          mt={4}
          colorScheme="teal"
          /* isLoading={props.isSubmitting} */
          type="submit"
        >
          Update!
        </Button>

        <FormHelperText>
          The team is never going to ask you for your private passwords please
          keep them safe
        </FormHelperText>
      </FormControl>

    </Box>
  );
};

export default UpdatePassword;
