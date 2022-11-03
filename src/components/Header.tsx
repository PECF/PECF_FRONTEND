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
    e.preventDefault();
    navigate(`/products/search/${search}`);
  };

  return (
    <>
      {isMobile && (
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          padding="1rem"
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          boxShadow="md">
          <Menu />
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
          <Grid templateColumns="repeat(3, 1fr)">
            {/* <IconButton
              gap={6}
              className="Wishlist"
              as={Link}
              to="/wishlist"
              aria-label="Wishlist"
              icon={<MdFavorite />}
              variant="ghost"
              colorScheme="teal"
            /> */}
            <SearchBar />
            <Cart />
          </Grid>
        </Flex>
      )}

      {!isMobile && (
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
          <Flex>
            <FormControl id="search">
              <InputGroup>
                <Input
                  type="text"
                  borderRadius={"999px"}
                  width={{ base: "100%", xl: "560px" }}
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  variant="filled"
                  overflow={"hidden"}
                />
                <InputRightElement>
                  <Button
                    type="submit"
                    onClick={handleSearch}
                    colorScheme="teal"
                    overflow={"hidden"}
                    borderRadius={"999px"}
                    size="base"
                    variant="ghost"
                    aria-label="searchButton">
                    <BiSearch />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </Flex>
          <Box>
            {!userInfo ? (
              <Grid templateColumns="1fr 2fr 2fr" gap={2}>
                <Button
                  onClick={toggleColorMode}
                  width="100%"
                  colorScheme="teal"
                  variant="ghost"
                  aria-label="colorMode"
                  size="md">
                  {isMobile ? <BsMoonFill /> : <BsSunFill />}
                </Button>
                <Login />
                <SignUp />
              </Grid>
            ) : (
              <Grid templateColumns={"repeat(3, 1fr)"} gap={3}>
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

                // <IconButton
                //   className="Wishlist"
                //   as={Link}
                //   to="/wishlist"
                //   aria-label="Wishlist"
                //   icon={<MdFavorite />}
                //   variant="ghost"
                //   colorScheme="teal">
                //   {/* {wishlistItems.length} */}
                // </IconButton>