import { ProductCard } from "../components/product/ProductCard";
import { ProductGrid } from "../components/product/ProductGrid";
import { useRecoveryData } from "../hooks/useRecoveryData";
import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import * as React from "react";

export const Products = () => {
  const { products } = useRecoveryData("productList");
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  React.useEffect(() => {
    if (location.pathname) {
      const category = location.pathname.split("/")[2];
      console.log(category);
      if (category === "all") {
        setFilteredProducts(products);
        console.log(filteredProducts);
        //console.log(filteredProducts[0].category[0].value);
      } else {
        const filtered = products.filter((product) => {
          console.log(product.category[0].value.toLowerCase());
          return product.category[0].value.toLowerCase() === category;
        });
        setFilteredProducts(filtered);
        console.log(filteredProducts);
      }
    }
  }, [location.pathname, products]);

  return (
    <Box mt="82">
      <ProductGrid>
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </ProductGrid>
    </Box>
  );
};

/*
  return (
  <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <ProductGrid>
        {filteredProducts.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </ProductGrid>
    </Box>
  );
  */
