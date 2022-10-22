import { Login } from "./Login";
import SingUp from "./SingUp";
import Cart from "./Cart";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/authActions";
import { Link } from "react-router-dom";

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
  Menu,
  MenuList,
  Spacer,
  InputGroup,
  Avatar,
  MenuButton,
  InputRightElement,
  MenuItem,
  Grid,
} from "@chakra-ui/react";

import {
  HamburgerIcon,
  CloseIcon,
  SearchIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { useRecoveryData } from "../hooks/useRecoveryData";
import { AppDispatch } from "../redux/rootStore";
import React, { useEffect } from "react";
import { MdLogout } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
export function Logged() {
  const { userInfo } = useRecoveryData("userLogin");
  const { user } = useRecoveryData("userDetails");
  const dispatch = useDispatch<AppDispatch>();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Box>
      {userInfo ? (
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              as={Button}
              variant="link"
              border="none"
              color="blackAlpha.900"
              gap="10"
              marginX="5">
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                width={"full"}
                _hover={{
                  textDecoration: "none",
                }}>
                <Text
                  fontWeight={600}
                  fontSize={"lg"}
                  color={useColorModeValue("gray.600", "gray.200")}>
                  {user?.name.toUpperCase() || "USER"}
                </Text>
                <Avatar ml="2" size="sm" src={user?.avatar.url} />
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <CgProfile />
                <Text ml="2" as={Link} to={"/profile"}>
                  Profile
                </Text>
              </MenuItem>
              <MenuItem>
                <IoBagCheckOutline />
                <Text ml="2" as={Link} to={"/orders"}>
                  Orders
                </Text>
              </MenuItem>
              <MenuItem onClick={logoutHandler}>
                <MdLogout />
                <Text ml="2">Log Out</Text>
              </MenuItem>
            </MenuList>
          </Menu>
          <Cart />
        </Flex>
      ) : (
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={6}
          alignItems="center"
          justifyContent="center">
          <Login />
          <SingUp />
          <Cart />
        </Grid>
      )}
    </Box>
  );
}
{
  /* if (!userInfo) {
    return (
      <>
        <Login />
        <SingUp />
      </>
    );
  } else {
    return (
      <>
        <Cart />
        <Avatar size="sm" />
        <Text>{userInfo.name}</Text>
        <Button
        // onClick={() => {
        //   dispatch(logout());
        // }}
        >
          Logout
        </Button>
      </>
    );
  }
} */
}
