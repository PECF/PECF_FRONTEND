import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { companyName } from "../constant/general";
import { Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { Logged } from "./Logged";
import React from "react";

export function Header() {
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
      zIndex={1000}>
      <Flex
        minWidth="100%"
        alignItems={"center"}
        gap="10"
        justifyContent={"space-between"}>
        <Text
          fontSize="3xl"
          fontWeight="bold"
          letterSpacing={"wide"}
          color={useColorModeValue("gray.800", "white")}
          as={Link}
          ml={10}
          to={"/"}>
          {companyName}
        </Text>
        <SearchBar />
        <Logged />
      </Flex>
    </Container>
  );
}
