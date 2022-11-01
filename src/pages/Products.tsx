import { ProductCard } from "../components/product/ProductCard";
import { ProductGrid } from "../components/product/ProductGrid";
import { useRecoveryData } from "../hooks/useRecoveryData";
import { Box, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {Pagination} from '../components/Pagination'
import { Link } from 'react-router-dom'

export const Products = () => {
  const { products } = useRecoveryData("productList");
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (location.pathname) {
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
  }, [location.pathname, products]);


  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(20);
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    if (filteredProducts.length < 15 && !isLoading) {
      setProductsPerPage(filteredProducts.length);
    }
    if (filteredProducts.length > 15 && !isLoading) {
      setProductsPerPage(15);
    }
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, [filteredProducts.length, isLoading]);

  const indexOfLastGame = currentPage * productsPerPage;
  const indexOfFirstGame = indexOfLastGame - productsPerPage;
  const currentProduct = products.slice(indexOfFirstGame, indexOfLastGame);
  const _Pagination = (pageNumber:any) => setCurrentPage(pageNumber);

  return (
    

    <Box mt="82">
         <Box
          maxW="7xl"
          mx="auto"
          px={{ base: '4', md: '8', lg: '12' }}
          py={{ base: '6', md: '8', lg: '12' }}
        >

        <ProductGrid className="home_container_content_games">
          {currentProduct.length === 0 && isLoading === true ? (
            <Text>Loading</Text>
          ) : currentProduct.length === 0 && isLoading === false ? (
            <Box className="home_container_empty">
              <span>No games found</span>
              
            </Box>
          ) : (
            currentProduct.length > 0 &&
            currentProduct.map((product:any) => {
              return (
                <Link
                  to={`/products/${product._id}`}
                  key={product._id}
                  className="home_container_content_games_card">
                  <ProductCard product={product} />
                </Link>
              );
            })
          )}
        </ProductGrid>
      </Box>
      <Box pt={'30px'} pb='30px' className="home_cointainer_Pagination" display={'flex'} flexDir='column' justifyContent={'center'} alignItems='center'>
        {products.length > 15 && (
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
