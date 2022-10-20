import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Button,
  Textarea,
} from "@chakra-ui/react";

export default function CreateForm() {
  return (
    <SimpleGrid columns={2} spacing={5}>
      <Box>
        <FormControl isRequired>
          <FormLabel>Product Name</FormLabel>
          <Input placeholder="Adidas Airforce" variant="filled" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Product Category</FormLabel>
          <Input placeholder="Shoes" variant="filled" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Product Price</FormLabel>
          <Input placeholder="$7800" variant="filled" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Product Stock</FormLabel>
          <Input placeholder="15" variant="filled" />
        </FormControl>
      </Box>

      <Box>
        <FormLabel>Product Description</FormLabel>
        <Textarea
          placeholder="Enter a description of the product"
          size="sm"
          variant="filled"
          resize="none"
        />

        <Button
          colorScheme="teal"
          mr={3}
          backgroundColor="blackAlpha.900"
          mt="10"
        >
          Create Product
        </Button>
      </Box>
    </SimpleGrid>
  );
}