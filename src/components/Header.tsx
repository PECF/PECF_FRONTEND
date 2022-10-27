import {
  Flex,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { companyName } from "../constant/general";
import { Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { Logged } from "./Logged";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import React from "react";
import Menu from "./Menu";

export function Header() {
  const { toggleColorMode } = useColorMode();

  return (
    <Container
      maxW="full"
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.600", "white")}
      px={4}
      py={4}
      shadow="md"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      justifyContent={"space-between"}
    >
      <Flex
        maxW="container.lg"
        mx="auto"
        alignItems={"center"}
        gap="10"
        justifyContent={"space-between"}
      >
        <Menu />
        <Text
          justify="center"
          fontSize="3xl"
          fontWeight="bold"
          letterSpacing={"wide"}
          color={useColorModeValue("gray.800", "white")}
          as={Link}
          to={"/"}
        >
          {companyName}
        </Text>
        {/* <IconButton
          icon={useColorModeValue(<BsMoonFill />, <BsSunFill />)}
          colorScheme="teal"
          variant="ghost"
          size="md"
          onClick={toggleColorMode}
        ></IconButton> */}
        <Logged />
        <SearchBar />
        {/* <Button
          leftIcon={<SwitchIcon />}
          colorScheme="teal"
          variant="outline"
          size="sm"
          mr={2}
          onClick={toggleColorMode}>
          {text}
        </Button> */}
      </Flex>
    </Container>
  );
}
