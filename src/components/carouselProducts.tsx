import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../components/Card";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import React from "react";

import {
  Box,
  Flex,
  useColorModeValue,
  Heading,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRecoveryData } from "../hooks/useRecoveryData";

import { SecondSlider } from "../constant/Home";

export function Carousel() {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const { products } = useRecoveryData("productList");

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "5px" });

  return (
    <Flex
      flexDir={"column"}
      alignItems="center"
      justifyContent={"center"}
      position={"relative"}
      left="50%"
      transform="translate(-50%)"
      bgColor={"whiteAlpha.800"}
      borderRadius="20px"
      border={useColorModeValue("5px solid #e2e8f0", "5px solid #2d3748")}
      width="100%"
      mb="5rem"
      mt="5rem">
      <Heading>Based on your latest searches</Heading>

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

        <Slider {...SecondSlider} ref={(slider) => setSlider(slider)}>
          {products.map((product: any, index: any) => (
            <Card key={index} product={product} />
          ))}
        </Slider>
      </Box>
    </Flex>
  );
}
