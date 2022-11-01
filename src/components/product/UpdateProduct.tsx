import React, { useState, useEffect } from "react";
import { CreatableSelect, Select } from "chakra-react-select";
import { useLocation } from "react-router-dom";
import {
  Text,
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
  Textarea,
  Modal,
  ModalFooter,
  useDisclosure,
  useToast,
  Heading,
  useColorModeValue,
  Grid,
  Box,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  Icon,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/rootStore";
import {
  deleteProduct,
  getAdminProductDetails,
  updateProduct,
} from "../../redux/actions/productsActions";
import { ProductDetailPreview } from "./ProductDetailPreview";
import { useRecoveryData } from "../../hooks/useRecoveryData";
import { DeleteIcon } from "@chakra-ui/icons";
import { RiImageAddLine } from "react-icons/ri";

export function UpdateProduct() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    isOpen: isOpenPreview,
    onOpen: onOpenPreview,
    onClose: onClosePreview,
  } = useDisclosure();

  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();
  const { feature } = useRecoveryData("productFeature");
  const { tags } = useRecoveryData("productTag");
  const productDelete = useRecoveryData("productDelete");
  const toast = useToast();
  const location = useLocation();

  const _productById = location.pathname.split("/")[4];

  const { products } = useRecoveryData("productList");
  const { product } = useRecoveryData("productDetails");
  const { loading, error, success } = useRecoveryData("productUpdate");
  console.log(product);
  const [imagesPreview, setImagesPreview] = useState<any[]>([]);
  const [featureLocal, setFeatures] = useState<any[]>([]);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<any[]>([]);
  const [discount, setDiscount] = useState(0);
  const [image, setImages] = useState<any[]>([]);
  const [featureOptions, setFeatureOptions] = useState<any[]>([]);
  const [offer, setOffer] = useState<any[]>([]);
  const [tagLocal, setTags] = useState<any[]>([]);
  const [tagOptions, setTagOptions] = useState<any[]>([]);
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [isCharge, setIsCharge] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  useEffect(() => {
    if (_productById) {
      dispatch(getAdminProductDetails(_productById));
      setIsChange(true);
    }
  }, [_productById, dispatch]);

  const selectProduct = (e: any) => {
    dispatch(getAdminProductDetails(e.value));
    setIsChange(true);
  };

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
    _id: product?._id,
    name: name || product?.name,
    category: category || product?.category,
    description: description || product?.description,
    price: price || product?.price,
    stock: stock || product?.stock,
    discount: discount || product?.discount,
    offer: offer || product?.offer,
    brand: brand || product?.brand,
    feature: featureLocal || product?.feature,
    tag: tagLocal || product?.tag,
    image: image || product?.image,
    createdAt: new Date().toISOString(),
  };

  useEffect(() => {
    if (isChange) {
      setFeatures(product?.feature || []);
      setTags(product?.tag || []);
      setDiscount(product?.discount || 0);
      setOffer(product?.offer || []);
      setName(product?.name || "");
      setBrand(product?.brand || "");
      setCategory(product?.category || "");
      setPrice(product?.price || 0);
      setStock(product?.stock || 0);
      setDescription(product?.description || "");
      setImagesPreview(product?.image || []);
      setImages(product?.image || []);
      setIsChange(false);
    }

    setTimeout(() => {
      dispatch(updateProduct({ product: _product, sendToDB: false }));
    }, 30000);

    localStorage.setItem("productUpdate", JSON.stringify(_product));
    if (success) {
      toast({
        title: "Product updated.",
        description: "We've updated your product for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
    if (error) {
      toast({
        title: "An error occurred.",
        description: "We've updated your product for you.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    if (productDelete.success) {
      toast({
        title: "Product deleted.",
        description: "We've deleted your product for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      productDelete.success = false;
      onCloseDelete();
    }
    if (productDelete.error) {
      toast({
        title: "An error occurred.",
        description: "We've deleted your product for you.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [isChange, success, error, productDelete.success, productDelete.error]);

  const deleteProductHandler = (id: string) => {
    if (id === "" || (id === undefined && password !== passwordConfirmation)) {
      toast({
        title: "An error occurred.",
        description: "We can't delete this product.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    dispatch(deleteProduct(id));
  };

  const previewHandler = () => {
    if (
      name === "" ||
      category.length === 0 ||
      description === "" ||
      brand === "" ||
      price === 0 ||
      stock === 0 ||
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
      onOpenPreview();
    }
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    if (
      name === "" ||
      category.length === 0 ||
      description === "" ||
      brand === "" ||
      price === 0 ||
      stock === 0 ||
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
      dispatch(updateProduct({ product: _product, sendToDB: true }));
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
            Update Product
          </Heading>
        </Flex>

        <Flex
          justify="space-between"
          align="center"
          px={6}
          py={4}
          bg={useColorModeValue("gray.50", "gray.700")}
          borderBottomWidth="1px">
          <FormControl id="selector" isRequired>
            <FormLabel>Select Product</FormLabel>
            <Select
              options={products.map((product: any) => ({
                value: product._id,
                label: product.name,
              }))}
              colorScheme="teal"
              placeholder="Select Product"
              isClearable
              isSearchable
              onChange={(e: any) => {
                selectProduct(e);
              }}
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
                onChange={(e: any) => setPrice(e.target.value)}
              />
            </FormControl>
            <FormControl id="stock" isRequired>
              <FormLabel>Stock</FormLabel>
              <Input
                type="number"
                value={stock}
                bg={useColorModeValue("alphaWhite", "gray.800")}
                placeholder="100"
                onChange={(e: any) => setStock(e.target.value)}
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
          zIndex={20}
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
              onChange={(e: any) => setDiscount(e.target.value)}
            />
          </FormControl>
        </Grid>

        <Flex
          justify="space-between"
          align="center"
          px={6}
          py={4}
          zIndex={15}
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
          zIndex={10}
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
              maxMenuHeight={200}
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
              return (
                <Box key={index} w="full" h="full" position="relative">
                  <Image
                    src={img.url ? img.url : img}
                    w="full"
                    h="full"
                    objectFit="cover"
                  />
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
            Update
          </Button>

          <Button
            isLoading={productDelete.loading}
            type="button"
            colorScheme="red"
            mr={3}
            onClick={onOpenDelete}>
            Delete
          </Button>

          <Button
            type="button"
            colorScheme="teal"
            variant="outline"
            onClick={previewHandler}>
            Preview
          </Button>
          <Modal
            isOpen={isOpenPreview}
            onClose={onClosePreview}
            scrollBehavior="inside">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Product Preview</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <ProductDetailPreview product={_product} />
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClosePreview}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Modal
            isOpen={isOpenDelete}
            onClose={onCloseDelete}
            scrollBehavior="inside">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Confirm Delete</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </FormControl>
                <FormControl mt={4} id="password_confirmation" isRequired>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input
                    type="password"
                    name="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    placeholder="Enter your password confirmation"
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  onClick={() => {
                    onCloseDelete();
                  }}>
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  variant="solid"
                  ml={3}
                  isLoading={productDelete.loading}
                  onClick={() => {
                    deleteProductHandler(_product._id);
                  }}>
                  Delete
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </VStack>
    </Box>
  );
}
