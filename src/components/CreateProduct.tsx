import React, { FormEvent, useEffect, useState } from "react";
import { Select, CreatableSelect } from "chakra-react-select";
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
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/rootStore";
import { createProduct } from "../redux/actions/productsActions";
import { ProductDetailPreview } from "./ProductDetailPreview";
export function CreateProduct() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch<AppDispatch>();
  const toast = useToast();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [tags, setTags] = useState<string[]>([]);


  const [image, setImages] = useState<any[]>([]);
  const [imagesPreview, setImagesPreview] = useState<any[]>([null]);
  const createTags = (str: string) => {
    setTags(str.split(" "))
  }



  const createProductImagesChange = (e: any) => {
    const files = Array.from(e?.target?.files);
    setImagesPreview([null]);
    setImages([]);
    files.forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          imagesPreview?.push(reader.result);
          setImagesPreview(imagesPreview);
          image?.push(reader.result);
          setImages(image);

        }
      };
      reader.readAsDataURL(file);
    });
  }


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
                placeholder="Samsung Galaxy Fold 4"
                bg={useColorModeValue("alphaWhite", "gray.800")}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="category" isRequired>
              <FormLabel>Category</FormLabel>
              <Input
                type="text"
                placeholder="Electronics"
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
                placeholder="1000"
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
                placeholder="100"
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
              placeholder="Description"
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
            <CreatableSelect selectedOptionColor="purple"
            
              isMulti
              onChange={(e) => createTags(e?.map((item: any) => item.value).join(" "))}
              placeholder="Add tags"
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
              onChange={(e) => createProductImagesChange(e)}
            />
          </FormControl>
        </Flex>
        {imagesPreview.length && (
          <Flex
            justify="space-between"
            align="center"
            px={6}
            py={4}
            bg={useColorModeValue("gray.50", "gray.700")}
            borderBottomWidth="1px">
            <FormControl id="images">
              <FormLabel>Images Preview</FormLabel>
              <SimpleGrid columns={3} spacing={4} w="full">
                {imagesPreview.map((img, index) => {
                  console.log(image)
                  if (img !== null) {
                    return (
                      <Image
                        key={index}
                        src={img?.toString()}
                        h="100px"
                        w="100px"
                        objectFit="cover"
                      />
                    )
                  }
                })}
              </SimpleGrid>
            </FormControl>
          </Flex>
        )}


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
                <ProductDetailPreview product={

                  {
                    name,
                    category,
                    description,
                    price,
                    stock,
                    image,
                    tags
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




