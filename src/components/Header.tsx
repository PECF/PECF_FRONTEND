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
  Grid,
  FormControl,
} from "@chakra-ui/react";

import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";
import { companyName } from "../constant/general";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import Menu from "./Menu";
import { SearchBar } from "./SearchBar";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

import { useRecoveryData } from "../hooks/useRecoveryData";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function Header() {
  //sconst { wishlistItems } = useRecoveryData("wishlist");
  const { userInfo } = useRecoveryData("userLogin");
  const { toggleColorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e: any) => {
    console.log(e);
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
          boxShadow="md">
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
              to={"/"}>
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
          boxShadow="md">
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
              to={"/"}>
              {companyName}
            </Text>
          </Flex>
          <Box as="form">
            <FormControl id="search">
              <InputGroup>
                <Input
                  type="text"
                  borderRadius={"999px"}
                  maxWidth={"560px"}
                  width={{ base: "100%", xl: "560px" }}
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
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
                    aria-label="SearchBarButton"
                    type="submit"
                    icon={<BiSearch />}
                    color={useColorModeValue("gray.500", "gray.200")}
                    colorScheme="none"
                    onClick={() => navigate(`/products/search/${search}`)}
                    as={Link}
                    to={`/products/search/${search}`}
                    _focus={{
                      boxShadow: "none",
                    }}  
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </Box>
          <Box>
            {!userInfo ? (
              <>
                <IconButton
                  onClick={toggleColorMode}
                  ml={-2}
                  icon={useColorModeValue(<BsMoonFill />, <BsSunFill />)}
                  colorScheme="teal"
                  variant="ghost"
                  size="sm"
                  aria-label={""}></IconButton>
                <IconButton aria-label="Login" variant={"ghost"} ml={3}>
                  <Login />
                </IconButton>
                <IconButton aria-label="SingUp" variant={"ghost"} mr={3}>
                  <SignUp />
                </IconButton>
              </>
            ) : (
              <Grid templateColumns={"repeat(3, 1fr)"} gap={3}>
                <IconButton
                  className="Wishlist"
                  as={Link}
                  to="/wishlist"
                  aria-label="Wishlist"
                  icon={<MdFavorite />}
                  variant="ghost"
                  colorScheme="teal">
                  {/* {wishlistItems.length} */}
                </IconButton>
                <Cart />
                <Menu />
              </Grid>
            )}
          </Box>
        </Flex>
      )}
    </>
  );
}
