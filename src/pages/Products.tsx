import { ProductCard } from "../components/product/ProductCard";
import { ProductGrid } from "../components/product/ProductGrid";
import { useRecoveryData } from "../hooks/useRecoveryData";
import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

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

  return (
    <Box mt="82">
      <ProductGrid>
        {filteredProducts.map(
          (product: { _id: React.Key | null | undefined }) => (
            <ProductCard key={product._id} product={product} />
          )
        )}
      </ProductGrid>
    </Box>
  );
};
