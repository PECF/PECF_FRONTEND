import {
  Flex,
  useBreakpointValue,
  Box,
  IconButton,
  Image,
} from "@chakra-ui/react";
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

export function Banner() {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const cards = [
    "https://www.nicepng.com/png/detail/593-5933043_promotion-banner-png-promotional-banners.png",
    "https://static.vecteezy.com/system/resources/thumbnails/002/453/533/small_2x/big-sale-discount-banner-template-promotion-illustration-free-vector.jpg",
  ];

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  return (
    <Flex w={"full"} h={"25vh"} mb="5rem" mt={"1rem"}>
      <Box
        position={"relative"}
        height={"30vh"}
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
          {cards.map((url, index) => (
            <Image
              key={index}
              src={url}
              alt="banner"
              width="100%"
              height="100%"
            />
          ))}
        </Slider>
      </Box>
    </Flex>
  );
}
