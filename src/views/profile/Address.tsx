import React, { useRef, useState } from "react";
import {
  Heading,
  Box,
  Center,
  Stack,
  Button,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Input,
  FormControl,
  FormLabel,
  Select,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
import { provincias } from "./provincias";
import {
  chooseWhere,
  addAddress,
  fullName,
  phoneNumber,
  zipCode,
  cityOrState,
  street,
  houseNumber,
  aptFloor,
  instructions,
  cancel,
  save,
} from "./constantsAdress";

export default function Address() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [size, setSize] = useState("lg");
  const [input, setInput] = useState({
    fullName: "",
    phoneNumber: "",
    zipCode: "",
    cityOrState: "",
    street: "",
    houseNumber: "",
    aptFloor: "",
    instructions: "",
  });

  return (
    <Center py={6}>
      <Box
        maxW={"820px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Heading
          color="teal"
          fontSize={"2xl"}
          fontFamily={"body"}
          fontWeight="semibold"
        >
          {chooseWhere}
        </Heading>
        <Box p="50px">
          <Button ref={btnRef} onClick={onOpen}>
            {addAddress}
          </Button>
          <Drawer onClose={onClose} isOpen={isOpen} size={size}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader fontSize="2xl" color="teal">
                {addAddress}
              </DrawerHeader>
              <DrawerBody>
                <SimpleGrid direction={"row"} spacing={4}>
                  <FormControl>
                    <FormLabel htmlFor="fname">{fullName}</FormLabel>
                    <Input
                      name="fullName"
                      value={input.fullName}
                      placeholder="full name"
                    />
                    <FormLabel mt="15px" htmlFor="pnumber">
                      {phoneNumber}
                    </FormLabel>
                    <Input
                      name="phoneNumber"
                      value={input.phoneNumber}
                      placeholder="phone number"
                    />
                    <FormLabel mt="15px" htmlFor="zcode">
                      {zipCode}
                    </FormLabel>
                    <Input
                      name="zipCode"
                      value={input.zipCode}
                      placeholder="zip code"
                    />
                    <FormLabel mt="15px" htmlFor="city">
                      {cityOrState}
                    </FormLabel>
                    <Select placeholder="Select your city or state">
                      {provincias?.map((p) => {
                        return (
                          <option value={p.nombre} key={p.nombre}>
                            {p.nombre}
                          </option>
                        );
                      })}
                    </Select>
                    <FormLabel mt="15px" htmlFor="street">
                      {street}
                    </FormLabel>
                    <Input
                      name="street"
                      value={input.street}
                      placeholder="street"
                    />
                    <FormLabel mt="15px" htmlFor="hnumber">
                      {houseNumber}
                    </FormLabel>
                    <Input
                      name="houseNumber"
                      value={input.houseNumber}
                      placeholder="house number"
                    />
                    <FormLabel mt="15px" htmlFor="apt">
                      {aptFloor}
                    </FormLabel>
                    <Input
                      name="aptFloor"
                      value={input.aptFloor}
                      placeholder="apt/floor"
                    />
                    <FormLabel mt="15px" htmlFor="instructions">
                      {instructions}
                    </FormLabel>
                    <Textarea
                      value={input.instructions}
                      maxlength="128"
                      placeholder="reference points, safety instructions, etc. (max 128 characters)"
                    />
                  </FormControl>
                </SimpleGrid>
              </DrawerBody>
              <Stack mt={8} direction={"row"} spacing={4}>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  _focus={{
                    bg: "gray.200",
                  }}
                >
                  {cancel}
                </Button>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"teal.400"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "teal.500",
                  }}
                  _focus={{
                    bg: "teal.500",
                  }}
                >
                  {save}
                </Button>
              </Stack>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
    </Center>
  );
}
