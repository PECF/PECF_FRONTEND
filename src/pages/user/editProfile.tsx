import { useRecoveryData } from "../../hooks/useRecoveryData";
import React, { useState, FormEvent } from "react";
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
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

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
            </Box>
            
          <Grid templateColumns='repeat(2, 1fr)'>
            <Box p={6}>
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <FormControl id="name">
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </FormControl>
              </Grid>
            </Box>

          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
