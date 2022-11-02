import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import React, { useState } from "react";

import {
  Box,
  Flex,
  Heading,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRecoveryData } from "../../hooks/useRecoveryData";

import { ProductCard } from "./Card";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  pauseOnHover: true,
  slidesToShow: 6,
  initialSlide: 1,

  responsive: [
    {
      breakpoint: 1360,
      settings: {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 1030,
      settings: {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        slidesToShow: 1.1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20px",
      },
    },
  ],
};

export function Carousel({ text, name }: { text: string; name: string }) {
  const [slider, setSlider] = useState<Slider | null>(null);

  const { products } = useRecoveryData(name);

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
      borderRadius="20px"
      width="100%"
      mt={"2.5rem"}
      mb={"2.5rem"}>
      <Heading ml={"1rem"} width={"100%"} fontSize="24" fontWeight="light">
        {`${text}:`}
      </Heading>

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
          {useBreakpointValue({ base: false, md: true }) ? (
            <>
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
            </>
          ) : null}
        </Box>

        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {products.map((product: any, index: any) => (
            <ProductCard key={index} product={product} />
          ))}
        </Slider>
      </Box>
    </Flex>
  );
}
