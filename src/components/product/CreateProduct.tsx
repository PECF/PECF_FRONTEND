import React, { useState, useEffect } from "react";
import { CreatableSelect, Select } from "chakra-react-select";
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
  Grid,
  IconButton,
  Icon,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/rootStore";
import { createProduct } from "../../redux/actions/productsActions";
import { ProductDetail } from "../../pages/ProductDetail";
import { useRecoveryData } from "../../hooks/useRecoveryData";
import { DeleteIcon } from "@chakra-ui/icons";
import { RiImageAddLine } from "react-icons/ri";
export function CreateProduct() {
  const { loading, success, error, product } = useRecoveryData("productCreate");
  const { feature } = useRecoveryData("productFeature");
  const { tags } = useRecoveryData("productTag");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const dispatch = useDispatch<AppDispatch>();

  const [imagesPreview, setImagesPreview] = useState<any[]>(
    product?.image || []
  );
  const [featureLocal, setFeatures] = useState<any[]>(product?.feature || []);
  const [description, setDescription] = useState(product?.description || "");
  const [category, setCategory] = useState<any[]>(product?.category || []);
  const [discount, setDiscount] = useState(product?.discount || 0);
  const [featureOptions, setFeatureOptions] = useState<any[]>([]);
  const [offer, setOffer] = useState<any[]>(product?.offer || []);
  const [image, setImages] = useState<any[]>(product?.image || []);
  const [tagOptions, setTagOptions] = useState<any[]>([]);
  const [stock, setStock] = useState(product?.stock || 0);
  const [price, setPrice] = useState(product?.price || 0);
  const [brand, setBrand] = useState(product?.brand || "");
  const [tagLocal, setTags] = useState<any[]>(product?.tag || []);
  const [name, setName] = useState(product?.name || "");
  const [isCharge, setIsCharge] = useState(false);

  if (!isCharge) {
    const featureOptions = feature
      ?.map((item: { label: string; value: string }) => ({
        value: item.value,
        label: item.label,
      }))
      .filter(function (
        item: { label: string; value: string },
        index: number,
        self: { label: string; value: string }[]
      ) {
        return (
          self.findIndex(
            (t: { label: string; value: string }) => t.value === item.value
          ) === index
        );
      });

    const tagOptions = tags
      ?.map((item: { label: string; value: string }) => ({
        value: item.value,
        label: item.label,
      }))
      .filter(function (
        item: { label: string; value: string },
        index: number,
        self: { label: string; value: string }[]
      ) {
        return (
          self.findIndex(
            (t: { label: string; value: string }) => t.value === item.value
          ) === index
        );
      });

    setFeatureOptions(featureOptions);
    setTagOptions(tagOptions);
    setIsCharge(true);
  }

  const createProductImagesChange = (e: any) => {
    const files = Array.from(e?.target?.files);
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
  };
  const deleteImagePreview = (index: number) => {
    const newImagesPreview = imagesPreview.filter((item, i) => i !== index);
    const newImages = image.filter((item, i) => i !== index);
    setImagesPreview(newImagesPreview);
    setImages(newImages);
  };

  const createFeature = (
    _feature: {
      value: string;
      label: string;
    }[]
  ) => {
    const newFeature = _feature.map(
      (item: { value: string; label: string }) => ({
        value: item.value,
        label: item.label,
      })
    );
    const _options = [...featureOptions, ...newFeature];
    setFeatureOptions(_options);
    localStorage.setItem("feature", JSON.stringify(_options));
  };

  const createTag = (
    _tags: {
      value: string;
      label: string;
    }[]
  ) => {
    const newTags = _tags.map((item: { value: string; label: string }) => ({
      label: item.label,
      value: item.value,
    }));
    const _options = [...tagOptions, ...newTags];
    setTagOptions(_options);
    localStorage.setItem("tags", JSON.stringify(_options));
  };

  const _product = {
    name,
    category,
    description,
    price,
    stock,
    discount,
    offer,
    brand,
    feature: featureLocal,
    tag: tagLocal,
    image,
    createdAt: new Date().toISOString(),
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(createProduct({ product: _product, sendToDB: false }));
    }, 50000);
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
  }, [success, error, _product, dispatch, toast]);

  const previewHandler = () => {
    if (
      name === "" ||
      category.length === 0 ||
      description === "" ||
      brand === "" ||
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
    if (
      name === "" ||
      category.length === 0 ||
      description === "" ||
      brand === "" ||
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
      dispatch(createProduct({ product: _product, sendToDB: true }));
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
      shadow="base"
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
        </Flex>
        <Flex
          justify="space-between"
          align="center"
          px={6}
          py={4}
          bg={useColorModeValue("gray.50", "gray.700")}
          borderBottomWidth="1px">
          <SimpleGrid columns={2} spacing={4} w="full">
            <FormControl id="brand" isRequired>
              <FormLabel>Brand</FormLabel>
              <Input
                type="text"
                placeholder="Samsung"
                bg={useColorModeValue("alphaWhite", "gray.800")}
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </FormControl>
            <FormControl id="category" isRequired>
              <FormLabel>Category</FormLabel>
              <Select
                selectedOptionColor="teal"
                colorScheme="teal"
                onChange={(e: any) => {
                  setCategory(e);
                }}
                placeholder="Select Category"
                options={[
                  { value: "Shirt", label: "Shirt" },
                  { value: "Pants", label: "Pants" },
                  { value: "Shoes", label: "Shoes" },
                  { value: "Accessories", label: "Accessories" },
                ]}
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
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
          }}
          gap={6}
          px={6}
          py={4}
          bg={useColorModeValue("gray.50", "gray.700")}>
          <FormControl id="offer" isRequired>
            <FormLabel>Offer</FormLabel>
            <Select
              isMulti
              colorScheme="teal"
              placeholder="Select offer"
              value={offer}
              onChange={(e: any) => setOffer(e)}
              options={[
                { value: "none", label: "None" },
                { value: "discount", label: "Discount" },
                { value: "freeShipping", label: "Free Shipping" },
              ]}
            />
          </FormControl>
          <FormControl id="offerValue" isRequired>
            <FormLabel>Discount Value</FormLabel>
            <Input
              type="number"
              bg={useColorModeValue("alphaWhite", "gray.800")}
              placeholder="10"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Flex
          justify="space-between"
          align="center"
          px={6}
          py={4}
          bg={useColorModeValue("gray.50", "gray.700")}
          borderBottomWidth="1px">
          <FormControl id="Features" isRequired>
            <FormLabel>Features</FormLabel>
            <Text
              bg={useColorModeValue("gray.50", "gray.700")}
              p={2}
              borderRadius="md"
              color="gray.500"
              fontSize="sm"
              fontWeight="medium"
              lineHeight="short">
              If you dont have any features, leave this field blank, that table
              will not be shown
            </Text>
            <CreatableSelect
              selectedOptionColor="purple"
              isMulti
              onChange={(e: any) => {
                setFeatures(e);
                createFeature(e);
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
              Tags are used to help customers find your products. Add up to 3
              tags for better results.
            </Text>
            <CreatableSelect
              selectedOptionColor="purple"
              colorScheme="teal"
              isMulti
              onChange={(e: any) => {
                setTags(e);
                createTag(e);
              }}
              placeholder="Add tags"
              options={tagOptions || []}
            />
          </FormControl>
        </Flex>

        <VStack
          justify="space-between"
          align="center"
          px={6}
          py={4}
          bg={useColorModeValue("gray.50", "gray.700")}
          borderBottomWidth="1px">
          <FormControl id="images">
            <FormLabel>Images</FormLabel>
            <Text
              bg={useColorModeValue("gray.50", "gray.700")}
              p={2}
              borderRadius="md"
              color="gray.500"
              fontSize="sm"
              fontWeight="medium"
              lineHeight="short">
              Add up to 3 images for better results. All formats are accepted,
              but we recommend using PNG.
            </Text>

            <InputGroup
              size="md"
              bg={useColorModeValue("alphaWhite", "gray.800")}
              borderRadius="md"
              color="gray.500"
              fontSize="sm"
              fontWeight="medium"
              lineHeight="short">
              <InputLeftElement pointerEvents="none">
                <Icon as={RiImageAddLine} color="gray.300" />
              </InputLeftElement>
              <Input
                type="file"
                placeholder="Upload image"
                multiple
                sx={{
                  "::file-selector-button": {
                    height: 10,
                    padding: 0,
                    mr: 4,
                    background: "none",
                    border: "none",
                    fontWeight: "bold",
                  },
                }}
                onChange={(e) => {
                  createProductImagesChange(e);
                }}
              />
            </InputGroup>
          </FormControl>

          <SimpleGrid columns={3} spacing={4} w="full">
            {imagesPreview.map((img, index) => {
              const src = img?.url ? img.url : img;

              return (
                <Box key={index} w="full" h="full" position="relative">
                  <Image src={src} w="full" h="full" objectFit="cover" />
                  <IconButton
                    aria-label="Delete Image"
                    icon={<DeleteIcon />}
                    position="absolute"
                    top={2}
                    right={2}
                    colorScheme="red"
                    onClick={() => deleteImagePreview(index)}
                  />
                </Box>
              );
            })}
          </SimpleGrid>
        </VStack>

        <Flex
          justify="space-between"
          align="center"
          px={6}
          py={4}
          bg={useColorModeValue("gray.50", "gray.700")}
          borderBottomWidth="1px">
          <Button
            type="submit"
            colorScheme="teal"
            mr={3}
            isLoading={loading}
            onClick={() => submitHandler}>
            Create
          </Button>
          <Button
            type="button"
            colorScheme="teal"
            variant="outline"
            onClick={previewHandler}>
            Preview
          </Button>
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
                <ProductDetail product={_product} />
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
