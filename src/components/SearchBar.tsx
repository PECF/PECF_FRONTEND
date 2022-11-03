import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  //DrawerOverlay,
  DrawerContent,
  useDisclosure,
  IconButton,
  Box,
  InputGroup,
  Input,
  useColorModeValue,
  InputRightElement,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { useRecoveryData } from "../hooks/useRecoveryData";

export function SearchBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState("");
  const { products } = useRecoveryData("productList");
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
    const filtered = products.filter((product: any) => {
      console.log(search);
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredProducts(filtered);
    console.log(filteredProducts);
  };

  return (
    <Box>
      <IconButton
        aria-label="Search database"
        icon={<SearchIcon />}
        variant="ghost"
        colorScheme="teal"
        onClick={onOpen}
      ></IconButton>
      <Drawer
        placement={"top"}
        blockScrollOnMount={true}
        isOpen={isOpen}
        onClose={onClose}
      >
        <DrawerContent>
          <DrawerBody className="searchBar">
            <InputGroup maxW="100%">
              <InputLeftElement>
                <ArrowBackIcon
                  color={useColorModeValue("gray.600", "white")}
                  onClick={onClose}
                  _hover={{
                    color: useColorModeValue("gray.800", "white"),
                    cursor: "pointer",
                  }}
                  boxSize={6}
                />
              </InputLeftElement>
              <Input
                borderRadius={"999px"}
                placeholder="Search"
                value={search}
                onChange={handleSearch}
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
                  color="gray.900"
                  onClick={handleSearch}
                  as={Link}
                  to={`/products/search/${search}`}
                  _hover={{
                    color: "gray.900",
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

