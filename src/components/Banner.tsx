import { Flex, useBreakpointValue, Box, IconButton } from "@chakra-ui/react";
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

  const cardsComputer = [
    "https://res.cloudinary.com/dlcilp6vw/image/upload/v1667327495/banner/1_caomnr.png",
    "https://res.cloudinary.com/dlcilp6vw/image/upload/v1667327494/banner/3_yfuxt6.png",
  ];
  const cardsCellPhone = [
    "https://res.cloudinary.com/dlcilp6vw/image/upload/v1667327484/banner/1_g6kfse.png",
    "https://res.cloudinary.com/dlcilp6vw/image/upload/v1667327484/banner/2_ba6zmt.png",
    "https://res.cloudinary.com/dlcilp6vw/image/upload/v1667327484/banner/3_t6jjxi.png",
  ];

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  return (
    <Flex w={{ base: "100%", md: "95%" }} h={"35vh"} mb="10rem" mt={"3rem"}>
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
          
          {useBreakpointValue({ base: cardsCellPhone, md: cardsComputer })?.map((url, index) => (
             <Box
             key={index}
             height={"50vh"}
             width={"full"}
             position="relative"
             backgroundPosition="center"
             backgroundRepeat="no-repeat"
             backgroundSize="cover"
             backgroundImage={`url(${url})`}
           />
          ))}
        </Slider>
      </Box>
    </Flex>
  );
}