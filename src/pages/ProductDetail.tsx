import React from "react";
import {
  Box,
  Stack,
  Text,
  Image,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  HStack,
  Center,
  Badge,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { useRecoveryData } from "../hooks/useRecoveryData";
import { CarouselDetailProducts } from "../components/carouselDetailProduct";



export default function ProductDetail() {

  const { products } = useRecoveryData("productList") 
  const product = products[0]
  return (
    <Center>
      <VStack
        mt={10}
        maxW="5xl"
        bg={"whiteAlpha.100"}
        p={5}
      >
        <Stack >
            <Stack>
              <Box as={"header"}>
                                                              {/* //!TITLEE */}
                <Heading                                       
                  fontWeight={400}
                  fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
                >
                  {product?.name}
                </Heading>
                </Box>

                <CarouselDetailProducts
                  product={product}
                />
                
                {/* <CarouselDetailProducts
                  array = {products[0]?.image}/> */}
              {/*    rounded={"md"}
                alt={"product image"}

                objectFit={"cover"}
                align={"center"}
                w={{ base: "-moz-initial",  sm: "700px", lg: '700px'}}
                h={{ base: "-moz-initial",  sm: "700px", lg: '700px'}}  */}
                
            </Stack>
            <VStack spacing={{ base: 6, md: 10 }}
            p={5}>
                                                      {/* //!DIVISOR LINEA */}
              <Stack                                       
                spacing={{ base: 3, sm: 5 }}
                direction={"column"}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                  />
                }
              >
                <Stack spacing={{ base: 4, sm: 6 }}>  {/* //!TEXTO DESCRIPCION */}
                  <Text
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontSize={{ base: "-moz-initial", sm:"xl", lg:"2xl"}}
                    fontWeight={"300"} align={'justify'}
                  >
                    {product?.description}
                  </Text>
                  <Text align={'justify'} fontSize={"lg"}>
                    <Badge
                      borderRadius="full"
                      px="2"
                      colorScheme="teal"
                      fontSize={"lg"}
                    >
                      {product?.category}
                    </Badge>

                  </Text>
                </Stack>
                <Box>
                  <Text
                   fontSize={{ base: "-moz-initial", sm:"xl", lg:"2xl"}}
                    color={useColorModeValue("teal.500", "teal.300")}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Features
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <List spacing={2}>
                      <ListItem>Chronograph</ListItem>
                      <ListItem>Master Chronometer Certified</ListItem>{" "}
                      <ListItem>Tachymeter</ListItem>
                    </List>
                    <List spacing={2}>
                      <ListItem>Anti‑magnetic</ListItem>
                      <ListItem>Chronometer</ListItem>
                      <ListItem>Small seconds</ListItem>
                    </List>
                  </SimpleGrid>
                </Box>
                
              </Stack>
                <Text
                  color={useColorModeValue("gray.900", "gray.400")}
                  fontWeight={300}
                  fontSize={"2xl"}
                >
                  {product?.price}€
                </Text>

              <Button
                rounded={"none"}
                w={"full"}
                mt={8}
                size={"lg"}
                py={"7"}
                bg={useColorModeValue("gray.900", "gray.50")}
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
              >
                <MdLocalShipping />
                <Text>2-3 business days delivery</Text>
              </Stack>
            </VStack>
          
        </Stack>
      </VStack>
    </Center>
  );
}
