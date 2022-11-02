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
  useToast,
  Stack,
} from "@chakra-ui/react";
import { IoMan, IoShirtSharp, IoWoman } from "react-icons/io5";
import {
  GiArmoredPants,
  GiUnderwearShorts,
  GiRunningShoe,
  GiHoodie,
  GiBilledCap,
  GiMonclerJacket,
  GiBracer,
  GiSocks,
  GiUnderwear,
  GiHoodedFigure,
} from "react-icons/gi";
import { GrStackOverflow } from "react-icons/gr";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination";
import { Link } from "react-router-dom";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Categories } from "../components/Categories";
import {
  FiUser,
  FiSettings,
  FiShoppingCart,
  FiCreditCard,
  FiLogOut,
} from "react-icons/fi";
import { FaChild } from "react-icons/fa";

export default function Products() {
  const location = useLocation();
  const { isOpen, onToggle } = useDisclosure();
  const { products } = useRecoveryData("productList");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [categories, setCategories] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [render, setRender] = useState(true);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const filterProducts = (category: string) => {
    const filtered = products.filter((product: { category: string; }) => {
      return product.category === category;
    });
    setFilteredProducts(filtered);
    setRender(!render);
  };

  const filterAllProducts = () => {
    setFilteredProducts(products);
    setRender(!render);
  };

  useEffect(() => {
    const categories = products.map((product: { category: string; }) => {
      return product.category;
    });
    const uniqueCategories = [...new Set(categories)];
    setCategories(uniqueCategories);
  }, [products]);
  
    
  useEffect(() => {
    if (filteredProducts.length < 10) {
      setProductsPerPage(filteredProducts.length);
    }
    if (filteredProducts.length > 10) {
      setProductsPerPage(10);
    }
  }, [filteredProducts]);

  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const currentProduct =
    filteredProducts.slice(indexFirstProduct, indexLastProduct) || products;
  const _Pagination = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleFilter = (e: { target: { value: string } }) => {
    const filtered = products.filter(
      (product: { category: { value: string }[] }) => {
        return product.category[0].value
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      }
    );
    setCategories((oldArray) => [...oldArray, filtered]);
    const newFilter = filtered.concat(...categories);
    setFilteredProducts(newFilter);
  };

  return (
    <Container
      maxW="container.xxl"
      bg={useColorModeValue("gray.100", "gray.900")}
      minH="100vh"
      mt="8vh">
      <Flex
        direction={{ base: "column", md: "row" }}
        shadow={{ md: "xl" }}
        rounded={{ md: "lg" }}>
        <Box
          w={{ base: "100%", md: "20%" }}
          h={{ base: "100%", md: "100%" }}
          bg={useColorModeValue("white", "gray.800")}
          overflow="hidden">
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

            <Flex
              mt={2}
              justify="space-between"
              align="center"
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/all"
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
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/shirts"
              borderRadius="md"
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
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/pants"
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
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/underwear"
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
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/shoes"
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
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/hoodies"
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
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/caps"
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
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/jackets"
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
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/accesories"
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

          <Stack
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
          </Stack>
        </Box>

        <Box mt="82">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            mx="auto"
            px={{ base: "4", md: "8", lg: "12" }}
            py={{ base: "6", md: "8", lg: "12" }}>
            <ProductGrid>
              {currentProduct.length === 0 ? (
                <Box>
                  <span>
                    <Text fontSize="2xl" fontWeight="bold">
                      No products found
                    </Text>
                  </span>
                </Box>
              ) : (
                currentProduct.length > 0 &&
                currentProduct.map((product: { _id: string }) => {
                  return <ProductCard key={product._id} product={product} />;
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
                functionPagination={_Pagination}
                productsLength={products.length}
                productsPage={productsPerPage}
              />
            )}
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

/* 
          </Box>

          <Stack
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
              <Icon as={FiUser} w={5} h={5} />
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
              <Icon as={FiSettings} w={5} h={5} />
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
              <Icon as={FiShoppingCart} w={5} h={5} />
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
              <Icon as={FiCreditCard} w={5} h={5} />
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
              <Icon as={FiLogOut} w={5} h={5} />
              <Text ml={4} fontWeight="medium">
                Logout
              </Text>
            </Flex>
          </Stack>
        </Box>




        <Box mt="82">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            mx="auto"
            px={{ base: "4", md: "8", lg: "12" }}
            py={{ base: "6", md: "8", lg: "12" }}>
            <ProductGrid>
              {currentProduct.length === 0 && isLoading === true ? (
                <Text>Loading</Text>
              ) : currentProduct.length === 0 && isLoading === false ? (
                <Box>
                  <span>
                    <Text fontSize="2xl" fontWeight="bold">
                      No products found
                    </Text>
                  </span>
                </Box>
              ) : (
                currentProduct.length > 0 &&
                currentProduct.map((product: { _id: string }) => {
                  return <ProductCard key={product._id} product={product} />;
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
                functionPagination={_Pagination}
                productsLength={products.length}
                productsPage={productsPerPage}
              />
            )}
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}; */

{
  /* 
        </Box>

        <Box mt="82">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            mx="auto"
            px={{ base: "4", md: "8", lg: "12" }}
            py={{ base: "6", md: "8", lg: "12" }}>
            <ProductGrid>
              {currentProduct.length === 0 && isLoading === true ? (
                <Text>Loading</Text>
              ) : currentProduct.length === 0 && isLoading === false ? (
                <Box>
                  <span>
                    <Text fontSize="2xl" fontWeight="bold">
                      No products found
                    </Text>
                  </span>
                </Box>
              ) : (
                currentProduct.length > 0 &&
                currentProduct.map((product: { _id: string }) => {
                  return <ProductCard key={product._id} product={product} />;
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
                functionPagination={_Pagination}
                productsLength={products.length}
                productsPage={productsPerPage}
              />
            )}
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}; */
}
