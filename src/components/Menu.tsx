import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorModeValue,
  useColorMode,
  Box,
  Text,
  Avatar,
  useToast,
  useBreakpointValue,
  Flex,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import Login from "./Login"; //
import SignUp from "./SignUp"; //
import { IoBagCheckOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/authActions";
import { Link } from "react-router-dom";
import { useRecoveryData } from "../hooks/useRecoveryData";
import { AppDispatch } from "../redux/rootStore";

export default function Acordion() {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("Dark", "Light");
  const { user } = useRecoveryData("userDetails");
  const { userInfo } = useRecoveryData("userLogin");
  const dispatch = useDispatch<AppDispatch>();
  const send = useToast();

  const logoutHandler = () => {
    dispatch(logout());
    send({
      title: "Success",
      description: "You are logged out",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box display={"flex"}>
      {!userInfo ? (
        <>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem /* as={Link} to={"/login"} */>
                <Login />
              </MenuItem>
              <MenuItem /* as={Link} to={"/register"} */>
                <SignUp />
              </MenuItem>
              <MenuItem onClick={toggleColorMode}>
                <IconButton
                  ml={5}
                  icon={useColorModeValue(<BsMoonFill />, <BsSunFill />)}
                  colorScheme="teal"
                  variant="ghost"
                  size="md"
                  aria-label={""}></IconButton>
              </MenuItem>
            </MenuList>
          </Menu>
        </>
      ) : (
        <>
          <Menu>
            {useBreakpointValue({ base: false, md: true }) ? (
              <MenuButton aria-label="Options" cursor={"pointer"}>
                <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
                  <Avatar size={"sm"} src={user?.avatar?.url} />
                </Flex>
              </MenuButton>
            ) : (
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
            )}
            <MenuList>
              <MenuItem as={Link} to={"/profile"}>
                <Avatar size={"xs"} src={user?.avatar?.url} />
                <Text ml="2">Profile</Text>
              </MenuItem>
              <MenuItem as={Link} to={"/orders"}>
                <IoBagCheckOutline />
                <Text ml="2">Orders</Text>
              </MenuItem>
              <MenuItem onClick={logoutHandler}>
                <MdLogout />
                <Text ml="2">Log Out</Text>
              </MenuItem>

              <MenuItem onClick={toggleColorMode}>
                <IconButton
                  ml={-2}
                  icon={useColorModeValue(<BsMoonFill />, <BsSunFill />)}
                  colorScheme="teal"
                  variant="ghost"
                  size="sm"
                  aria-label={""}></IconButton>
                <Text>{text}</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </>
      )}
    </Box>
  );
}
