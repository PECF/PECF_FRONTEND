import React from "react";
import { Box, Badge, Text, Stack, Spacer, IconButton } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { FiEye} from 'react-icons/fi'
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <Box
      w="14.5rem"
      h="18rem"
      rounded="20px"
      boxShadow="sm"
      bg="lightgrey"
      bgImage='"https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/preview/07.jpg?3"'
      
      bgSize="cover"
      bgRepeat="no-repeat"
      display="flex"
      margin={"5%"}
      role='group'
      >

      <Box 
      h="100%" 
      w="100%" 
      p={5} 
      display="flex" 
      flexDirection="column" 
      visibility={'hidden'}
      opacity='0'
      justifyContent='center'
      alignItems={'center'}
      _groupHover={{
        transition:'ease',
        visibility: 'visible',
        opacity:'0.9'
        
      }}
      transition={'visibility 0.8s linear 0.2s'}>
        
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
        <Spacer/>
        <IconButton
        aria-label="View"
        rounded={'full'}
        width='fit-content'
        position={'relative'}
        top='10%'
        as={Link}
        to=''
        >
          <FiEye/>
        </IconButton>
        <Spacer/>
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
