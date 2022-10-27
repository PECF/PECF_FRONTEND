
import { ProductCard } from '../components/ProductCard'
import { Box } from '@chakra-ui/react'
import * as React from 'react'
import { ProductGrid } from '../components/ProductGrid'
import { useRecoveryData } from '../hooks/useRecoveryData'

export const Products = () => {
  
  const {products} = useRecoveryData('productList')

  console.log(products)
  return(
  
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: '4', md: '8', lg: '12' }}
    py={{ base: '6', md: '8', lg: '12' }}
  >
    
    <ProductGrid>
      {products && products.map((product:any) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </ProductGrid>
  </Box>
)}