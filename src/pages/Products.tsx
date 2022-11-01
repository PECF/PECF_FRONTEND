
import { ProductCard } from '../components/product/ProductCard'
import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import * as React from 'react'
import { ProductGrid } from '../components/product/ProductGrid'
import { useRecoveryData } from '../hooks/useRecoveryData'
import { useState } from 'react'
import { useEffect } from 'react'
import {Pagination} from '../components/Pagination'
import { Link } from 'react-router-dom'
import { ChevronDownIcon } from '@chakra-ui/icons'


export const Products = () => {
  
  const {products} = useRecoveryData('productList')
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(20);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (products.length < 15 && !isLoading) {
      setProductsPerPage(products.length);
    }
    if (products.length > 15 && !isLoading) {
      setProductsPerPage(15);
    }
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, [products.length, isLoading]);

  const indexOfLastGame = currentPage * productsPerPage;
  const indexOfFirstGame = indexOfLastGame - productsPerPage;
  const currentProduct = products.slice(indexOfFirstGame, indexOfLastGame);
  const _Pagination = (pageNumber:any) => setCurrentPage(pageNumber);
  


  return (
    <Box width={'100%'} m='0' p={'0'}>
      <Box width={'100%'} h='20vh' mb={'10px'} pt={'30px'} backgroundColor='white' display={'flex'} alignItems='center' justifyContent={'space-around'}>
        <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                 Categories
            </MenuButton>
             <MenuList>
                <MenuItem to={'/products'} as={Link}>All</MenuItem>
                <MenuItem to='/' as={Link}>Shirts</MenuItem>
             </MenuList>
        </Menu>
        <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                 Categories
            </MenuButton>
             <MenuList>
                <MenuItem to={'/products'} as={Link}>All</MenuItem>
                <MenuItem to='/' as={Link}>Shirts</MenuItem>
                <MenuItem to='/' as={Link}>Pants</MenuItem>
                <MenuItem to='/' as={Link}>UnderWear</MenuItem>
                <MenuItem to='/' as={Link}>Shoes</MenuItem>
                <MenuItem to='/' as={Link}>Hoodies</MenuItem>
                <MenuItem to='/' as={Link}>Jackets</MenuItem>
                <MenuItem to='/' as={Link}>Caps</MenuItem>
             </MenuList>
        </Menu>
        <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                 Categories
            </MenuButton>
             <MenuList>
                <MenuItem to={'/products'} as={Link}>All</MenuItem>
                <MenuItem to='/' as={Link}>Shirts</MenuItem>
                <MenuItem to='/' as={Link}>Pants</MenuItem>
                <MenuItem to='/' as={Link}>UnderWear</MenuItem>
                <MenuItem to='/' as={Link}>Shoes</MenuItem>
                <MenuItem to='/' as={Link}>Hoodies</MenuItem>
                <MenuItem to='/' as={Link}>Jackets</MenuItem>
                <MenuItem to='/' as={Link}>Caps</MenuItem>
             </MenuList>
        </Menu>
      </Box>
      
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
                  className="home_container_content_product_card">
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
}

