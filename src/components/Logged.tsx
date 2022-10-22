import { useRecoveryData } from "../hooks/useRecoveryData";
import { logout } from "../redux/actions/authActions";
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
  useColorModeValue,
  Menu,
  MenuList,
  Avatar,
  MenuButton,
  MenuItem,
  Grid,
} from "@chakra-ui/react";

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
