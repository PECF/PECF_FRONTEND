import React, { useState } from "react";
import {
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
  IconButton,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  useBreakpointValue,
} from "@chakra-ui/react";

import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";
import { companyName } from "../constant/general";

import Cart from "./Cart";
import Menu from "./Menu";
import { SearchBar } from "./SearchBar";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

import { useRecoveryData } from "../hooks/useRecoveryData";
import { Link } from "react-router-dom";

export default function Header() {
  const { products } = useRecoveryData("productList");
  //sconst { wishlistItems } = useRecoveryData("wishlist");
  const { userInfo } = useRecoveryData("userLogin");


  const [filteredProducts, setFilteredProducts] = React.useState(products);
  const [search, setSearch] = useState("");
  const { toggleColorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });
  
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
    <>
      {isMobile ? (
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          padding="1rem"
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          boxShadow="md"
        >
          <Box>
            <Menu />
          </Box>
          <Flex align="center" mr={5}>
            <Text
              ml={10}
              textAlign={"justify"}
              align="center"
              fontSize="3xl"
              fontWeight="bold"
              letterSpacing={"wide"}
              color={useColorModeValue("gray.800", "white")}
              as={Link}
              to={"/"}
            >
              {companyName}
            </Text>
          </Flex>
          <Box>
            <IconButton
              gap={6}
              className="Wishlist"
              as={Link}
              to="/wishlist"
              aria-label="Wishlist"
              icon={<MdFavorite />}
              variant="ghost"
              colorScheme="teal"
            />
            <IconButton
              gap={6}
              aria-label="SearchBar"
              icon={<SearchBar />}
              variant="ghost"
              colorScheme="teal"
            />
            <IconButton
              gap={6}
              aria-label="Cart"
              icon={<Cart />}
              variant="ghost"
              colorScheme="teal"
            />
          </Box>
        </Flex>
      ) : (
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          padding="0.5rem"
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          boxShadow="md"
        >
          <Flex align="center" mr={5}>
            <Text
              ml={10}
              textAlign={"justify"}
              align="center"
              fontSize="3xl"
              fontWeight="bold"
              letterSpacing={"wide"}
              color={useColorModeValue("gray.800", "white")}
              as={Link}
              to={"/"}
            >
              {companyName}
            </Text>
          </Flex>
          <Box>
            <InputGroup>
              <Input
                type="text"
                borderRadius={"999px"}
                maxWidth={"560px"}
                width={{ base: "100%", xl: "560px" }}
                placeholder="Search"
                value={search}
                onChange={handleSearch}
                variant="filled"
                overflow={"hidden"}
                bg={useColorModeValue("gray.100", "gray.700")}
                _hover={{
                  bg: useColorModeValue("gray.200", "gray.600"),
                }}
                _focus={{
                  bg: useColorModeValue("gray.200", "gray.600"),
                  borderColor: useColorModeValue("gray.300", "gray.500"),
                }}
              />
              <InputRightElement mr={2} height={"100%"}>
                <IconButton
                  overflow={"hidden"}
                  aria-label="SearchBar"
                  icon={<BiSearch />}
                  color="gray.900"
                  variant="ghost"
                  colorScheme="teal"
                  onClick={handleSearch}
                  as={Link}
                  to={`/products/search/${search}`}
                  _hover={{
                    color: "gray.900",
                    cursor: "pointer",
                  }}
                  _focus={{
                    bg: useColorModeValue("gray.200", "gray.600"),
                    borderColor: useColorModeValue("gray.300", "gray.500"),
                  }}
                />
              </InputRightElement>
            </InputGroup>
          </Box>
          <Box>
            {!userInfo ? (
              <>
               <IconButton onClick={toggleColorMode}
                  ml={-2}
                  icon={useColorModeValue(<BsMoonFill />, <BsSunFill />)}
                  colorScheme="teal"
                  variant="ghost"
                  size="sm"
                  aria-label={""}
                ></IconButton>
                <IconButton aria-label="Login" variant={"ghost"} ml={3}>
                  <Login />
                </IconButton>
                <IconButton aria-label="SingUp" variant={"ghost"} mr={3}>
                  <SignUp />
                </IconButton>
              </>
            ) : (
              <>
                <IconButton
                  mr={3}
                  className="Wishlist"
                  as={Link}
                  to="/wishlist"
                  aria-label="Wishlist"
                  icon={<MdFavorite />}
                  variant="ghost"
                  colorScheme="teal"
                >
                  {/* {wishlistItems.length} */}
                </IconButton>
                <IconButton aria-label="Search database" variant="ghost">
                  <Menu />
                </IconButton>
                <IconButton
                  mr={4}
                  aria-label="Search database"
                  icon={<Cart />}
                  variant="ghost"
                  colorScheme="teal"
                />
              </>
            )}
          </Box>
        </Flex>
      )}
    </>
  );
}
