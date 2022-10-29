import React from "react";
import {
  Box,
  Stack,
  Text,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  useColorModeValue,
  Center,
  Badge,
  HStack,
  Grid,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { MdLocalShipping } from "react-icons/md";
import { CarouselDetailProducts } from "./carouselDetailProductPreview";

export function ProductDetailPreview({ product }: any) {
  console.log(product)
  return (
    <Center
      py={
        {
          base: 1,
          md: 10,
        }
      }
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      < VStack
        w="full"
        maxW="7xl"
        mx="auto"
        rounded="lg"
        shadow="lg"
        overflow="hidden"
      >
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          w="full"
          h="full"
        >
          <Heading
            as="h1"
            size="2xl"
            fontWeight="extrabold"
            textAlign={{ base: "left", md: "left" }}
            p={2}>
            {product.name}
          </Heading>
          <HStack
            spacing={2}
            align="center"
            justify={{ base: "left", md: "flex-end" }}
            p={2}
          >
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                />
              ))}
            <Box
              as="span"
              ml="2"
              color="gray.600"
              fontSize="lg"
            >
              reviews
            </Box>
          </HStack>
        </Grid>
        <Stack
          direction={{ base: "column", md: "row" }}
          w="full"
          h="full"
          p={1}
        >
          <Text
            fontSize="lg"
            color="gray.600"
            textAlign="center"
          >
            <Badge
              colorScheme="teal"
              borderRadius="full"
              px="4"
              py="1"
              fontSize="md"
            >
              {product.category}
            </Badge>
          </Text>
          <Text
            fontSize="lg"
            color="gray.600"
            textAlign="center"
            display={{ base: "none", md: "block" }}
          >
            <Badge
              colorScheme="teal"
              borderRadius="full"
              px="4"
              py="1"
              fontSize="md"
            >
              {product?.brand}
            </Badge>
          </Text>
          <Text
            fontSize="lg"
            color="gray.600"
            textAlign="center"
            display={{ base: "none", md: "block" }}
          >
            <Badge
              colorScheme="teal"
              borderRadius="full"
              px="4"
              py="1"
              fontSize="md"
            >
              only {product?.stock} units
            </Badge>
          </Text>
          {
            product.offer[0].value === "discount" ||
              product.offer[1].value === "discount" ?
              <Text
                fontSize="lg"
                color="gray.600"
                textAlign="center"
                display={{ base: "none", md: "block" }}
              >
                <Badge
                  colorScheme="teal"
                  borderRadius="full"
                  px="4"
                  py="1"
                  fontSize="md"
                >
                  {`${product.discount}% OFF`}
                </Badge>
              </Text>
              : null
          }

        </Stack>
        <CarouselDetailProducts image={product.image} />
        <Stack
          w="100%"
          h="full"
          p={5}
          spacing={4}

        >
          <Text
            ml={5}
            color={useColorModeValue("gray.900", "gray.400")}
            fontWeight={600}
            fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
          >
            {product.price}€
          </Text>
          <Button
            w="full"
            mt={5}
            colorScheme="teal"
            borderRadius="0"
            fontSize="xl"
            fontWeight={600}
            letterSpacing="wide"
            boxShadow="lg"
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Add to cart
          </Button>
          <Stack
            direction={{ base: "row", md: "row" }}
            w="full"
            h="full"
            p={1}
            justify="center"
            align={{ base: "center", md: "center" }}
          >
            <MdLocalShipping />
            <Text
              ml={2}
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={600}

              fontSize={{ base: "sm", sm: "md", lg: "lg" }}
            >

              {product.offer[0].value === "freeShipping" ||
                product.offer[1].value === "freeShipping" ?
                "Free shipping" : "Delivery in 72hs"}

            </Text>

          </Stack>
        </Stack>
        <Box
          w="full"
          h="full"
          p={5}
          bg={useColorModeValue("gray.50", "gray.900")}
        >
          <Text
            fontSize={{ base: "-moz-initial", sm: "xl", lg: "2xl" }}
            color={useColorModeValue("teal.500", "teal.300")}
            fontWeight={"600"}
            textTransform={"uppercase"}
          >
            Features
          </Text>
          <SimpleGrid
            columns={{ base: 1, md: 6 }}
            spacing={10}
            w="full"
            h="full"
            p={5}
          >
            {product.feature.map((f: { value: string }, index: number) => (
              <Box
                key={index}
                w="full"
                h="full"
                p={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                rounded="xl"
                alignContent={"center"}
                justifyContent={"center"}
                alignItems={"center"}
                alignSelf={"center"}
                textAlign={"center"}
                shadow="lg"
                cursor="pointer"
                _hover={{
                  transform: "translateY(-2px)",
                  shadow: "lg",
                }}
              >
                <Text
                  fontSize="xl"
                  color={useColorModeValue("teal.500", "teal.300")}
                  fontWeight={"500"}
                  align={"center"}
                  textAlign={"center"}
                  textTransform={"uppercase"}
                >
                  {f.value}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Box
          w="full"
          h="full"
          p={5}
          bg={useColorModeValue("gray.50", "gray.900")}
        >
          <Text
            fontSize={{ base: "-moz-initial", sm: "xl", lg: "2xl" }}
            color={useColorModeValue("teal.500", "teal.300")}
            fontWeight={"600"}
            textTransform={"uppercase"}
          >
            Description
          </Text>
          <Text
            fontSize="xl"
            color={useColorModeValue("gray.900", "gray.400")}
            fontWeight={300}
            align={"center"}
            textAlign="justify"
          >
            {product.description}
          </Text>
        </Box>
        <Box
          w="full"
          h="full"
          p={5}
          bg={useColorModeValue("gray.50", "gray.900")}
        >
          <Text
            fontSize={{ base: "-moz-initial", sm: "xl", lg: "2xl" }}
            color={useColorModeValue("teal.500", "teal.300")}
            fontWeight={"600"}
            textTransform={"uppercase"}
          >
            Tags
          </Text>
          <SimpleGrid
            columns={{ base: 1, md: 6 }}
            spacing={5}
            w="full"
            h="full"
            p={5}
          >
            {product.tag.map((t: { value: string }, index: number) => (
              <Box
                key={index}
                p={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                rounded="xl"
                shadow="lg"
                cursor="pointer"
                _hover={{
                  transform: "translateY(-2px)",
                  shadow: "lg",
                }}
              >
                <Text
                  fontSize="xl"
                  color={useColorModeValue("teal.500", "teal.300")}
                  fontWeight={"500"}
                  align={"center"}
                  textTransform={"uppercase"}
                >
                  {t.value}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>

    </Center>
  );
}