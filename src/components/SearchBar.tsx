import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import { useRecoveryData } from "../hooks/useRecoveryData";

export function SearchBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("top");
  const [search, setSearch] = useState("");
  const { products } = useRecoveryData("productList");
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filtered = products.filter((product) => {
      console.log(search);
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredProducts(filtered);
    console.log(filteredProducts);
  };

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
                placeholder="Search"
                value={search}
                onChange={handleSearch}
                justify="center"
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
                <SearchIcon
                  onClick={handleSearch}
                  as={Link}
                  to={`/products/search/${search}`}
                  color="gray.300"
                  _hover={{
                    color: useColorModeValue("gray.600", "gray.200"),
                    cursor: "pointer",
                  }}
                />
              </InputRightElement>
            </InputGroup>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

// import {
//   Input,
//   InputGroup,
//   InputRightElement,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { SearchIcon } from "@chakra-ui/icons";
// import React from "react";
//import useState from "react";

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
