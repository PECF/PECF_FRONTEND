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
  VStack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Spacer,
  Menu,
  Button,
  MenuButton,
  MenuItem,
  MenuList,
  Grid,
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

import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { FaChild } from "react-icons/fa";

export default function Products() {
  const { products } = useRecoveryData("productList");

  const navigate = useNavigate();
  const location = useLocation();

  const [Categories, setCategories] = useState<any[]>([]);
  const [Tags, setTags] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [priceFilterProducts, setPriceFilterProducts] = useState<any[]>([]);
  const [currentProducts, setCurrentProducts] = useState<any[]>([]);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState([0, 50]);
  const handleFilter = (e: string, type: string) => {
    if (location.pathname.split("/")[2] !== "composeFilter") {
      navigate("/products/composeFilter");
    }
    if (Categories.includes(e) && type === "category") {
      const filtered = Categories.filter((category) => category !== e);
      setCategories(filtered);
    } else {
      setCategories([...Categories, e]);
    }

    if (Tags.includes(e) && type === "tag") {
      const filtered = Tags.filter((tag) => tag !== e);
      setTags(filtered);
    } else {
      setTags([...Tags, e]);
    }
  };

  const checkExistCategory = (e: string) => {
    if (Categories.includes(e)) {
      return true;
    } else {
      return false;
    }
  };
  const checkExistTags = (e: string) => {
    if (Tags.includes(e)) {
      return true;
    } else {
      return false;
    }
  };

  const path = location.pathname.split("/")[2];
  const pathSearchOrCategory = location.pathname
    .split("/")[3]
    ?.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  useEffect(() => {
    if (path === "search") {
      const filtered = products.filter(
        (product: {
          name: string;
          description: string;
          category: { value: string }[];
          brand: string;
        }) =>
          product.name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(pathSearchOrCategory) ||
          product.description
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(pathSearchOrCategory) ||
          product.category
            .map((category) => category.value)
            .join("")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(pathSearchOrCategory) ||
          product.brand
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(pathSearchOrCategory)
      );
      setFilteredProducts(filtered);
    } else if (path === "category") {
      const filtered = products.filter(
        (product: { category: { value: string }[] }) =>
          product.category[0].value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(pathSearchOrCategory)
      );
      setFilteredProducts(filtered);
    } else if (path === "composeFilter") {
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
      } else if (Categories.length === 0 && path === "composeFilter") {
        setFilteredProducts(products);
      }

      if (Tags.length > 0) {
        const filtered = products.filter(
          (product: { tag: { value: string }[] }) => {
            let flag = false;
            Tags.forEach((tag) => {
              product.tag.forEach((productTag) => {
                if (
                  productTag.value
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "") ===
                  tag
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                ) {
                  flag = true;
                }
              });
            });
            return flag;
          }
        );

        setFilteredProducts(filtered);
      } else if (Tags.length === 0 && path === "composeFilter") {
        setFilteredProducts(products);
      }
    } else {
      setFilteredProducts(products);
    }
  }, [path, pathSearchOrCategory, products, Categories]);

  useEffect(() => {
    if (
      priceFilterProducts.length < 8 &&
      productsPerPage !== priceFilterProducts.length
    ) {
      setProductsPerPage(priceFilterProducts.length);
    }
    if (priceFilterProducts.length > 8 && productsPerPage !== 8) {
      setProductsPerPage(8);
    }
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = priceFilterProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
    setCurrentProducts(currentProducts);
  }, [priceFilterProducts, currentPage, productsPerPage]);

  const CleanAndRedirect = () => {
    setCategories([]);
    navigate("/products");
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const arrayTest = [0, 50];
    if (value[0] !== arrayTest[0] || value[1] !== arrayTest[1]) {
      const filtered = filteredProducts.filter(
        (product: { price: number }) =>
          product.price >= value[0] && product.price <= value[1]
      );
      setPriceFilterProducts(filtered);
    } else {
      setPriceFilterProducts(filteredProducts);
    }
  }, [value, filteredProducts]);

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
          overflow="hidden">
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
              color={useColorModeValue("gray.600", "gray.400")}
              mb={2}>
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
                  CleanAndRedirect();
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
              onClick={() => {
                CleanAndRedirect();
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
                handleFilter("shirts", "category");
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
                handleFilter("pants", "category");
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
                handleFilter("underwear", "category");
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
                handleFilter("shoes", "category");
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
                handleFilter("hoodies", "category");
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
                handleFilter("caps", "category");
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
                handleFilter("jackets", "category");
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
                handleFilter("accesories", "category");
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
              to="/products/composeFilter"
              onClick={() => {
                handleFilter("men", "tag");
              }}
              borderRadius="md"
              bg={
                checkExistTags("men")
                  ? useColorModeValue("gray.100", "gray.700")
                  : useColorModeValue("white", "gray.800")
              }
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
              bg={
                checkExistTags("women")
                  ? useColorModeValue("gray.100", "gray.700")
                  : useColorModeValue("white", "gray.800")
              }
              to="/products/composeFilter"
              onClick={() => {
                handleFilter("women", "tag");
              }}
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
              bg={
                checkExistTags("kids")
                  ? useColorModeValue("gray.100", "gray.700")
                  : useColorModeValue("white", "gray.800")
              }
              to="/products/composeFilter"
              onClick={() => {
                handleFilter("kids", "tag");
              }}
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
          <Grid templateColumns={"repeat(1, 1fr)"} gap={6} m={6}>
            <RangeSlider
              min={0}
              max={50}
              step={1}
              value={value}
              onChange={setValue}
              colorScheme="teal">
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>

            <Text fontSize="sm" fontWeight="semibold" w={"full"}>
              {value[0]} - {value[1]}$
            </Text>
          </Grid>
        </Box>

        <Box
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
                <Pagination
                  totalProducts={filteredProducts.length}
                  productsPerPage={productsPerPage}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </Box>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
}
