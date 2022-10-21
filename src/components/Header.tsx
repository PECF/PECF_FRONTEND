import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
  InputGroup,
  Avatar,
  InputRightElement,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { User } from "../types/authTypes";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Cart from "./Cart";
import Login from "./Login";
import SingUp from "./SingUp";
import { Container } from "@chakra-ui/react";
import { getUserDetails, logout } from "../redux/actions/authActions";
import { AppDispatch } from "../redux/rootStore";
import { Link } from "react-router-dom";
import { useRecoveryData } from "../hooks/useRecoveryData";

export function Header() {
  const { isOpen, onToggle } = useDisclosure();

  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });
  const { userInfo } = useRecoveryData("userLogin");
  const { user } = useRecoveryData("userDetails");

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (userInfo) {
      dispatch(getUserDetails());
    }
  }, [dispatch, userInfo]);

  //create a collapse from avatar for logout
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

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
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={onToggle}
        />

        <Text
          fontSize="2xl"
          fontWeight="bold"
          letterSpacing={"wide"}
          color={useColorModeValue("gray.800", "white")}
          as={Link}
          to={"/"}>
          Kalú
        </Text>

        {!isMobile && (
          <>
            <Box>
              <InputGroup gap="2">
                <InputRightElement
                  children={<SearchIcon color="gray.300" cursor="pointer" />}
                />
                <Input
                  placeholder="Search..."
                  width="3xl"
                  flex={100}
                  variant="filled"
                />
              </InputGroup>
            </Box>
            <Stack
              direction={"row"}
              spacing={6}
              alignItems={"center"}
              justifyContent={"center"}>
              {user ? (
                <>
                  <Text fontSize="md" fontWeight="bold" letterSpacing={"wide"}>
                    {user.name}
                  </Text>
                  <Avatar
                    size="sm"
                    name={user.name}
                    src={user.avatar}
                    onClick={handleClick}
                  />
                  <Collapse in={show} animateOpacity>
                    <Button
                      variant="ghost"
                      colorScheme="red"
                      onClick={() => {
                        dispatch(logout());
                      }}>
                      Logout
                    </Button>
                  </Collapse>
                </>
              ) : (
                <>
                  <Login />
                  <SingUp />
                </>
              )}

              <Cart />
            </Stack>
          </>
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack
          bg={useColorModeValue("white", "gray.800")}
          p={4}
          display={{ md: "none" }}>
          <Stack direction={"row"} spacing={4}>
            <Button
              w={"full"}
              variant={"outline"}
              bg={useColorModeValue("white", "gray.900")}
              _hover={{ bg: "gray.50" }}>
              Home
            </Button>
            <Button
              w={"full"}
              variant={"outline"}
              bg={useColorModeValue("white", "gray.900")}
              _hover={{ bg: "gray.50" }}>
              Products
            </Button>
            <Button
              w={"full"}
              variant={"outline"}
              bg={useColorModeValue("white", "gray.900")}
              _hover={{ bg: "gray.50" }}>
              About
            </Button>
            <Button
              w={"full"}
              variant={"outline"}
              bg={useColorModeValue("white", "gray.900")}
              _hover={{ bg: "gray.50" }}>
              Contact
            </Button>
          </Stack>
        </Stack>
      </Collapse>
    </Container>
  );
}
