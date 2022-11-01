import {
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";

export const SearchBarInput = () => {
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
    <InputGroup
      display={isHidden ? "none" : "flex"}
      ml={10}
      mr={10}
      w="full"
      maxW="full"
    >
      <Input
        ml={15}
        align="center"
        justify="center"
        htmlSize={50}
        width="auto"
        placeholder="Search"
        variant="filled"
        bg={useColorModeValue("gray.100", "gray.700")}
        _hover={{
          bg: useColorModeValue("gray.200", "gray.600"),
        }}
        _focus={{
          bg: useColorModeValue("grawy.200", "gray.600"),
          borderColor: useColorModeValue("gray.300", "gray.500"),
        }}
      />
      <Divider orientation="vertical" />
      <InputRightElement mr={2}>
        <SearchIcon color="gray.300" />
      </InputRightElement>
    </InputGroup>
  );
};
