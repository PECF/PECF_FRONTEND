import React from "react";
import { useRecoveryData } from "../hooks/useRecoveryData";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  useToast,
  Center,

} from "@chakra-ui/react";
// import { updateWishlist } from "../redux/actions/wishlistAction";
// import { AppDispatch } from "../redux/rootStore";


export default function WishList() {
  const { wishlistItems } = useRecoveryData("wishlist");
  const toast = useToast();

  return (
    <Flex
      className="Afuera"
      direction="column"
      align="center"
      justify="center"
      mt={10}
      w="100%"
      h="100%"
      p="10"
    >
      <Heading as="h1" size="2xl" mb={10}
      >Wishlist</Heading>
      <Flex
        direction="column"
        align="center"
        justify="center"
        w="100%"
        h="100%"
        p="10"
      >
        {wishlistItems.length > 0 ? (
          wishlistItems.map((element: any) => {
            return (
              <Box
                key={element.product._id}
                w="100%"
                h="100%"
                p="10"
                border="1px"
                borderColor="gray.200"
                borderRadius="lg"
                shadow="md"
                m="10"
              >
                <Flex direction="row" align="center" justify="space-between">
                  <Flex direction="row" align="center">
                    <Image
                      src={element.product.image}
                      alt={element.product.name}
                      w="100px"
                      h="100px"
                    />
                    <Flex direction="column" align="flex-start" justify="center">
                      <Heading size="md">{element.product.name}</Heading>
                      <Text size="sm">${element.product.price}</Text>
                    </Flex>
                  </Flex>
                  <Flex direction="column" align="flex-start" justify="center">
                    <Button
                      colorScheme="teal"
                      onClick={() => {
                        toast({
                          title: "Product added to cart.",
                          description: "We've added the product to your cart.",
                          status: "success",
                          duration: 9000,
                          isClosable: true,
                        });
                      }}
                    >
                      Add to cart
                    </Button>
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        toast({
                          title: "Product removed from wishlist.",
                          description: "We've removed the product from your wishlist.",
                          status: "warning",
                          duration: 9000,
                          isClosable: true,
                        });
                      }}
                    >
                      Remove
                    </Button>
                  </Flex>
                </Flex>
              </Box>
            );
          })
        ) : (
          <Box
          mt={50}>
            <Heading as="h1" size="2xl" mb={10}
            mt={4}
            >Hola como va</Heading>
          </Box>
        )}
      </Flex>
    </Flex>
  );
}
