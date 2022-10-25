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

export function Carousel({ text, name }: any) {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const { products } = useRecoveryData(name);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "5px" });

  return (
    <Flex
      flexDir={"column"}
      alignItems="center"
      justifyContent={"center"}
      position={"relative"}
      left="44%"
      transform="translate(-50%)"
      borderRadius="20px"
      width="90%"
      mb="3rem"
      // mt="5rem"
    >
      <Heading
        ml={"1rem"}
        width={"100%"}
        fontSize="24"
        fontWeight="light">{`${text}:`}</Heading>

      <Box
        overflow={"hidden"}
        position={"relative"}
        alignSelf={"center"}
        marginTop="10px"
        width="100%">
        <Box
          className="arrows"
          height={"100%"}
          _hover={{
            visibility: "visible",
          }}>
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
        </Box>

        <Slider {...SecondSlider} ref={(slider) => setSlider(slider)}>
          {products.map((product: any, index: any) => (
            <Card key={index} product={product} />
          ))}
        </Slider>
      </Box>
    </Flex>
  );
}
