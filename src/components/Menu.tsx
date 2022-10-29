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
  Flex,
  Text,
  Avatar,
  useToast,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { Login } from "./Login"; //
import { SignUp } from "./SignUp"; //
import { IoBagCheckOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/authActions";
import { Link } from "react-router-dom";
import { useRecoveryData } from "../hooks/useRecoveryData";
import Cart from "./Cart";

export default function Acordion() {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("Dark", "Light");
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
    <Box display={isHidden ? "flex" : "none"} mr={5}>
      {!userInfo ? (
        <>
          <Menu display={isHidden ? "none" : "flex"}>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem>
                <Login />
              </MenuItem>
              <MenuItem>
                <SignUp />
              </MenuItem>
              <MenuItem>
                <IconButton
                  ml={5}
                  icon={useColorModeValue(<BsMoonFill />, <BsSunFill />)}
                  colorScheme="teal"
                  variant="ghost"
                  size="md"
                  onClick={toggleColorMode}
                ></IconButton>
              </MenuItem>
            </MenuList>
            {/* <Button
          //   leftIcon={useColorModeValue(<BsMoonFill />, <BsSunFill />)}
          colorScheme="teal"
          variant="outline"
          size="md"
          pl={6}
          pr={6}
          onClick={toggleColorMode}
        >
          {text}
        </Button> */}
          </Menu>
        </>
      ) : (
        <>
          <Menu display={isHidden ? "flex" : "none"}>
            <MenuButton
              // as={Button}
              // rounded={"full"}
              // variant={"link"}
              // cursor={"pointer"}
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
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
                <IoBagCheckOutline ml={2} />
                <Text ml="2">Orders</Text>
              </MenuItem>
              <MenuItem onClick={logoutHandler}>
                <MdLogout />
                <Text ml="2">Log Out</Text>
              </MenuItem>

              <MenuItem>
                <IconButton
                  ml={-2}
                  icon={useColorModeValue(<BsMoonFill />, <BsSunFill />)}
                  colorScheme="teal"
                  variant="ghost"
                  size="sm"
                  onClick={toggleColorMode}
                ></IconButton>
                <Text>{text}</Text>
              </MenuItem>
            </MenuList>
          </Menu>
          {/* <IconButton
            ml={5}
            icon={useColorModeValue(<BsMoonFill />, <BsSunFill />)}
            colorScheme="teal"
            variant="ghost"
            size="md"
            onClick={toggleColorMode}
          ></IconButton> */}
          {/* <Cart /> */}
        </>
      )}
    </Box>
  );
}
