import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { useRecoveryData } from "../hooks/useRecoveryData";
import { logout } from "../redux/actions/authActions";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IoBagCheckOutline } from "react-icons/io5";
import { AppDispatch } from "../redux/rootStore";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SingUp } from "./SingUp";
import { Login } from "./Login";
import Cart from "./Cart";
import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuList,
  Avatar,
  MenuButton,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react"
export function Logged() {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  const { userInfo } = useRecoveryData("userLogin");
  const dispatch = useDispatch<AppDispatch>();
  const send = useToast();
  const { logout } = useAuth0()

  const logoutHandler = () => {
    send({
      title: "Success",
      description: "You are logged out",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <Box>
      <Flex gap={6} alignItems="center" justifyContent="center">
        {!isAuthenticated ? (
          <>
            <Login />
            <SingUp />
          </>
        ) : (
          <>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}>
                <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
                  <Text>{user?.name}</Text>
                  <Avatar size={"sm"} src={user?.picture} />
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem as={Link} to={"/profile"}>
                  <CgProfile />
                  <Text ml="2">Profile</Text>
                </MenuItem>
                <MenuItem as={Link} to={"/orders"}>
                  <IoBagCheckOutline />
                  <Text ml="2">Orders</Text>
                </MenuItem>
                <MenuItem onClick={() => logout()}>
                  <MdLogout />
                  <Text ml="2">Log Out</Text>
                </MenuItem>
              </MenuList>
            </Menu>
            <Cart />
          </>
        )}
      </Flex>
    </Box>
  );
}
