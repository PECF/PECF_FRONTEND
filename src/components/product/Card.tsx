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
  
  function handleFavorite(){
    
  }
  

  return (
    <Stack
      maxW="sm"
      
      mt='2rem' mb='2rem' spacing={useBreakpointValue({ base: '4', md: '5' })}
      backgroundColor={'white'}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      _hover={{ transform:'scale(1.1)' }}
      transition="all 0.2s"
      cursor="pointer"
      
      ml="2rem"
      >
      <Box position="relative" >
        <Link to={`/product/${product._id}`}>
        <Image
          src={image[0].url}
          alt={name}
          draggable="false"
          fallback={<Skeleton />}
          borderRadius={useBreakpointValue({ base: "md", md: "xl" })}
          />
        </Link>
        
        <FavouriteButton
          onClick={handleFavorite}
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${name} to your favourites`}
        />
      
      </Box>
      <Link to={`/product/${product._id}`}>
        <Stack p={'10px'}>
          <Stack spacing="1" p={'10px'}>
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
      </Link>
    </Stack>
  );
};
