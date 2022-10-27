import { useRecoveryData } from "../../hooks/useRecoveryData";
import React, { useState, FormEvent } from "react";
import ReactCountryFlag from "react-country-flag";
import {
  AsyncCreatableSelect,
  AsyncSelect,
  CreatableSelect,
  Select,
} from "chakra-react-select";
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
  Icon,
  Box,
  GridItem
} from "@chakra-ui/react";

export function EditProfile() {
  const { user } = useRecoveryData("userDetails");

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);
  const [address, setAddress] = useState(user?.address);
  const [city, setCity] = useState(user?.city);
  const [state, setState] = useState(user?.state);
  const [zip, setZip] = useState(user?.zip);
  const [country, setCountry] = useState(user?.country);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [avatar, setAvatar] = useState(user?.avatar.url);
  const [avatarPreview, setAvatarPreview] = useState(user?.avatar.url);

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { isOpen: isOpenConfirm, onOpen: onOpenConfirm, onClose: onCloseConfirm } = useDisclosure();



  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: "Passwords do not match.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    try {
      // const response = await api.put("/users", {
      //   name,
      //   email,
      //   phone,
      //   address,
      //   city,
      //   state,
      //   zip,
      //   country,
      //   password,
      // });

      toast({
        title: "Profile updated successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setLoading(false);
    } catch (err) {
      toast({
        title: "Error updating profile.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      setLoading(false);
    }
  };
  const updateProfileDataChange = (e: any) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
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
                  onClick={onOpen}>
                  Change Avatar
                </Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Change Photo</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <FormControl id="image">
                        <FormLabel>Image</FormLabel>
                        <Input
                          type="file"
                          name="avatar"
                          accept="image/*"
                          onChange={updateProfileDataChange}
                        />
                      </FormControl>
                    </ModalBody>

                    <ModalFooter>
                      <Button
                        colorScheme="teal"
                        variant="ghost"
                        onClick={() => {
                          onClose();
                          setAvatar(user?.avatar.url);
                          setAvatarPreview(user?.avatar.url);
                        }}>
                        Cancel
                      </Button>
                      <Button
                        colorScheme="teal"
                        variant="solid"
                        mr={3}
                        onClick={onClose}>
                        Save
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Flex>

              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(1, 1fr)",
                }}
                gap={6}>
                <GridItem colSpan={1}>
                  <FormControl id="name">
                    <FormLabel>Name</FormLabel>
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
                  <FormControl id="email">
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
                  <FormControl id="zip">
                    <FormLabel>Zip</FormLabel>
                    <Input
                      type="text"
                      bg={useColorModeValue("gray.50", "gray.900")}
                      name="zip"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      placeholder="Enter your zip"
                    />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={1}>

                  {/* Create button with a modal for confirm with password */}

                  <Button
                    colorScheme="teal"
                    variant="solid"
                    size="sm"
                    onClick={onOpenConfirm}>
                    Confirm
                  </Button>

                  <Modal isOpen={isOpenConfirm} onClose={onCloseConfirm}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Confirm</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <FormControl id="password">
                          <FormLabel>Password</FormLabel>
                          <Input
                            type="password"
                            name="password"
                            onChange={updateProfileDataChange}
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
                          mr={3}
                          onClick={onCloseConfirm}>
                          Save
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>


                </GridItem>

              </Grid>

            </Box>

          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
