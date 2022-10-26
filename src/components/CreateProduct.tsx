import React, { FormEvent, SetStateAction, useEffect, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Flex,
  SimpleGrid,
  Button,
  Heading,
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/rootStore";
import { createProduct } from "../redux/actions/productsActions";
import { useLoad } from "../hooks/useLoad";
export function CreateProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
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

  const createProductImagesChange = (e: {
    target: { files: Iterable<unknown> | ArrayLike<unknown> };
  }) => {
    const files = Array.from(e.target.files);
    setImagesPreview([]);
    setImages([]);
    files.forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((oldArray) => [
            ...oldArray,
            reader.result as string,
          ]);
          setImages((oldArray) => [...oldArray, reader.result as string]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <Box
      as="form"
      w="full"
      mt={8}
      maxW="full"
      mx="auto"
      bg={useColorModeValue("white", "gray.700")}
      overflow="hidden"
      onSubmit={submitHandler}>
      <VStack align="stretch" spacing={0}>
        <Flex
          justify="space-between"
          align="center"
          px={6}
          py={4}
          bg={useColorModeValue("gray.50", "gray.800")}
          borderBottomWidth="1px">
          <Heading
            size="lg"
            fontWeight="bold"
            color={useColorModeValue("gray.900", "white")}>
            Create Product
          </Heading>
        </Flex>
        <Flex
          justify="space-between"
          align="center"
          px={6}
          py={4}
          bg={useColorModeValue("gray.50", "gray.700")}
          borderBottomWidth="1px">
          <SimpleGrid columns={2} spacing={4} w="full">
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="category" isRequired>
              <FormLabel>Category</FormLabel>
              <Input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </FormControl>
          </SimpleGrid>
        </Flex>
        <Flex
          justify="space-between"
          align="center"
          px={6}
          py={4}
          bg={useColorModeValue("gray.50", "gray.700")}
          borderBottomWidth="1px">
          <SimpleGrid columns={2} spacing={4} w="full">
            <FormControl id="price" isRequired>
              <FormLabel>Price</FormLabel>
              <Input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormControl>
            <FormControl id="stock" isRequired>
              <FormLabel>Stock</FormLabel>
              <Input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </FormControl>
          </SimpleGrid>
        </Flex>
        <Flex
          justify="space-between"
          align="center"
          px={6}
          py={4}
          bg={useColorModeValue("gray.50", "gray.700")}
          borderBottomWidth="1px">
          <FormControl id="description" isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>
        </Flex>
        <Flex
          justify="space-between"
          align="center"
          px={6}
          py={4}
          bg={useColorModeValue("gray.50", "gray.700")}
          borderBottomWidth="1px">
          <FormControl id="images" isRequired>
            <FormLabel>Images</FormLabel>
            <Input
              type="file"
              name="images"
              multiple
              onChange={createProductImagesChange}
            />
          </FormControl>
        </Flex>
        <Flex
          justify="space-between"
          align="center"
          px={6}
          py={4}
          bg={useColorModeValue("gray.50", "gray.700")}
          borderBottomWidth="1px">
          <Button type="submit" colorScheme="teal" mr={3}>
            Create
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
}




          