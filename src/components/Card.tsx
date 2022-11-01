import React from "react";
import { Box, Badge, Text, Stack, Spacer } from "@chakra-ui/react";

export const Card = ({ product }: any) => {
  return (
    <Box
      w="12.5rem"
      h="16rem"
      rounded="20px"
      boxShadow="xs"
      bg="lightgrey"
      bgImage={product.image[0].url}
      bgSize="cover"
      bgRepeat="no-repeat"
      display="flex"
      role="group">
      <Box
        h="100%"
        w="100%"
        p={5}
        display="flex"
        flexDirection="column"
        visibility={"hidden"}
        opacity="0"
        justifyContent="center"
        alignItems={"center"}
        _groupHover={{
          transition: "ease",
          visibility: "visible",
          opacity: "0.9",
        }}
        transition={"visibility 0.8s linear 0.2s"}>
        <Box display="flex" flexDir="column">
          <Stack isInline align="center">
            <Badge variant="solid" colorScheme="teal" rounded="full" px={2}>
              70% OFF!
            </Badge>
            <Spacer />
            <Badge variant="solid" colorScheme="teal" rounded="full" px={2}>
              FREE SHIPING!
            </Badge>
          </Stack>
        </Box>
        <Spacer />

        <Spacer />
        <Box display={"flex"} flexDir="column" alignItems={"center"}>
          <Text
            color="black"
            fontWeight="semibold"
            fontSize="l"
            backgroundColor={"white"}
            borderRadius="2xl"
            p={"5px"}>
            ${product.price}
          </Text>
          <Text
            as="h2"
            backgroundColor={"white"}
            borderRadius="2xl"
            p={"5px"}
            fontWeight="semibold"
            fontSize="sm"
            my={2}
            textAlign="center"
            textTransform="uppercase"
            color="black">
            {product.name}
          </Text>
          <Stack isInline justify="space-between">
            <Box as="span">
              {/* {Array(product.rating)
                .fill("")
                .map((_, i) => (
                  <StarIcon color="teal.500" key={i} />
                ))} */}
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
