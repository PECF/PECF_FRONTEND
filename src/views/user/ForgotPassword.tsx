import React, { Fragment, useState, useEffect } from "react";
// import Loader from "../layout/Loader/Loader";
// //importar iconos de mailing
// import { useDispatch, useSelector } from "react-redux";
// import { useAlert } from "react-alert"; //Habra que agregar react alert??
// import MetaData from "../layout/MetaData";
// import { forgotPassword } from "../../stores/actions/userAction";
// import { clearErrors } from "../../stores/actions/productAction";
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

const ForgotPassword = () => {
  //   const dispatch = useDispatch();
  //   const alert = useAlert();

  //   const { error, message, loading } = useSelector(
  //     (state : any) => state.forgotPassword
  //     );

  //     const [email, setEmail] = useState("");

  //     const forgotPasswordSubmit = (e : any) => {
  //       e.preventDefault();
  //       const myForm = new FormData();

  //       myForm.set("email", email);
  //       dispatch(forgotPassword(myForm));
  //     };

  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearErrors());
  //   }
  //   if (message) {
  //     alert.success(message);
  //   }
  // }, [dispatch, error, alert, message]);

  //enviar email por body, guardo estado local y lo envio por accion? deberia devolver un objeto {status: true, response: info}
 // user not found, user found, envia mail al ususario, error que falle el back
  return (
 <Box>

    <Box m={5}>Logo</Box>
    <FormControl isRequired >
      <FormLabel fontSize={20}>Let's find your Password</FormLabel>
      <Text fontSize={16} >Please enter your email to search for your account.</Text>
      <Input type="email" />
      <FormHelperText>Your Email is private, we'll never share your email.</FormHelperText>
      <Button
            mt={4}
            colorScheme='teal'
            /* isLoading={props.isSubmitting} */
            type='submit'
          >
            Recover!
          </Button>

    </FormControl>
 </Box>
  );
};

export default ForgotPassword;
