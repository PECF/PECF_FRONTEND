import { ProductCard } from "../components/product/Card";
import { ProductGrid } from "../components/product/ProductGrid";

import { useRecoveryData } from "../hooks/useRecoveryData";
import {
  Box,
  Flex,
  Icon,
  Container,
  useColorModeValue,
  Text,
  IconButton,
  useDisclosure,
  Stack,
  Grid,
  Button,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { IoMan, IoShirtSharp, IoWoman } from "react-icons/io5";
import {
  GiArmoredPants,
  GiRunningShoe,
  GiHoodie,
  GiBilledCap,
  GiMonclerJacket,
  GiBracer,
  GiUnderwear,
} from "react-icons/gi";
import { GrStackOverflow } from "react-icons/gr";
import {
  useLocation,
  Link,
  useNavigation,
  useNavigate,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Categories } from "../components/Categories";

import { FaChild } from "react-icons/fa";

export default function Products() {
  const { products } = useRecoveryData("productList");
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const location = useLocation();
  const [render, setRender] = useState(true);
  const navigate = useNavigate();

  const path = location.pathname.split("/")[2];
  const pathSearchOrCategory = location.pathname.split("/")[3];

  useEffect(() => {
    if (path === undefined && location.pathname !== "/products" && render) {
      navigate("/products");
      setFilteredProducts(products);
      setRender(false);
    }
    if (path === "search") {
      if (pathSearchOrCategory && render) {
        const _search = location.pathname.split("/")[3];
        const filtered = products.filter(
          (product: {
            name: string;
            description: string;
            category: { value: string }[];
            brand: string;
          }) =>
            product.name.toLowerCase().includes(
              _search
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            ) ||
            product.description
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(
                _search
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
              ) ||
            product.category[0].value
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(
                _search
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
              ) ||
            product.brand
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(
                _search
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
              )
        );
        setFilteredProducts(filtered);
        setRender(false);
      }
    } else if (path === "category") {
      if (pathSearchOrCategory && render) {
        const filtered = products.filter(
          (product: { category: { value: string }[] }) =>
            product.category[0].value
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "") ===
            pathSearchOrCategory
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
        );
        setFilteredProducts(filtered);
        setRender(false);
      }
    } else {
      setFilteredProducts(products);
      setRender(false);
    }
  }, [products, path, location.pathname, render, pathSearchOrCategory]);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const [Categories, setCategories] = useState<any[]>([]);

  const handleFilter = (e: string) => {
    if (location.pathname.split("/")[2] !== "composeFilter") {
      navigate("/products/composeFilter");
    }
    if (Categories.includes(e)) {
      const filtered = Categories.filter((category) => category !== e);
      setCategories(filtered);
    } else {
      setCategories([...Categories, e]);
    }
  };

  const checkExistCategory = (e: string) => {
    if (Categories.includes(e)) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (Categories.length > 0) {
      const filtered = products.filter(
        (product: { category: { value: string }[] }) => {
          let flag = false;
          Categories.forEach((category) => {
            if (
              product.category[0].value
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "") ===
              category
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            ) {
              flag = true;
            }
          });
          return flag;
        }
      );

      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [Categories]);

  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container
      maxW="container.xxl"
      bg={useColorModeValue("gray.100", "gray.900")}
      minH="100vh">
      <Flex
        direction={{ base: "column", md: "row" }}
        shadow={{ md: "xl" }}
        rounded={{ md: "lg" }}>
        <Box
          w={{ base: "100%", md: "20%" }}
          h={{ base: "100%", md: "100%" }}
          bg={useColorModeValue("white", "gray.800")}
          overflow="hidden"
          mt="3vh">
          <Flex
            justify="center"
            align="center"
            direction="column"
            py={12}
            px={6}
            bg={useColorModeValue("gray.50", "gray.900")}
            w={"auto"}
            display={{ base: "flex", md: "none" }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>

          <Box
            display={{ base: "none", md: "block" }}
            py={4}
            px={6}
            bg={useColorModeValue("white", "gray.800")}
            borderBottomWidth={1}
            borderColor={useColorModeValue("gray.200", "gray.700")}>
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color={useColorModeValue("gray.600", "gray.400")}>
              Categories
            </Text>

            {Categories.length > 0 && (
              <Text
                mt={2}
                mb={4}
                fontSize="md"
                fontWeight="semibold"
                color={useColorModeValue("gray.600", "gray.400")}
                cursor="pointer"
                onClick={() => {
                  setFilteredProducts(products);
                  setCategories([]);
                }}>
                CLEAR FILTER
              </Text>
            )}

            <Flex
              mt={2}
              justify="space-between"
              align="center"
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/composeFilter"
              onClick={() => {
                setFilteredProducts(products);
              }}
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}>
              <Flex align="center">
                <Icon as={GrStackOverflow} w={5} h={5} />
                <Text ml={2} fontSize="sm">
                  All
                </Text>
              </Flex>
            </Flex>

            <Flex
              mt={2}
              justify="space-between"
              align="center"
              bg={
                checkExistCategory("shirts")
                  ? useColorModeValue("gray.100", "gray.700")
                  : useColorModeValue("white", "gray.800")
              }
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              borderRadius="md"
              as={Link}
              to="/products/composeFilter"
              onClick={() => {
                handleFilter("shirts");
              }}
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}>
              <Flex align="center">
                <Icon as={IoShirtSharp} w={5} h={5} />
                <Text ml={2} fontSize="sm">
                  Shirts
                </Text>
              </Flex>
            </Flex>

            <Flex
              mt={2}
              justify="space-between"
              align="center"
              bg={
                checkExistCategory("pants")
                  ? useColorModeValue("gray.100", "gray.700")
                  : useColorModeValue("white", "gray.800")
              }
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/composeFilter"
              onClick={() => {
                handleFilter("pants");
              }}
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}>
              <Flex align="center">
                <Icon as={GiArmoredPants} w={5} h={5} />
                <Text ml={2} fontSize="sm">
                  Pants
                </Text>
              </Flex>
            </Flex>
            <Flex
              mt={2}
              justify="space-between"
              align="center"
              bg={
                checkExistCategory("underwear")
                  ? useColorModeValue("gray.100", "gray.700")
                  : useColorModeValue("white", "gray.800")
              }
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/composeFilter"
              onClick={() => {
                handleFilter("underwear");
              }}
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}>
              <Flex align="center">
                <Icon as={GiUnderwear} w={5} h={5} />
                <Text ml={2} fontSize="sm">
                  Underwear
                </Text>
              </Flex>
            </Flex>

            <Flex
              mt={2}
              justify="space-between"
              align="center"
              bg={
                checkExistCategory("shoes")
                  ? useColorModeValue("gray.100", "gray.700")
                  : useColorModeValue("white", "gray.800")
              }
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/composeFilter"
              onClick={() => {
                handleFilter("shoes");
              }}
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}>
              <Flex align="center">
                <Icon as={GiRunningShoe} w={5} h={5} />
                <Text ml={2} fontSize="sm">
                  Shoes
                </Text>
              </Flex>
            </Flex>

            <Flex
              mt={2}
              justify="space-between"
              align="center"
              bg={
                checkExistCategory("hoodies")
                  ? useColorModeValue("gray.100", "gray.700")
                  : useColorModeValue("white", "gray.800")
              }
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/composeFilter"
              onClick={() => {
                handleFilter("hoodies");
              }}
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}>
              <Flex align="center">
                <Icon as={GiHoodie} w={5} h={5} />
                <Text ml={2} fontSize="sm">
                  Hoodies
                </Text>
              </Flex>
            </Flex>

            <Flex
              mt={2}
              justify="space-between"
              align="center"
              bg={
                checkExistCategory("caps")
                  ? useColorModeValue("gray.100", "gray.700")
                  : useColorModeValue("white", "gray.800")
              }
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/composeFilter"
              onClick={() => {
                handleFilter("caps");
              }}
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}>
              <Flex align="center">
                <Icon as={GiBilledCap} w={5} h={5} />
                <Text ml={2} fontSize="sm">
                  Caps
                </Text>
              </Flex>
            </Flex>

            <Flex
              mt={2}
              justify="space-between"
              align="center"
              bg={
                checkExistCategory("jackets")
                  ? useColorModeValue("gray.100", "gray.700")
                  : useColorModeValue("white", "gray.800")
              }
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/composeFilter"
              onClick={() => {
                handleFilter("jackets");
              }}
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}>
              <Flex align="center">
                <Icon as={GiMonclerJacket} w={5} h={5} />
                <Text ml={2} fontSize="sm">
                  Jackets
                </Text>
              </Flex>
            </Flex>

            <Flex
              mt={2}
              justify="space-between"
              align="center"
              bg={
                checkExistCategory("accesories")
                  ? useColorModeValue("gray.100", "gray.700")
                  : useColorModeValue("white", "gray.800")
              }
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/composeFilter"
              onClick={() => {
                handleFilter("accesories");
              }}
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}>
              <Flex align="center">
                <Icon as={GiBracer} w={5} h={5} />
                <Text ml={2} fontSize="sm">
                  Accesories
                </Text>
              </Flex>
            </Flex>

            <Text
              fontSize="sm"
              fontWeight="semibold"
              color={useColorModeValue("gray.600", "gray.400")}
              mt={6}>
              Genres
            </Text>
            <Flex
              mt={2}
              justify="space-between"
              align="center"
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/men"
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}>
              <Flex align="center">
                <Icon as={IoMan} w={5} h={5} />
                <Text ml={2} fontSize="sm">
                  Men
                </Text>
              </Flex>
            </Flex>

            <Flex
              mt={2}
              justify="space-between"
              align="center"
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/woman"
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}>
              <Flex align="center">
                <Icon as={IoWoman} w={5} h={5} />
                <Text ml={2} fontSize="sm">
                  Women
                </Text>
              </Flex>
            </Flex>

            <Flex
              mt={2}
              justify="space-between"
              align="center"
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/kids"
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}>
              <Flex align="center">
                <Icon as={FaChild} w={5} h={5} />
                <Text ml={2} fontSize="sm">
                  Kids
                </Text>
              </Flex>
            </Flex>
          </Box>

          {/* <Stack
            spacing={1}
            align="center"
            justify="center"
            display={{ base: isOpen ? "flex" : "none", md: "none" }}>
            <Flex
              align="center"
              px={6}
              py={3}
              cursor="pointer"
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}
              onClick={() => {
                onToggle();
              }}>
              <Text ml={4} fontWeight="medium">
                Profile
              </Text>
            </Flex>
            <Flex
              align="center"
              px={6}
              py={3}
              cursor="pointer"
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}
              onClick={() => {
                onToggle();
              }}>
              <Text ml={4} fontWeight="medium">
                Settings
              </Text>
            </Flex>

            <Flex
              align="center"
              px={6}
              py={3}
              cursor="pointer"
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}
              onClick={() => {
                onToggle();
              }}>
              <Text ml={4} fontWeight="medium">
                Orders
              </Text>
            </Flex>

            <Flex
              align="center"
              px={6}
              py={3}
              cursor="pointer"
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}
              onClick={() => {
                onToggle();
              }}>
              <Text ml={4} fontWeight="medium">
                Payment
              </Text>
            </Flex>

            <Flex
              align="center"
              px={6}
              py={3}
              cursor="pointer"
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}>
              <Text ml={4} fontWeight="medium">
                Logout
              </Text>
            </Flex>
          </Stack> */}
        </Box>

        <Box
          as="form"
          w="full"
          maxW="full"
          mx="auto"
          bg={useColorModeValue("white", "gray.700")}
          overflow="hidden"
          shadow="base">
          <VStack align="stretch" spacing={0}>
            <Flex
              justify="space-between"
              align="center"
              px={6}
              py={4}
              bg={useColorModeValue("gray.50", "gray.800")}
              borderBottomWidth="1px"></Flex>
            <Box>
              <Box
                maxW="11xl"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                mx="auto"
                px={{ base: "4", md: "8", lg: "12" }}
                py={{ base: "6", md: "8", lg: "12" }}>
                <ProductGrid>
                  {currentProducts.length === 0 ? (
                    <Box>
                      <span>
                        <Text fontSize="2xl" fontWeight="bold">
                          No products found
                        </Text>
                      </span>
                    </Box>
                  ) : (
                    currentProducts.length > 0 &&
                    currentProducts.map((product: { _id: string }) => {
                      return (
                        <ProductCard key={product._id} product={product} />
                      );
                    })
                  )}
                </ProductGrid>
              </Box>

              <Box
                pt={"30px"}
                pb="30px"
                display={"flex"}
                flexDir="column"
                justifyContent={"center"}
                alignItems="center">
                {filteredProducts.length > 10 && (
                  <Pagination
                    functionPagination={paginate}
                    productsLength={products.length}
                    productsPage={productsPerPage}
                  />
                )}
              </Box>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
}
