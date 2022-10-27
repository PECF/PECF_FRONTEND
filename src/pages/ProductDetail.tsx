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


export default function ProductDetail() {
  const { products } = useRecoveryData("productList");
  const product = products[0];
  return (
    <Center>
      <VStack mt={10} maxW="5xl" bg={"whiteAlpha.100"} py={3}>
        <Stack>
          <Stack>
            <Stack as={"header"}  >
              <Grid spacing={""} templateColumns={{base: "repeat(2,1fr)"}}>
                <Heading 
                  fontWeight={400}
                  fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
                >
                  {product?.name}
                </Heading>

                <HStack mt="2" alignItems={"flex-end"}>
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


              <Stack>
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
              </Stack>
            </Stack>

            <Box>
              <CarouselDetailProducts product={product} />
            </Box>
          </Stack>


          <Stack>
            <Box
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
            >
              {product?.price}€
            </Box>


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

            <Box>
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
            <SimpleGrid columns={{ base: 2 }} spacing={"11rem"}>
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

            <Box>
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
              color={useColorModeValue("gray.500", "gray.400")}
              fontSize={{ base: "-moz-initial", sm: "xl", lg: "2xl" }}
              fontWeight={"300"}
              align={"justify"}
            >
              {product?.description}
            </Text>
          </Stack>

        </Stack>
      </VStack>
    </Center>
  );
}
