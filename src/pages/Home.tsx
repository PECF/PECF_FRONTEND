import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import SliderCard from "../components/SliderCard";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../components/Card";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import Slider from "react-slick";
import React from "react";
import {
  Box,
  Container,
  Heading,
  Flex,
  IconButton,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import { useRecoveryData } from "../hooks/useRecoveryData";

import { FirstSlider, SecondSlider } from "../constant/Home";

export function Home() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const [slider2, setSlider2] = React.useState<Slider | null>(null);
  const [slider3, setSlider3] = React.useState<Slider | null>(null);

  const { products } = useRecoveryData("productList");

  // console.log(products[0].image[0].url);
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "5px" });

  // These are the images used in the slide1
  const Baner = [
    "https://st.depositphotos.com/64696058/60658/i/450/depositphotos_606584616-stock-photo-dawn-mid-august-morning-daybreaks.jpg",
    "https://pbs.twimg.com/media/BvlTVuGIEAAxZcw?format=jpg&name=small",
    "https://i.blogs.es/ca0bd0/photographer-1st-kelvinyuen-3/450_1000.jpg",
  ];

  return (
    <Container
      className="HomeCont"
      p={"10"}
      bgColor="lightgray"
      ml={0}
      maxWidth="100vw"
      minHeight="lg">
      {/* <Flex
        minWidth="max-content"
        width={"100%"}
        alignItems="center"
        justifyContent={"center"}>
        <Heading mt="20px">Welcome to KALÚ Web Page</Heading>
      </Flex> */}

      <Flex
        maxWidth={"90%"}
        mt={"10px"}
        flexDir={"column"}
        flexWrap="wrap"
        maxH={"50vh"}
        justifyItems="center">
        <Box
          overflow={"hidden"}
          position={"relative"}
          padding="0"
          maxWidth="40%">
          <IconButton
            aria-label="left-arrow"
            colorScheme="messenger"
            borderRadius="full"
            position="absolute"
            left={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            bgColor="teal.500"
            onClick={() => slider?.slickPrev()}>
            <BiLeftArrow />
          </IconButton>

          <IconButton
            aria-label="right-arrow"
            colorScheme="messenger"
            borderRadius="full"
            position="absolute"
            right={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            bgColor="teal.500"
            onClick={() => slider?.slickNext()}>
            <BiRightArrow />
          </IconButton>

          <Slider {...FirstSlider} ref={(slider) => setSlider(slider)}>
            {/* products[0].image[0].url */}
            {products.map((product: any, index: number) => {
              return (
                <SliderCard image={`${product.image[0].url}`} key={index} />
              );
            })}
          </Slider>
        </Box>
        <Box
          role={"group"}
          width={"35%"}
          height={"25vh"}
          bgSize="cover"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          bgImg={
            "https://media.istockphoto.com/photos/mens-suits-on-hangers-in-different-colors-picture-id887360960?k=20&m=887360960&s=612x612&w=0&h=N0k2yX9noV6kNgpmKbcSXaLOl2x8Mbt_lyppAmfhNcA="
          }>
          <Box
            visibility={"hidden"}
            backgroundColor="gray.300"
            opacity={"0"}
            boxSize={"100%"}
            display={"flex"}
            flexDir="column"
            justifyContent="center"
            alignItems={"center"}
            _groupHover={{
              visibility: "visible",
              opacity: "0.7",
            }}>
            <Text as="b" color={"black"} _hover={{ opacity: 1 }}>
              Men Clothes
            </Text>
            <Button
              as={Link}
              to={""}
              _hover={{ opacity: 1, backgroundColor: "white" }}
              variant={"outline"}>
              See more
            </Button>
          </Box>
        </Box>
        <Box
          role={"group"}
          width={"35%"}
          height={"25vh"}
          bgSize="cover"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          bgImg="https://media.istockphoto.com/photos/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-picture-id1208148708?k=20&m=1208148708&s=612x612&w=0&h=rjZiAPCOpwREiTET21lTP3wM30BUqAG9PjocC-euJ98=">
          <Box
            visibility={"hidden"}
            backgroundColor="gray.300"
            opacity={"0"}
            boxSize={"100%"}
            display={"flex"}
            flexDir="column"
            justifyContent="center"
            alignItems={"center"}
            _groupHover={{
              visibility: "visible",
              opacity: "0.7",
            }}>
            <Text as="b" color={"black"} _hover={{ opacity: 1 }}>
              Women Clothes
            </Text>
            <Button
              as={Link}
              to={""}
              _hover={{ opacity: 1, backgroundColor: "white" }}
              variant={"outline"}>
              See More
            </Button>
          </Box>
        </Box>
        <Box
          role={"group"}
          width={"35%"}
          height={"25vh"}
          bgSize="cover"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          bgImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzorsnZK_FNGOBVuxZT95bfnOhtQ1bPCU8kxlumfHi9g_NCZlFCvR81o3JcTZ59Ndr__o&usqp=CAU">
          <Box
            visibility={"hidden"}
            backgroundColor="gray.300"
            opacity={"0"}
            boxSize={"100%"}
            display={"flex"}
            flexDir="column"
            justifyContent="center"
            alignItems={"center"}
            _groupHover={{
              visibility: "visible",
              opacity: "0.7",
            }}>
            <Text as="b" color={"black"} _hover={{ opacity: 1 }}>
              Child Clothes
            </Text>
            <Button
              as={Link}
              to={""}
              _hover={{ opacity: 1, backgroundColor: "white" }}
              variant={"outline"}>
              See more
            </Button>
          </Box>
        </Box>
        <Box
          role={"group"}
          width={"35%"}
          height={"25vh"}
          bgSize="cover"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          bgImg="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?w=2000">
          <Box
            visibility={"hidden"}
            backgroundColor="gray.300"
            opacity={"0"}
            boxSize={"100%"}
            display={"flex"}
            flexDir="column"
            justifyContent="center"
            alignItems={"center"}
            _groupHover={{
              visibility: "visible",
              opacity: "0.7",
            }}>
            <Text as="b" color={"black"} _hover={{ opacity: 1 }}>
              Accesories
            </Text>
            <Button
              as={Link}
              to={""}
              _hover={{ opacity: 1, backgroundColor: "white" }}
              variant={"outline"}>
              See more
            </Button>
          </Box>
        </Box>
      </Flex>

      <Flex
        flexDir={"column"}
        alignItems="center"
        justifyContent={"center"}
        position={"relative"}
        left="50%"
        transform="translate(-50%)"
        bgColor={"whiteAlpha.800"}
        borderRadius="20px"
        width="80%"
        mb="5rem"
        mt="5rem">
        <Heading>For Sale</Heading>

        <Box
          overflow={"hidden"}
          position={"relative"}
          alignSelf={"center"}
          marginTop="10px"
          width="100%">
          <IconButton
            aria-label="left-arrow"
            colorScheme="messenger"
            borderRadius="full"
            position="absolute"
            left={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            bgColor="teal.500"
            onClick={() => slider2?.slickPrev()}>
            <BiLeftArrow />
          </IconButton>

          <IconButton
            aria-label="right-arrow"
            colorScheme="messenger"
            borderRadius="full"
            position="absolute"
            right={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            bgColor="teal.500"
            onClick={() => slider2?.slickNext()}>
            <BiRightArrow />
          </IconButton>

          <Slider {...SecondSlider} ref={(slider) => setSlider2(slider)}>
            {products.map((product: any, index: any) => (
              <Card key={index} product={product} />
            ))}
          </Slider>
        </Box>
      </Flex>

      <Flex
        flexDir={"column"}
        alignItems="center"
        justifyContent={"center"}
        position={"relative"}
        left="50%"
        transform="translate(-50%)"
        bgColor={"whiteAlpha.800"}
        borderRadius="20px"
        width="80%">
        <Heading
          width={"100%"}
          fontWeight="normal"
          mt="1rem"
          ml="2rem"
          textAlign={"start"}
          fontSize={"x-large"}
          height={"fit-content"}>
          Recomended for You:
        </Heading>

        <Box
          overflow={"hidden"}
          position={"relative"}
          alignSelf={"center"}
          display="flex"
          flexDir={"column"}
          justifyContent="center"
          width="100%">
          <IconButton
            aria-label="left-arrow"
            colorScheme="messenger"
            borderRadius="full"
            position="absolute"
            left={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            bgColor="teal.500"
            onClick={() => slider3?.slickPrev()}>
            <BiLeftArrow />
          </IconButton>

          <IconButton
            aria-label="right-arrow"
            colorScheme="messenger"
            borderRadius="full"
            position="absolute"
            right={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            bgColor="teal.500"
            onClick={() => slider3?.slickNext()}>
            <BiRightArrow />
          </IconButton>

          <Slider {...SecondSlider} ref={(slider) => setSlider3(slider)}>
            {products.map((product: any, index: any) => (
              <Card key={index} product={product} />
            ))}
          </Slider>
        </Box>
      </Flex>
    </Container>
  );
}