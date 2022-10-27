import React, { useState } from "react";
import { useRecoveryData } from "../hooks/useRecoveryData";
import {
  Box,
  Select,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
export function UpdateProduct() {
  const { products } = useRecoveryData("productList");
  const [selectedProduct, setSelectedProduct] = useState({});

  return (
    <Box mt={20}>
      <Select placeholder="Select option">
        {products.map((product) => (
          <option
            key={product._id}
            value={product._id}
            onClick={() => setSelectedProduct(product)}
          >
            {product.name}
          </option>
        ))}
      </Select>

      <SimpleGrid columns={2} spacing={5}>
        <Box mt={25}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              default={selectedProduct?.name}
              placeholder="Enter name"
              value={selectedProduct?.name}
              onChange={(e) => setName(e.target.value)}
              variant="filled"
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Category</FormLabel>
            <Input
              type="text"
              placeholder="Enter category"
              default={selectedProduct?.category}
              value={selectedProduct?.category}
              onChange={(e) => setCategory(e.target.value)}
              variant="filled"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Price</FormLabel>
            <Input
              type="number"
              default={selectedProduct?.price}
              placeholder="Enter price"
              value={selectedProduct?.price}
              onChange={(e) => setPrice(e.target.value)}
              variant="filled"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Stock</FormLabel>
            <Input
              type="number"
              default={selectedProduct?.stock}
              placeholder="Enter stock"
              value={selectedProduct?.stock}
              onChange={(e) => setStock(e.target.value)}
              variant="filled"
            />
          </FormControl>
        </Box>

        <Box>
          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="Enter description"
              default={selectedProduct?.description}
              value={selectedProduct?.description}
              onChange={(e) => setDescription(e.target.value)}
              variant="filled"
            />
          </FormControl>

          <Button
            colorScheme="teal"
            mr={3}
            backgroundColor="blackAlpha.900"
            mt="10"
            // onClick={submitHandler}
          >
            Update Product
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
