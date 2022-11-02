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
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination";
import { Link } from "react-router-dom";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Categories } from "../components/Categories";

import { FaChild } from "react-icons/fa";

export default function Products() {
  const location = useLocation();
  const { isOpen, onToggle } = useDisclosure();
  const { products } = useRecoveryData("productList");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [categories, setCategories] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>(products);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  //filter with URL by category
  useEffect(() => {
    const path = location.pathname.split("/")[2];
    console.log(path);
    if (path === undefined) {
      setFilteredProducts(products);
    }
    if (path === "search" && path !== undefined) {
      const search = location.search.split("/")[1];

      const filtered = products.filter(
        (product: {
          name: string;
          description: string;
          category: { value: string };
          brand: string;
        }) => {
          return (
            product.name
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(
                search
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
              ) ||
            product.description
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(
                search
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
              ) ||
            product.category.value
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(
                search
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
              ) ||
            product.brand
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(
                search
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
              )
          );
        }
      );
      setFilteredProducts(filtered);
    }
    if (path !== "search" && path !== undefined && path !== "composeFilter") {
      const filtered = products.filter(
        (product: {
          name: string;
          description: string;
          category: { value: string }[];
          brand: string;
        }) => {
          return product.category[0].value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
              path
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            );
        }
      );

      setFilteredProducts(filtered);
    }
  }, [products, location]);

  const changeBgFilter = (e: string) => {
    const filter = categories.filter((category) => category === e);
    console.log(filter);
  };
  

  const handleFilter = (e: { target: { value: string } }) => {
    const filtered = products.filter(
      (product: { category: { value: string }[] }) => {
        return product.category[0].value
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      }
    );

    const filteredCategories = filtered.filter(
      (product: { category: { value: string }[] }) => {
        return !categories.includes(product.category[0].value);
      }
    );

    setCategories([...categories, ...filteredCategories]);
    setFilteredProducts(filtered);
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
            {categories.length > 0 && (
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
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              borderRadius="md"
              as={Link}
              to="/products/composeFilter"
              onClick={() => {
                handleFilter({ target: { value: "shirts" } });
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
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/composeFilter"
              onClick={() => {
                handleFilter({ target: { value: "pants" } });
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
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/composeFilter"
              onClick={() => {
                handleFilter({ target: { value: "underwear" } });
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
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/composeFilter"
              onClick={() => {
                handleFilter({ target: { value: "shoes" } });
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
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/composeFilter"
              onClick={() => {
                handleFilter({ target: { value: "hoodies" } });
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
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/composeFilter"
              onClick={() => {
                handleFilter({ target: { value: "caps" } });
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
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/composeFilter"
              onClick={() => {
                handleFilter({ target: { value: "jackets" } });
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
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/products/composeFilter"
              onClick={() => {
                handleFilter({ target: { value: "accesories" } });
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
            {currentProducts.length > 10 && (
              <Pagination
                functionPagination={paginate}
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

//   return (

//   );
// }

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
