import { Flex, useBreakpointValue, Box, IconButton } from "@chakra-ui/react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import Slider from "react-slick";
import React from "react";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
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
    <Flex w={{ base: "100%", md: "90%" }} h={"35vh"} mb="10rem" mt={"3rem"}>
      <Box
        position={"relative"}
        height={"50vh"}
        width={"full"}
        overflow={"hidden"}>
        {useBreakpointValue({ base: false, md: true }) ? (
          <>
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
          </>
        ) : null}

        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {useBreakpointValue({ base: cardsCellPhone, md: cardsComputer })?.map(
            (url, index) => (
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
            )
          )}
        </Slider>
      </Box>
    </Flex>
  );
}
