
import {
  Flex,
  useBreakpointValue,
  Box,
  IconButton,
  Text,
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
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export function CarouselDetailProducts({ image }: any) {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "20%", md: "10px" });

  return (
    <Flex
      w={"full"}
      mt={5}
      maxH={top}
      mb={30}
    >
      <Box
        position={"relative"}
        width={"full"}
      >
        {image.length > 0 ? (
          <>
            <IconButton
              aria-label="left-arrow"
              colorScheme="teal"
              borderRadius="full"
              position="absolute"
              zIndex={10}
              top={top}
              left={side}
              onClick={() => slider?.slickPrev()}
            >
              <BiLeftArrow />
            </IconButton>
            <IconButton
              aria-label="right-arrow"
              colorScheme="teal"
              borderRadius="full"
              position="absolute"
              zIndex={10}
              top={top}
              right={side}
              onClick={() => slider?.slickNext()}
            >
              <BiRightArrow />
            </IconButton>
          </>
        ) : (
          null)
        }
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {image.map((img: any, index: number) => {
            const src = img?.url ? img.url : img;
            console.log(src);
            return (
              <Box key={index} w="full" h="full" position="relative"
              >
                <Image src={src} w="full" maxH="full" h={
                  useBreakpointValue({ base: "full", md: "full" })
                } objectFit="cover" />
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Flex>
  );
}
