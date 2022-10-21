import React, { FormEvent, useEffect, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/rootStore";
import { createProduct } from "../redux/actions/productsActions";
import { useLoad } from "../hooks/useLoad";
import { ProductsDashboard } from "./ProductsDashboard";
export function CreateProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [stock, setStock] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      createProduct({
        name,
        category,
        description,
        price,
        stock,
      })
    );
  };

  useLoad();

  return (
    <>
      <ProductsDashboard />
      <SimpleGrid columns={2} spacing={5}>
        <Box mt={25}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
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
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              variant="filled"
            />
          </FormControl>
          {/* <FormControl mt={4}>
          <FormLabel>Image</FormLabel>
          <Input
            type="text"
            placeholder="Enter image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </FormControl> */}
          <FormControl mt={4}>
            <FormLabel>Stock</FormLabel>
            <Input
              type="number"
              placeholder="Enter stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              variant="filled"
            />
          </FormControl>

          {/* <FormControl isRequired>
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
        </FormControl> */}
        </Box>

        <Box>
          {/* <FormLabel>Product Description</FormLabel>
        <Textarea
          placeholder="Enter a description of the product"
          size="sm"
          variant="filled"
          resize="none"
        /> */}
          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="Enter description"
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
            onClick={submitHandler}>
            Create Product
          </Button>
        </Box>
      </SimpleGrid>
    </>
  );
}
