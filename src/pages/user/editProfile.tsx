import { useRecoveryData } from "../../hooks/useRecoveryData";
import React, { useState, useEffect } from "react";
import { updateUserProfile } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/rootStore';


import {
  useToast,
  Button,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
  useDisclosure,
  Flex,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Heading,
  Avatar,
  Grid,
  Box,
  GridItem,
  Icon,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";
import { RiImageAddLine } from "react-icons/ri";

export function EditProfile() {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useRecoveryData("userDetails");
  const { loading, success, error, }: { loading: boolean, success: boolean, error: boolean | string } = useRecoveryData("userUpdateProfile")
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone || "");
  const [address, setAddress] = useState(user?.address.address || "");
  const [city, setCity] = useState(user?.address.city || "");
  const [state, setState] = useState(user?.address.state || "");
  const [zipCode, setZipCode] = useState(user?.address.zipCode || "");
  const [country, setCountry] = useState(user?.address.country || "");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [avatar, setAvatar] = useState(user?.avatar.url);
  const [avatarPreview, setAvatarPreview] = useState(user?.avatar.url);
  const toast = useToast();
  const { isOpen: isOpenAvatar, onOpen: onOpenAvatar, onClose: onCloseAvatar } = useDisclosure();
  const { isOpen: isOpenConfirm, onOpen: onOpenConfirm, onClose: onCloseConfirm } = useDisclosure();


  useEffect(() => {
    if (success) {
      toast({
        title: "Profile updated.",
        description: "Your profile has been updated.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
    if (error) {
      toast({
        title: "Error updating profile.",
        description: error,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [success, error])




  const updateProfileDataChange = (e:
    React.ChangeEvent<HTMLInputElement>) => {

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    if (e.target.files) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };


  const handleSubmit = async () => {

    if (password !== passwordConfirmation) {
      toast({
        title: "Passwords do not match.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }


    try {

      const _user = {
        name,
        email,
        phone,
        address,
        city,
        state,
        zipCode,
        country,
        password,
        avatar
      };

      await dispatch(updateUserProfile(_user));


    } catch (error) {
      console.log(error)
    }
  };



  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      w="full"
      mt={8}
      ml={6}
      maxW="full"
      mx="auto"
      bg={useColorModeValue("white", "gray.700")}
      overflow="hidden">
      <VStack align="stretch" spacing={0}>
        <Flex
          justify="space-between"
          align="center"
          px={6}
          py={4}
          bg={useColorModeValue("gray.50", "gray.800")}
          borderBottomWidth="1px">
          <Heading
            size="lg"
            fontWeight="bold"
            color={useColorModeValue("gray.900", "white")}>
            Edit Profile
          </Heading>
        </Flex>
        <Box w={{ base: "100%", md: "100%" }}>
          <VStack align="stretch" spacing={0}>
            <Box p={6}>
              <Flex
                justify="center"
                align="center"
                direction="column"
                py={12}
                px={6}
                bg={useColorModeValue("gray.50", "gray.900")}>
                <Avatar size="2xl" src={avatarPreview} mb={4} pos="relative" />
                <Button
                  colorScheme="teal"
                  variant="solid"
                  size="sm"
                  onClick={onOpenAvatar}>
                  Change Avatar
                </Button>
                <Modal isOpen={isOpenAvatar} onClose={onCloseAvatar}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Change Photo</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <FormControl id="image">
                        <FormLabel>Image</FormLabel>
                        <InputGroup
                          size="md"
                          bg={useColorModeValue("alphaWhite", "gray.800")}
                          borderRadius="md"
                          color="gray.500"
                          fontSize="sm"
                          fontWeight="medium"
                          lineHeight="short"

                        >
                          <InputLeftElement
                            pointerEvents="none"
                          ><Icon as={RiImageAddLine} color="gray.300" /></InputLeftElement>
                          <Input
                            type="file"
                            name="avatar"
                            accept="image/*"
                            onChange={updateProfileDataChange}
                            sx={{
                              "::file-selector-button": {
                                height: 10,
                                padding: 0,
                                mr: 4,
                                background: "none",
                                border: "none",
                                fontWeight: "bold",
                              },
                            }}
                          />
                        </InputGroup>
                      </FormControl>
                    </ModalBody>
                    <ModalFooter>
                      <Grid
                        templateColumns="repeat(2, 1fr)"
                        gap={4}
                      >

                        <Button
                          colorScheme="teal"
                          variant="ghost"
                          onClick={() => {
                            onCloseAvatar();
                            setAvatar(user?.avatar.url);
                            setAvatarPreview(user?.avatar.url);
                          }}>
                          Cancel
                        </Button>
                        <Button
                          colorScheme="teal"
                          variant="solid"
                          mr={3}
                          onClick={
                            onCloseAvatar
                          }>
                          Save
                        </Button>
                      </Grid>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Flex>
              <Grid
                mt={6}
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(1, 1fr)",
                }}
                gap={6}>
                <GridItem colSpan={1}>
                  <FormControl id="name">
                    <FormLabel>Full Name</FormLabel>
                    <Input
                      type="text"
                      bg={useColorModeValue("gray.50", "gray.900")}
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      bg={useColorModeValue("gray.50", "gray.900")}
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                  <FormControl id="phone">
                    <FormLabel>Phone</FormLabel>
                    <Input
                      type="text"
                      bg={useColorModeValue("gray.50", "gray.900")}
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone"
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                  <FormControl id="address">
                    <FormLabel>Address</FormLabel>
                    <Input
                      type="text"
                      bg={useColorModeValue("gray.50", "gray.900")}
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter your address"
                    />
                  </FormControl>
                </GridItem>
              </Grid>
              <Grid
                mt={6}
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(2, 1fr)",
                }}
                gap={6}
              >
                <GridItem colSpan={1}>
                  <FormControl id="country"
                  >
                    <FormLabel>Country</FormLabel>
                    <Input
                      type="text"
                      bg={useColorModeValue("gray.50", "gray.900")}
                      name="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="Enter your country"
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                  <FormControl id="city">
                    <FormLabel>City</FormLabel>
                    <Input
                      type="text"
                      bg={useColorModeValue("gray.50", "gray.900")}
                      name="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Enter your city"
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                  <FormControl id="state">
                    <FormLabel>State</FormLabel>
                    <Input
                      type="text"
                      bg={useColorModeValue("gray.50", "gray.900")}
                      name="state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder="Enter your state"
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                  <FormControl id="zipCode">
                    <FormLabel>ZipCode</FormLabel>
                    <Input
                      type="text"
                      bg={useColorModeValue("gray.50", "gray.900")}
                      name="zipCode"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      placeholder="Enter your zipCode"
                    />
                  </FormControl>
                </GridItem>
              </Grid>
              <Flex
                justify="center"
                align="center"
                direction="column"
                py={12}
                px={6}
                bg={useColorModeValue("white", "gray.700")}>
                <Button
                  colorScheme="teal"
                  variant="solid"
                  size="lg"
                  isLoading={loading}
                  onClick={onOpenConfirm}>
                  Update Profile
                </Button>
              </Flex>
              <Modal isOpen={isOpenConfirm} onClose={onCloseConfirm}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Confirm</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <FormControl id="password"
                      isRequired
                    >
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"

                      />
                    </FormControl>
                    <FormControl
                      mt={4}
                      id="password_confirmation"
                      isRequired
                    >
                      <FormLabel>Confirm Password</FormLabel>
                      <Input
                        type="password"
                        name="password_confirmation"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        placeholder="Enter your password confirmation"

                      />
                    </FormControl>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      colorScheme="teal"
                      variant="ghost"
                      onClick={() => {
                        onCloseConfirm();
                      }}>
                      Cancel
                    </Button>
                    <Button
                      colorScheme="teal"
                      variant="solid"
                      ml={3}
                      loadingText="Updating"
                      onClick={
                        () => {
                          handleSubmit();
                          onCloseConfirm();
                        }
                      }>
                      Save
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </VStack>
        </Box>
      </VStack >
    </Box >
  );
}
