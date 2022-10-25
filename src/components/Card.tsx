import React from "react";
import {
  Box,
  Badge,
  Text,
  Stack,
  Spacer,
  Flex,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const Card = ({ product }: any) => {
  return (
    <Flex
      alignItems="flex-end"
      ml={5}
      boxShadow={"lg"}
      cursor={"pointer"}
      data-test-id="product"
      direction="column"
      justifyContent="space-between"
      position="relative"
      rounded="md"
      transition="transform 0.2s"
      bg={useColorModeValue("white", "gray.800")}
      h={"40vh"}
      // onClick={handleClick}
      // {...props}
    >
      <Image
        // fadeIn
        mt={2}
        height={{ base: 48, sm: 64 }}
        src={product.image[0].url}
        width="100%"
      />
      <Box
        display="flex"
        flex={1}
        flexDirection="column"
        height="100%"
        justifyContent="space-between"
        paddingTop={2}
        width="100%">
        <Text
          display="block"
          fontSize="md"
          fontWeight={500}
          lineHeight="normal"
          margin={5}
          overflowWrap="break-word">
          {product.name}
        </Text>

        <Stack isInline alignItems="center">
          <Text
            color="green.500"
            fontSize="lg"
            fontWeight={500}
            lineHeight={1}
            ml={5}
            mb={5}>
            {`$ ${product.price}`}
          </Text>
        </Stack>

        {/* <Stack isInline alignItems="center">
          <Text color="green.500" fontSize="sm" fontWeight={500} lineHeight={1}>
            {"price prmotion"}
          </Text>

          <Text
            color="gray.500"
            fontSize="sm"
            lineHeight={1}
            textDecoration="line-through">
            {"price Original"}
          </Text>
        </Stack>

        <Text color="yellow.500" fontSize="sm" fontWeight={500} lineHeight={1}>
          Sin stock
        </Text>

        <Text color="green.500" fontSize="sm" fontWeight={500} lineHeight={1}>
          {"rango de precio"}
        </Text>

        <Text color="green.500" fontSize="sm" fontWeight={500} lineHeight={1}>
          A consultar
        </Text> */}
      </Box>
    </Flex>
  );

  //   <Box
  //     w="14.5rem"
  //     h="18rem"
  //     rounded="20px"
  //     boxShadow="sm"
  //     bg="lightgrey"
  //     bgImage={product.image[0].url}
  //     bgSize="cover"
  //     bgRepeat="no-repeat"
  //     display="flex"
  //     role="group">
  //     <Box
  //       h="100%"
  //       w="100%"
  //       p={5}
  //       display="flex"
  //       flexDirection="column"
  //       visibility={"hidden"}
  //       opacity="0"
  //       justifyContent="center"
  //       alignItems={"center"}
  //       _groupHover={{
  //         transition: "ease",
  //         visibility: "visible",
  //         opacity: "0.9",
  //       }}
  //       transition={"visibility 0.8s linear 0.2s"}>
  //       <Box display="flex" flexDir="column">
  //         <Stack isInline align="center">
  //           <Badge variant="solid" colorScheme="teal" rounded="full" px={2}>
  //             70% OFF!
  //           </Badge>
  //           <Spacer />
  //           <Badge variant="solid" colorScheme="teal" rounded="full" px={2}>
  //             FREE SHIPING!
  //           </Badge>
  //         </Stack>
  //       </Box>
  //       <Spacer />

  //       <Spacer />
  //       <Box display={"flex"} flexDir="column" alignItems={"center"}>
  //         <Text
  //           color="black"
  //           fontWeight="semibold"
  //           fontSize="l"
  //           backgroundColor={"white"}
  //           borderRadius="2xl"
  //           p={"5px"}>
  //           ${product.price}
  //         </Text>
  //         <Text
  //           as="h2"
  //           backgroundColor={"white"}
  //           borderRadius="2xl"
  //           p={"5px"}
  //           fontWeight="semibold"
  //           fontSize="sm"
  //           my={2}
  //           textTransform="uppercase"
  //           color="black">
  //           {product.name}
  //         </Text>
  //         <Stack isInline justify="space-between">
  //           <Box as="span">
  //             {Array(product.rating)
  //               .fill("")
  //               .map((_, i) => (
  //                 <StarIcon color="teal.500" key={i} />
  //               ))}
  //           </Box>
  //         </Stack>
  //       </Box>
  //     </Box>
  //   </Box>
  // );
};
