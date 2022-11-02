import {
  Flex,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { companyName } from "../constant/general";
import { Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { Logged } from "./Logged";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import React from "react";
import Menu from "./Menu";
import Cart from "./Cart";
import { useRecoveryData } from "../hooks/useRecoveryData";

export function Header() {
  const { toggleColorMode } = useColorMode();
  const { userInfo } = useRecoveryData("userLogin");

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  const [isHidden, setIsHidden] = React.useState(false);
  React.useEffect(() => {
    if (width < breakpoint) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  }, [width]);

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
      justifyContent={"space-between"}>
      <Flex
        maxW="container.lg"
        mx="auto"
        alignItems={"center"}
        gap="10"
        justifyContent={"space-between"}>
        <Menu />
        <Text
          ml={9}
          textAlign={"justify"}
          align="center"
          fontSize="3xl"
          fontWeight="bold"
          letterSpacing={"wide"}
          color={useColorModeValue("gray.800", "white")}
          as={Link}
          to={"/"}>
          {companyName}
        </Text>
        <Flex>
          <Logged />
          {isHidden ? (
            <IconButton
              icon={useColorModeValue(<BsMoonFill />, <BsSunFill />)}
              colorScheme="teal"
              aria-label="Search..."
              variant="ghost"
              size="md"
              onClick={toggleColorMode}></IconButton>
          ) : null}
        </Flex>

        {userInfo ? (
          <Flex ml={-8}>
            <SearchBar />
            <Cart />
          </Flex>
        ) : (
          <SearchBar />
        )}
      </Flex>
    </Container>
  );
}
