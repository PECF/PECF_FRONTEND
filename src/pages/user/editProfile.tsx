import { useRecoveryData } from "../../hooks/useRecoveryData";
import React, { useState, FormEvent } from "react";
import {
  useToast,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
  useDisclosure,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Heading,
  Grid,
  Box,
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

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      w="full"
      mt={8}
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
          bg={useColorModeValue("gray.50", "gray.900")}>
          <Heading fontSize="xl">Edit Profile</Heading>
        </Flex>

        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={6}
          px={6}
          py={4}>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <FormControl id="email" mt={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl id="phone" mt={4}>
            <FormLabel>Phone</FormLabel>
            <Input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>

          <FormControl id="address" mt={4}>
            <FormLabel>Address</FormLabel>
            <Input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormControl>

          <FormControl id="city" mt={4}>
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </FormControl>

          <FormControl id="state" mt={4}>
            <FormLabel>State</FormLabel>
            <Input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </FormControl>

          <FormControl id="zip" mt={4}>
            <FormLabel>Zip</FormLabel>
            <Input
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </FormControl>

          <FormControl id="country" mt={4}>
            <FormLabel>Country</FormLabel>
            <Input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </FormControl>
        </Grid>
        <VStack align="center" spacing={0}>
          <Button
            colorScheme="teal"
            variant="solid"
            size="lg"
            fontSize="md"
            mt={6}
            mb={6}
            mx={6}
            width="lg"
            onClick={onOpen}>
            Update Profile
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Update Profile</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input
                    placeholder="Enter your password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input
                    placeholder="Confirm your password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="teal"
                  variant="solid"
                  mr={3}
                  onClick={onClose}>
                  Close
                </Button>
                <Button type="submit" colorScheme="teal" variant="solid">
                  Update Profile
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </VStack>
      </VStack>
    </Box>
  );
}
