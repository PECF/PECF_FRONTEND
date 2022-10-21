import {
  BiLeftArrowAlt,
  BiRightArrowAlt,
  BiRightArrow,
  BiLeftArrow,
} from "react-icons/bi";
import Slider from "react-slick";
import React from "react";
import { Card } from "../components/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "../components/SliderCard";
import { useRecoveryData } from "../hooks/useRecoveryData";
import getRandomInt from "../commonFunction/getRandomInt";
import products from "../constant/ProductsTest";
import { FirstSlider, SecondSlider } from "../constant/Home";

import {
  Box,
  Container,
  Heading,
  Flex,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Home() {
  // As we have used custom buttons, we need a reference variable to
  // change the state

  // const { error, products, loading } = useRecoveryData("products");

  const [slider, setSlider] = React.useState<Slider | null>(null);
  const [slider2, setSlider2] = React.useState<Slider | null>(null);
  const [slider3, setSlider3] = React.useState<Slider | null>(null);
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
      p={"10"}
      bgColor="lightgray"
      ml={0}
      maxWidth="100vw"
      minHeight="lg">
      <Flex
        minWidth="max-content"
        width={"100%"}
        alignItems="center"
        justifyContent={"center"}>
        <Heading mt="20px">Welcome to KALÚ Web Page</Heading>
      </Flex>

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
            {Baner.map((img, index) => (
              <SliderCard image={`${img}`} key={index} />
            ))}
          </Slider>
        </Box>
        <Box
          width={"35%"}
          height={"25vh"}
          bgSize="cover"
          bgImg={
            "https://media.istockphoto.com/photos/mens-suits-on-hangers-in-different-colors-picture-id887360960?k=20&m=887360960&s=612x612&w=0&h=N0k2yX9noV6kNgpmKbcSXaLOl2x8Mbt_lyppAmfhNcA="
          }></Box>
        <Box
          width={"35%"}
          height={"25vh"}
          bgSize="cover"
          bgImg="https://media.istockphoto.com/photos/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-picture-id1208148708?k=20&m=1208148708&s=612x612&w=0&h=rjZiAPCOpwREiTET21lTP3wM30BUqAG9PjocC-euJ98="></Box>
        <Box
          width={"35%"}
          height={"25vh"}
          bgSize="cover"
          bgImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzorsnZK_FNGOBVuxZT95bfnOhtQ1bPCU8kxlumfHi9g_NCZlFCvR81o3JcTZ59Ndr__o&usqp=CAU"></Box>
        <Box
          width={"35%"}
          height={"25vh"}
          bgSize="cover"
          bgImg="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?w=2000"></Box>
      </Flex>

      {products.length > 0 && (
        <>
          <Flex
            flexDir={"column"}
            alignItems="center"
            bgColor={"whiteAlpha.800"}
            borderRadius="20px"
            m={"2rem"}>
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
                {Array(products.length)
                  .fill("")
                  .map((_, i) => (
                    <Card key={i} />
                  ))}
              </Slider>
            </Box>
          </Flex>
          <Flex
            flexDir={"column"}
            alignItems="center"
            bgColor={"whiteAlpha.800"}
            borderRadius="20px"
            m={"2rem"}>
            <Heading>Recomended for You:</Heading>

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
                {Array(12)
                  .fill("")
                  .map((_, i) => (
                    <Card key={i} />
                  ))}
              </Slider>
            </Box>
          </Flex>
        </>
      )}
    </Container>
  );
}
