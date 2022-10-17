import React, { Fragment, useState, useEffect } from "react";

// import { useDispatch, useSelector } from "react-redux";
// import { clearErrors, resetPassword } from "../../actions/userAction";
// import { useAlert } from "react-alert";
// import MetaData from "../layout/MetaData";
// import LockOpenIcon from "@material-ui/icons/LockOpen";
// import LockIcon from "@material-ui/icons/Lock";
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

const ResetPassword = (/* { history, match } */) => {
//   const dispatch = useDispatch();
//   const alert = useAlert();

//   const { error, success, loading } = useSelector(
//     (state) => state.forgotPassword
//   );

//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const resetPasswordSubmit = (e) => {
//     e.preventDefault();

//     const myForm = new FormData();

//     myForm.set("password", password);
//     myForm.set("confirmPassword", confirmPassword);

//     dispatch(resetPassword(match.params.token, myForm));
//   };

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }

//     if (success) {
//       alert.success("Password Updated Successfully");

//       history.push("/login");
//     }
//   }, [dispatch, error, alert, history, success]);


  return (
    <Box>

    <Box m={5}>Logo</Box>
    <FormControl isRequired >
      <FormLabel fontSize={20}>Password Reset</FormLabel>
      <Text fontSize={16} >Please enter your new password.</Text>
      <Input type="password" required />
      <Text fontSize={16} >Enter new password again.</Text>
      <Input type="password" required />
      <FormHelperText>Never share your passwords with anyone.</FormHelperText>
      <Button
            mt={4}
            colorScheme='teal'
            /* isLoading={props.isSubmitting} */
            type='submit'
          >
            Reset!
          </Button>

    </FormControl>
 </Box>
  );
};

export default ResetPassword;