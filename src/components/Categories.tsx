import { Link } from "react-router-dom";
import { Box, Container, Text, SimpleGrid, Heading } from "@chakra-ui/react";
import { IoShirtSharp } from "react-icons/io5";
import {
  GiArmoredPants,
  GiUnderwearShorts,
  GiRunningShoe,
  GiHoodie,
  GiBilledCap,
  GiDoubleNecklace,
  GiMonclerJacket,
} from "react-icons/gi";
import { GrStackOverflow } from "react-icons/gr";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterReducer } from "../redux/reducers/filterReducer";

export function Categories() {
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([
    {
      name: "Tops",
      icon: <IoShirtSharp />,
      filter: "tops",
    },
    {
      name: "Bottoms",
      icon: <GiArmoredPants />,
      filter: "bottoms",
    },
    {
      name: "Underwear",
      icon: <GiUnderwearShorts />,
      filter: "underwear",
    },
    {
      name: "Shoes",
      icon: <GiRunningShoe />,
      filter: "shoes",
    },
    {
      name: "Outerwear",
      icon: <GiHoodie />,
      filter: "outerwear",
    },
    {
      name: "Accessories",
      icon: <GiBilledCap />,
      filter: "accessories",
    },
    {
      name: "Jewelry",
      icon: <GiDoubleNecklace />,
      filter: "jewelry",
    },
    {
      name: "Brands",
      icon: <GiMonclerJacket />,
      filter: "brands",
    },
    {
      name: "All",
      icon: <GrStackOverflow />,
      filter: "all",
    },
  ]);

  const handleClick = (filter) => {
    dispatch(filterReducer(filter));
  };

  return (
    <Box
      bg="gray.100"
      w="100%"
      h="100%"
      p={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container maxW="container.xl">
        <Heading
          as="h2"
          size="lg"
          textAlign="center"
          mb={4}
          color="gray.700"
          fontWeight="bold"
        >
          Categories
        </Heading>
        <SimpleGrid columns={[1, 2, 3, 4, 5, 6, 7, 8, 9]} spacing={4}>
          {categories.map((category) => (
            <Box
              key={category.name}
              w="100%"
              h="100%"
              p={4}
              bg="white"
              borderRadius="md"
              boxShadow="md"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              cursor="pointer"
              onClick={() => handleClick(category.filter)}
            >
              <Box
                w="100%"
                h="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Box
                  w="100%"
                  h="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  mb={2}
                >
                  {category.icon}
                </Box>
                <Text
                  as="h3"
                  size="md"
                  textAlign="center"
                  color="gray.700"
                  fontWeight="bold"
                >
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

/*  return (
    <Container maxW={"90%"} m={0} p="0" w="100%" h={"100%"} mt="2rem">
      <Heading fontWeight={"light"} fontSize="24" ml="1rem">
        Product Categories:
      </Heading>
      <SimpleGrid
        mb="2rem"
        columns={{ sm: 2, md: 4 }}
        spacing="4"
        p="5"
        textAlign="center"
        rounded="lg"
        color="gray.400"
        h={"100%"}
      >
        <Box boxShadow="dark-lg" rounded="md" bg="white" role="group">
          <Box
            as={Link}
            to="/products"
            display={"flex"}
            alignItems="center"
            p={"10px"}
            flexDir={"column"}
            justifyContent={"center"}
            w={"100%"}
            h="100%"
            _groupHover={{
              visibility: "visible",
              background:
                "radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)",
            }}
          >
            <Box
              borderRadius={"full"}
              bgColor="grey"
              color={"white"}
              p="1"
              w={"2rem"}
              h="2rem"
            >
              <GrStackOverflow size={"100%"} />
            </Box>
            <Text fontSize={"small"}>ALL</Text>
          </Box>
        </Box>

        <Box boxShadow="dark-lg" rounded="md" bg="white" role="group">
          <Box
            as={Link}
            to="/products"
            display={"flex"}
            alignItems="center"
            p={"10px"}
            flexDir={"column"}
            justifyContent={"center"}
            w={"100%"}
            h="100%"
            _groupHover={{
              visibility: "visible",
              background:
                "radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)",
            }}
          >
            <Box
              borderRadius={"full"}
              bgColor="grey"
              color={"white"}
              p="1"
              w={"2rem"}
              h="2rem"
            >
              <IoShirtSharp size={"100%"}></IoShirtSharp>
            </Box>
            <Text fontSize={"small"}>SHIRTS</Text>
          </Box>
        </Box>
        <Box boxShadow="dark-lg" rounded="md" bg="white" role="group">
          <Box
            as={Link}
            to="/products"
            display={"flex"}
            alignItems="center"
            p={"10px"}
            flexDir={"column"}
            justifyContent={"center"}
            w={"100%"}
            h="100%"
            _groupHover={{
              visibility: "visible",
              background:
                "radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)",
            }}
          >
            <Box
              borderRadius={"full"}
              bgColor="grey"
              color={"white"}
              p="1"
              w={"2rem"}
              h="2rem"
            >
              <GiArmoredPants size={"100%"}></GiArmoredPants>
            </Box>
            <Text fontSize={"small"}>PANTS</Text>
          </Box>
        </Box>
        <Box boxShadow="dark-lg" rounded="md" bg="white" role="group">
          <Box
            as={Link}
            to="/products"
            display={"flex"}
            alignItems="center"
            p={"10px"}
            flexDir={"column"}
            justifyContent={"center"}
            w={"100%"}
            h="100%"
            _groupHover={{
              visibility: "visible",
              background:
                "radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)",
            }}
          >
            <Box
              borderRadius={"full"}
              bgColor="grey"
              color={"white"}
              p="1"
              w={"2rem"}
              h="2rem"
            >
              <GiUnderwearShorts size={"100%"}></GiUnderwearShorts>
            </Box>
            <Text fontSize={"small"}>UNDERWEAR</Text>
          </Box>
        </Box>
        <Box boxShadow="dark-lg" rounded="md" bg="white" role="group">
          <Box
            as={Link}
            to="/products"
            display={"flex"}
            alignItems="center"
            p={"10px"}
            flexDir={"column"}
            justifyContent={"center"}
            w={"100%"}
            h="100%"
            _groupHover={{
              visibility: "visible",
              background:
                "radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)",
            }}
          >
            <Box
              borderRadius={"full"}
              bgColor="grey"
              color={"white"}
              p="1"
              w={"2rem"}
              h="2rem"
            >
              <GiRunningShoe size={"100%"}></GiRunningShoe>
            </Box>
            <Text fontSize={"small"}>SHOES</Text>
          </Box>
        </Box>
        <Box boxShadow="dark-lg" rounded="md" bg="white" role="group">
          <Box
            as={Link}
            to="/products"
            display={"flex"}
            alignItems="center"
            p={"10px"}
            flexDir={"column"}
            justifyContent={"center"}
            w={"100%"}
            h="100%"
            _groupHover={{
              visibility: "visible",
              background:
                "radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)",
            }}
          >
            <Box
              borderRadius={"full"}
              bgColor="grey"
              color={"white"}
              p="1"
              w={"2rem"}
              h="2rem"
            >
              <GiHoodie size={"100%"}></GiHoodie>
            </Box>
            <Text fontSize={"small"}>HOODIES</Text>
          </Box>
        </Box>
        <Box boxShadow="dark-lg" rounded="md" bg="white" role="group">
          <Box
            as={Link}
            to="/products"
            display={"flex"}
            alignItems="center"
            p={"10px"}
            flexDir={"column"}
            justifyContent={"center"}
            w={"100%"}
            h="100%"
            _groupHover={{
              visibility: "visible",
              background:
                "radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)",
            }}
          >
            <Box
              borderRadius={"full"}
              bgColor="grey"
              color={"white"}
              p="1"
              w={"2rem"}
              h="2rem"
            >
              <GiMonclerJacket size={"100%"} />
            </Box>
            <Text fontSize={"small"}>JACKETS</Text>
          </Box>
        </Box>

        <Box boxShadow="dark-lg" rounded="md" bg="white" role="group">
          <Box
            as={Link}
            to="/products"
            display={"flex"}
            alignItems="center"
            p={"10px"}
            flexDir={"column"}
            justifyContent={"center"}
            w={"100%"}
            h="100%"
            _groupHover={{
              visibility: "visible",
              background:
                "radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)",
            }}
          >
            <Box
              borderRadius={"full"}
              bgColor="grey"
              color={"white"}
              p="1"
              w={"2rem"}
              h="2rem"
            >
              <GiBilledCap size={"100%"} />
            </Box>
            <Text fontSize={"small"}>CAPS</Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
  */
