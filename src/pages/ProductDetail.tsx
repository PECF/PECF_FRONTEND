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
  List,
  ListItem,
  Center,
  Badge,
  HStack,
  Grid,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { MdLocalShipping } from "react-icons/md";
import { useRecoveryData } from "../hooks/useRecoveryData";
import { CarouselDetailProducts } from "../components/carouselDetailProduct";

export function ProductDetail() {
  const { products } = useRecoveryData("productList");
  const product = products[0];

  return (
    <Center>
      <VStack mt={10} maxW="5xl" bg={"whiteAlpha.100"} py={3}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={6}
        >
          <Heading
            fontWeight={400}
            fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
            ml={5}

          >
            {product?.name}
          </Heading>

          <HStack
            mr={5}
            spacing={1}
            alignItems="center"
            justifyContent={{
              base: "center",
              md: "flex-end",
            }}
          >
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  // color={i < /* product?.rating */ ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="lg">
              {/* product?.reviewCount */} reviews
            </Box>
          </HStack>
        </Grid>

        <Stack
          direction={{
            base: "column",
            md: "column",
          }}
          spacing={4}
          alignItems={{
            base: "center",
            md: "flex-start",
          }}
          justifyContent="space-between"
          mt={4}
          width="100%"
        >
          <Stack
          ml={5}
          direction={"row"}>
          <Text fontSize={"lg"} py={2}>
            <Badge
              borderRadius="full"
              px="2"
              colorScheme="teal"
              fontSize={{ base: "sm", sm: "lg" }}
            >
              {product?.category}
            </Badge>
          </Text>

          {product.numberSells > 0 && (
            <Text fontSize={"lg"} py={2}>
              <Badge
                borderRadius="full"   
                px="2"
                colorScheme="red"
                fontSize={{ base: "sm", sm: "lg" }}
              >
                Best Seller
              </Badge>
            </Text>
          )}
         </Stack>

          <CarouselDetailProducts product={product} />
        </Stack>

        <Stack w="100%" mt={5}>
          <Text
            ml={5}
            color={useColorModeValue("gray.900", "gray.400")}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
          >
            {product?.price}€
          </Text>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            mb={8}
            size={"lg"}
            py={"7"}
            colorScheme={"teal"}
            fontSize={"md"}
            fontWeight={"bold"}
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
            direction="row"
            alignItems="center"
            justifyContent={"center"}
            mt={8}
          >
            <MdLocalShipping />
            <Text
              ml={2}
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={600}
              fontSize={{ base: "sm", sm: "md", lg: "lg" }}
            >
              2-3 business days delivery{" "}
            </Text>
          </Stack>
        </Stack>

        <Box
          w="100%"
          mt={5}
          p={5}
          bg={useColorModeValue("gray.50", "gray.900")}
          rounded={"md"}
        >
          <Text
            fontSize={{ base: "-moz-initial", sm: "xl", lg: "2xl" }}
            color={useColorModeValue("teal.500", "teal.300")}
            fontWeight={"500"}
            textTransform={"uppercase"}
            mb={"4"}
          >
            Features
          </Text>
        </Box>
        <SimpleGrid
          columns={{ base: 2 }}
          spacing={"11rem"}
          w="100%"
          mt={5}
          p={5}
          bg={useColorModeValue("gray.50", "gray.900")}
          rounded={"md"}
        >
          <List spacing={5}>
            <ListItem>White</ListItem>
            <ListItem>Electronics</ListItem>
            <ListItem>1 TB</ListItem>
          </List>
          <List spacing={5}>
            <ListItem>PlayStation</ListItem>
            <ListItem>PS4</ListItem>
            <ListItem>Joystick</ListItem>
          </List>
        </SimpleGrid>

        <Box
          w="100%"
          mt={5}
          p={5}
          bg={useColorModeValue("gray.50", "gray.900")}
          rounded={"md"}
        >
          <Text
            fontSize={{ base: "-moz-initial", sm: "xl", lg: "2xl" }}
            color={useColorModeValue("teal.500", "teal.300")}
            fontWeight={"500"}
            textTransform={"uppercase"}
            mb={"4"}
          >
            Description
          </Text>
        </Box>

        <Text
          w="100%"
          mt={5}
          p={5}
          bg={useColorModeValue("gray.50", "gray.900")}
          rounded={"md"}
          fontSize={{ base: "sm", sm: "md", lg: "lg" }}
          fontWeight={"300"}
          align={"justify"}
        >
          {product?.description}
        </Text>
      </VStack>
    </Center>
  );
}
