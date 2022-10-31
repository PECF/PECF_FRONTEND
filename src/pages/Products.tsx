import { ProductCard } from "../components/product/ProductCard";
import { ProductGrid } from "../components/product/ProductGrid";
import { useRecoveryData } from "../hooks/useRecoveryData";
import { Box } from "@chakra-ui/react";
import * as React from "react";

export const Products = () => {
  const { products } = useRecoveryData("productList");

  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}>
      <ProductGrid>
        {products &&
          products.map((product: any) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </ProductGrid>
    </Box>
  );
};
