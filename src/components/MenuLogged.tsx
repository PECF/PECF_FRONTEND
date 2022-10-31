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
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { useRecoveryData } from "../hooks/useRecoveryData";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function MenuLogged() {
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
    <Box display={isHidden ? "none" : "flex"}>
      <Menu display={isHidden ? "none" : "flex"}>
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
    </Box>
  );
}
