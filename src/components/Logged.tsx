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
import { SignUp } from "./SignUp";
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
  IconButton,
} from "@chakra-ui/react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export function Logged() {
  const { toggleColorMode } = useColorMode();

  const { user } = useRecoveryData("userDetails");
  const { userInfo } = useRecoveryData("userLogin");
  const dispatch = useDispatch<AppDispatch>();
  const send = useToast();

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
    <Box display={isHidden ? "none" : "flex"} mr={5}>
      <Flex gap={6} alignItems="center" justifyContent="center">
        {!userInfo ? (
          <>
            <Login />
            <SignUp />
            {/* <IconButton
              icon={useColorModeValue(<BsMoonFill />, <BsSunFill />)}
              colorScheme="teal"
              variant="ghost"
              size="md"
              onClick={toggleColorMode}
            ></IconButton> */}
          </>
        ) : (
          <>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
              >
                <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
                  <Text>{user?.name}</Text>
                  <Avatar size={"sm"} src={user?.avatar?.url} />
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
                <MenuItem onClick={logoutHandler}>
                  <MdLogout />
                  <Text ml="2">Log Out</Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </>
        )}
      </Flex>
    </Box>
  );
}
