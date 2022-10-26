import {Flex,useBreakpointValue,Box,IconButton}from "@chakra-ui/react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import Slider from "react-slick";
import React from "react";



const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
};


export function CarouselDetailProducts(array: any) {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  console.log(array)

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  return (
    <Flex w={"full"} h={"30vh"} mb='10rem' mt={'5rem'}>
      <Box
        position={"relative"}
        height={"50vh"}
        width={"full"}
        overflow={"hidden"}>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <IconButton
          aria-label="left-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          bgColor="teal.500"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}>
          <BiLeftArrow />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          right={side}
          bgColor="teal.500"
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}>
          <BiRightArrow />
        </IconButton>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {array.map((image : any, index : any)  => (
            <Box
              key={index}
              height={"2xl"}
              width={"full"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${image.url})`}
            />
          ))}
        </Slider>
      </Box>
    </Flex>
  );
}
