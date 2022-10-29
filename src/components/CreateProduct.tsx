import React, { useState, useEffect } from "react";
import { CreatableSelect, MultiValue } from "chakra-react-select";
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
import { useRecoveryData } from "../hooks/useRecoveryData";
import { FirstSlider } from '../constant/Home';
export function CreateProduct() {
  const dispatch = useDispatch<AppDispatch>();

  const { loading, success, error, product } = useRecoveryData("productCreate");
  const { feature } = useRecoveryData("productFeature");
  const { tags } = useRecoveryData("productTag");

  const [featureOptions, setFeatureOptions] = useState<any[]>([]);
  const [tagOptions, setTagOptions] = useState<any[]>([]);
  const [isCharge, setIsCharge] = useState(false)
  const [featureLocal, setFeatures] = useState([]);
  const [tagLocal, setTags] = useState([]);

  if (!isCharge) {
    const featureOptions = feature?.map((item: { label: string; value: string }) => ({ value: item.value, label: item.label })).filter(function (item: { label: string; value: string }, index: number, self: { label: string; value: string }[]) {
      return self.findIndex((t: { label: string; value: string }) => t.value === item.value) === index;
    })

    const tagOptions = tags?.map((item: { label: string; value: string }) => ({ value: item.value, label: item.label })).filter(function (item: { label: string; value: string }, index: number, self: { label: string; value: string }[]) {
      return self.findIndex((t: { label: string; value: string }) => t.value === item.value) === index;
    })

    setFeatureOptions(featureOptions)
    setTagOptions(tagOptions)
    setIsCharge(true)
  }

  const createFeature = (_feature: {
    value: string;
    label: string;
  }[]) => {
    const newFeature = _feature.map((item: {
      value: string;
      label: string;
    }) => ({
      value: item.value,
      label: item.label,
    }));
    const _options = [...featureOptions, ...newFeature];
    setFeatureOptions(_options);
    localStorage.setItem("feature", JSON.stringify(_options));
  }


  const createTag = (_tags: {
    value: string;
    label: string;
  }[]) => {
    const newTags = _tags.map((item: {
      value: string;
      label: string;
    }) => ({
      label: item.label,
      value: item.value,
    }));
    const _options = [...tagOptions, ...newTags]
    setTagOptions(_options);
    localStorage.setItem("tags", JSON.stringify(_options));
  };


  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [name, setName] = useState(product?.name);
  const [category, setCategory] = useState(product?.category);
  const [description, setDescription] = useState(product?.description);
  const [price, setPrice] = useState(product?.price);
  const [stock, setStock] = useState(product?.stock);

  const [image, setImages] = useState<any[]>(product?.image);
  const [imagesPreview, setImagesPreview] = useState<any[]>(product?.image);

  const _product = {
    name,
    category,
    description,
    price,
    stock,
    featureLocal,
    tagLocal,
    image,
  };


  useEffect(() => {
    localStorage.setItem("productCreate", JSON.stringify(_product));
    if (success) {
      toast({
        title: "Product created.",
        description: "We've created your product for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
    if (error) {
      toast({
        title: "An error occurred.",
        description: "We were unable to create your product.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [success, error]);


  const createProductImagesChange = (e: any) => {
    const files = Array.from(e?.target?.files);
    setImagesPreview([]);
    setImages([]);
    files.forEach((file) => {
      const reader = new FileReader();
      const _file: any = file;
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((oldArray) => [...oldArray, reader.result]);
          setImages((oldArray) => [...oldArray, reader.result]);
        }
      };
      reader.readAsDataURL(_file);
    });
  }



  const previewHandler = () => {
    if (
      name === "" ||
      category === "" ||
      description === "" ||
      price === "" ||
      stock === "" ||
      tagLocal.length === 0 ||
      featureLocal.length === 0 ||
      image.length === 0
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


  const submitHandler = (e: any) => {
    e.preventDefault();


    console.log(_product)


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
      rounded="lg"
      shadow="base"
      onSubmit={submitHandler}
    >
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
          <FormControl id="Features" >
            <FormLabel>Features</FormLabel>
            <Text
              bg={useColorModeValue("gray.50", "gray.700")}
              p={2}
              borderRadius="md"
              color="gray.500"
              fontSize="sm"
              fontWeight="medium"
              lineHeight="short">
              If you dont have any features, leave this field blank, that table will not be shown
            </Text>
            <CreatableSelect selectedOptionColor="purple"
              isMulti
              onChange={(e: any) => {
                setFeatures(e)
                createFeature(e)
              }}
              placeholder="Add Features"
              colorScheme="teal"
              options={featureOptions || []}
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
          <FormControl id="tags" >
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
            </Text>
            <CreatableSelect
              selectedOptionColor="purple"
              colorScheme="teal"
              isMulti
              onChange={(e: any) => {
                setTags(e)
                createTag(e)
              }}
              placeholder="Add tags"
              options={tagOptions || []} />
          </FormControl>
        </Flex>

        <Flex
          justify="space-between"
          align="center"
          px={6}
          py={4}
          bg={useColorModeValue("gray.50", "gray.700")}
          borderBottomWidth="1px">
          <FormControl id="images" >
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
          <Button type="submit" colorScheme="teal" mr={3}
            isLoading={loading}
            onClick={() => submitHandler}
          >
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
                <ProductDetailPreview product={_product} />
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




