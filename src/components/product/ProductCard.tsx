import { Link } from "react-router-dom";
import {
  Box,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { Rating } from "./Rating";
import { FavouriteButton } from "./FavouriteButton";
import { PriceTag } from "./PriceTag";

export const ProductCard = ({ product }: any) => {
  const { name, image, price, rating, numReviews } = product;
  return (
    <Stack
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      _hover={{ shadow: "xl" }}
      transition="all 0.2s"
      cursor="pointer"
      as={Link}
      ml="2rem"
      to={`/product/${product._id}`}>
      <Box position="relative">
        <Image
          src={image[0].url}
          alt={name}
          draggable="false"
          fallback={<Skeleton />}
          borderRadius={useBreakpointValue({ base: "md", md: "xl" })}
        />
        <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${name} to your favourites`}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}>
            {name.length > 20 ? name.substring(0, 30) + "..." : name}
          </Text>
          <PriceTag price={price} currency="USD" />
        </Stack>
        <HStack>
          <Rating defaultValue={rating} size="sm" />
          <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
            {numReviews} reviews
          </Text>
        </HStack>
      </Stack>
    </Stack>
  );
};
