import React from "react";
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

  return (
    <Box>
      <Select placeholder="Select option">
        {products.map((product) => (
          <option key={product.id} value={product.id}>
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
              default={products.name}
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="filled"
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Category</FormLabel>
            <Input
              type="text"
              default={products.category}
              placeholder="Enter category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              variant="filled"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Price</FormLabel>
            <Input
              type="number"
              default={products.price}
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              variant="filled"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Stock</FormLabel>
            <Input
              type="number"
              default={products.stock}
              placeholder="Enter stock"
              value={stock}
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
              default={products.description}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              variant="filled"
            />
          </FormControl>

          <Button
            colorScheme="teal"
            mr={3}
            backgroundColor="blackAlpha.900"
            mt="10"
            onClick={submitHandler}
          >
            Update Product
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
