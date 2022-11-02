import { ProductCard } from "../components/product/Card";
import { ProductGrid } from "../components/product/ProductGrid";
import { useRecoveryData } from "../hooks/useRecoveryData";
import { Box, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination";
import { Link } from "react-router-dom";

export const Products = () => {
  const { products } = useRecoveryData("productList");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname) {
      const path = location.pathname.split("/")[2];
      if (path === "search") {
        const search = location.pathname.split("/")[3];
        const filtered = products.filter((product: { name: string }) => {
          return product.name.toLowerCase().includes(search.toLowerCase());
        });
        setFilteredProducts(filtered);
      } else {
        const category = location.pathname.split("/")[2];
        if (category === "all") {
          setFilteredProducts(products);
        } else {
          const filtered = products.filter(
            (product: { category: { value: string }[] }) => {
              return product.category[0].value.toLowerCase() === category;
            }
          );
          setFilteredProducts(filtered);
        }
      }
    }
  }, [location.pathname, products]);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (filteredProducts.length < 10 && !isLoading) {
      setProductsPerPage(filteredProducts.length);
    }
    if (filteredProducts.length > 10 && !isLoading) {
      setProductsPerPage(10);
    }
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, [filteredProducts, isLoading]);

  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const currentProduct = filteredProducts.slice(
    indexFirstProduct,
    indexLastProduct
  );
  const _Pagination = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
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
            currentPage={currentPage}
          />
        )}
      </Box>
    </Box>
  );
};
