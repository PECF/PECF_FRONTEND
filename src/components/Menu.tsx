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
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { Login } from "./Login"; //
import { SignUp } from "./SignUp"; //

export default function Acordion() {
  const { toggleColorMode } = useColorMode();
  // const text = useColorModeValue("Dark", "Light");

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
    <Box display={isHidden ? "flex" : "none"} mr={5}>
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
    </Box>
  );
}
