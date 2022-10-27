import React, { FormEvent, SetStateAction, useEffect, useState } from "react";
import {
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Flex,
  SimpleGrid,
  Button,
  Image,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Modal,
  ModalFooter,
  useDisclosure,
  useToast,
  Heading,
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/rootStore";
import { createProduct } from "../redux/actions/productsActions";
import { useLoad } from "../hooks/useLoad";
import ProductDetail from '../pages/ProductDetail';

export function CreateProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // dispatch(
    //   createProduct({
    //     name,
    //     category,
    //     description,
    //     price,
    //     stock,
    //   })
    // );
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

  const toast = useToast();

  const previewHandler = () => {
    if (
      name === "" ||
      category === "" ||
      description === "" ||
      price === "" ||
      stock === ""
    ) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      onOpen();
    }
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
                bg={useColorModeValue("alphaWhite", "gray.800")}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="category" isRequired>
              <FormLabel>Category</FormLabel>
              <Text
                bg={useColorModeValue("gray.50", "gray.700")}
                p={2}
                borderRadius="md"
                color="gray.500"
                fontSize="sm"
                fontWeight="medium"
                lineHeight="short">

                {` You can use multiple categories by separating them with a spaces, e.g. "category1 category2"`}

              </Text>
              <Input
                type="text"
                bg={useColorModeValue("alphaWhite", "gray.800")}

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
                bg={useColorModeValue("alphaWhite", "gray.800")}

                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormControl>
            <FormControl id="stock" isRequired>
              <FormLabel>Stock</FormLabel>
              <Input
                type="number"
                value={stock}
                bg={useColorModeValue("alphaWhite", "gray.800")}

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
              bg={useColorModeValue("alphaWhite", "gray.800")}

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
          <FormControl id="tags" isRequired>
            <FormLabel>Tags</FormLabel>
            <Text
              bg={useColorModeValue("gray.50", "gray.700")}
              p={2}
              borderRadius="md"
              color="gray.500"
              fontSize="sm"
              fontWeight="medium"
              lineHeight="short">
              Tags are used to help customers find your products. Add up to 3 tags for better results.
              Must include spaces between tags.
            </Text>
            <Input
              type="text"
              bg={useColorModeValue("alphaWhite", "gray.800")}

              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
            <Text
              bg={useColorModeValue("gray.50", "gray.700")}
              p={2}
              borderRadius="md"
              color="gray.500"
              fontSize="sm"
              fontWeight="medium"
              lineHeight="short">
              Add up to 3 images for better results.
              All formats are accepted, but we recommend using PNG.
            </Text>
            <Input
              type="file"
              name="images"
              bg={useColorModeValue("alphaWhite", "gray.800")}
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
          <Button
            type="button"
            colorScheme="teal"
            variant="outline"
            onClick={previewHandler}
          >Preview</Button>
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="full"
            scrollBehavior="inside">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Product Preview</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <ProductDetail product={
                  {
                    name,
                    category,
                    description,
                    price,
                    stock,
                    images,
                  }
                } />
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </VStack>
    </Box>
  );
}




