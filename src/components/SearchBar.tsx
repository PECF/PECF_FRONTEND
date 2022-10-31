// import {
//   Input,
//   InputGroup,
//   InputRightElement,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { SearchIcon } from "@chakra-ui/icons";
// import React from "react";

// export const SearchBar = () => {
//   return (
//     <InputGroup
//       // display={isHidden ? "none" : "flex"}
//       ml={10}
//       mr={10}
//       w="full"
//       maxW="full"
//       minW="30%"
//     >
//       <Input
//         placeholder="Search"
//         variant="filled"
//         bg={useColorModeValue("gray.100", "gray.700")}
//         _hover={{
//           bg: useColorModeValue("gray.200", "gray.600"),
//         }}
//         _focus={{
//           bg: useColorModeValue("grawy.200", "gray.600"),
//           borderColor: useColorModeValue("gray.300", "gray.500"),
//         }}
//       />
//       <InputRightElement mr={2}>
//         <SearchIcon color="gray.300" />
//       </InputRightElement>
//     </InputGroup>
//   );
// };

import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  IconButton,
  Box,
  InputGroup,
  Input,
  useColorModeValue,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export function SearchBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("top");

  return (
    <Box justify="center">
      <IconButton
        icon={<SearchIcon />}
        variant="ghost"
        colorScheme="teal"
        onClick={onOpen}
      ></IconButton>
      <Drawer
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
        justify="center"
      >
        <DrawerOverlay />
        <DrawerContent justify="center">
          <DrawerBody justify="center">
            <InputGroup justify="center" align="center" maxW="100%">
              <Input
                justify="center"
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
              <InputRightElement mr={2}>
                <SearchIcon color="gray.300" />
              </InputRightElement>
            </InputGroup>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
