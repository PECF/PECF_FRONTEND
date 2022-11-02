import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Text,
  SimpleGrid,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoShirtSharp, IoWomanSharp } from "react-icons/io5";
import {
  GiArmoredPants,
  GiUnderwearShorts,
  GiRunningShoe,
  GiHoodie,
  GiBilledCap,
  GiMonclerJacket,
  GiBracer,
  GiUnderwear,
} from "react-icons/gi";
import { GrStackOverflow } from "react-icons/gr";
import { IoMan } from "react-icons/io5";
import { FaChild } from "react-icons/fa";
import React, { useState } from "react";

export function Categories() {
  const [categories, setCategories] = useState([
    {
      name: "All",
      icon: <GrStackOverflow />,
      filter: "all",
    },
    {
      name: "Shirts",
      icon: <IoShirtSharp />,
      filter: "Shirts",
    },
    {
      name: "Pants",
      icon: <GiArmoredPants />,
      filter: "Pants",
    },
    {
      name: "Underwear",
      icon: <GiUnderwear />,
      filter: "underwear",
    },
    {
      name: "Shoes",
      icon: <GiRunningShoe />,
      filter: "shoes",
    },
    {
      name: "Hoodies",
      icon: <GiHoodie />,
      filter: "Hoodies",
    },
    {
      name: "Caps",
      icon: <GiBilledCap />,
      filter: "Caps",
    },
    {
      name: "Jackets",
      icon: <GiMonclerJacket />,
      filter: "Jackets",
    },
    {
      name: "Accesories",
      icon: <GiBracer />,
      filter: "Accesories",
    },
    {
      name: "Men",
      icon: <IoMan />,
      filter: "Men",
    },
    {
      name: "Women",
      icon: <IoWomanSharp />,
      filter: "Women",
    },
    {
      name: "Kids",
      icon: <FaChild />,
      filter: "Kids",
    },
  ]);

  return (
    <Box
      w="100%"
      h="100%"
      p={4}
      display="flex"
      justifyContent="center"
      alignItems="center">
      <Container maxW="container.xl">
        <Heading as="h2" size="lg" textAlign="center" mb={4} fontWeight="bold">
          Categories
        </Heading>
        <SimpleGrid columns={[2, null, 4]} spacing={4}>
          {categories.map((category) => (
            <Box
              key={category.name}
              as={Link}
              to={`/products/${category.name.toLowerCase()}`}
              w="100%"
              h="100%"
              p={4}
              borderRadius="md"
              boxShadow="md"
              display="flex"
              bg={useColorModeValue("white", "gray.800")}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              cursor="pointer">
              <Box
                w="100%"
                h="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column">
                <Box
                  w="100%"
                  h="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  mb={2}>
                  {category.icon}
                </Box>
                <Text as="h3" size="md" textAlign="center" fontWeight="bold">
                  {category.name}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
