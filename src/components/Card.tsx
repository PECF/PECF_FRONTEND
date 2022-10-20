import React from "react";
import { Box, Badge, Text, Stack, Spacer } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const Card = () => {
  return (
    <Box
      w="14.5rem"
      h="18rem"
      rounded="20px"
      boxShadow="sm"
      bg="lightgrey"
      bgImage='"https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/preview/07.jpg?3"'
      overflow="hidden"
      bgSize="cover"
      bgRepeat="no-repeat"
      display="flex"
      margin={"10%"}>
      <Box h="100%" w="100%" p={5} display="flex" flexDirection="column">
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
        <Box display={'flex'} flexDir='column' alignItems={'center'}>
          <Text
            as="h2"
            fontWeight="semibold"
            fontSize="sm"
            my={2}
            textTransform="uppercase"
            color="white">
            Product Name
          </Text>
          <Stack isInline justify="space-between">
            <Text color="white" fontWeight="semibold" fontSize="l">
              $Price
            </Text>
            <Box as="span">
              {Array(4)
                .fill("")
                .map((_, i) => (
                  <StarIcon color="teal.500" key={i} />
                ))}
              <StarIcon color="grey" />
            </Box>
            
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
