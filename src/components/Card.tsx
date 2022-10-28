import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  
  Skeleton,
  Stack,
  StackProps,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { Rating } from './Rating'
import { FavouriteButton } from './FavouriteButton'
import { PriceTag } from './PriceTag'
import { Link } from 'react-router-dom'


interface Props {
  product: any
  rootProps?: StackProps
}

export const Card = (props: Props) => {
  const { product, rootProps } = props
  const { name, image, price, rating } = product
  
  return (
    <Stack mr='17px' pt='1rem' pb='2rem' spacing={useBreakpointValue({ base: '4', md: '5' })} {...rootProps} _hover={{transform: 'scale(1.1)', zIndex:'100'}}>

      <Box position="relative" >
          
        <Link to={`/product/${product._id}`}>
          <AspectRatio ratio={4 / 3}>
            <Image
              position={'absolute'}
              src={image[0].url}
              alt={name}
              draggable="false"
              fallback={<Skeleton />}
              borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })}
              />
          </AspectRatio>
        </Link>
        
        <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${name} to your favourites`}
          />
      
      </Box>
      
      <Link to={`/product/${product._id}`} >
        <Stack>
          <Stack zIndex={'1'} spacing="1" >
            <Text fontWeight="medium" noOfLines={[1]} maxHeight={'2rem'} overflow='hidden' color={useColorModeValue('gray.700', 'gray.400')}>
              {name}
            </Text>
            <PriceTag price={price} currency="USD" />
          </Stack>
        </Stack>
      </Link>
          
      <Stack align="center">
        <Button colorScheme="blue" width="full">
          Add to cart
        </Button>
        
      </Stack>
    </Stack>
  )
}
