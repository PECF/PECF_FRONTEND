
import {
  Flex,
  useBreakpointValue,
  Box,
  IconButton,
  Text,
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

export function CarouselDetailProducts({ product }: any) {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  return (
    <Flex w={"50vw"} mt={5}
      // maxH={top}

      mb={30}
    >
      <Box

        position={"relative"}
        width={"full"}
        overflow={"hidden"}
      >
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
        {product.image.length > 0 ? (
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
              onClick={() => slider?.slickPrev()}
            >
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
              onClick={() => slider?.slickNext()}
            >
              <BiRightArrow />
            </IconButton>
          </>

        ) : (
          null)
        }
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {product &&
            product.image.map((item: any, index: number) => {
              return (
                <Box
                  key={index}
                  height={"2xl"}
                  width={"full"}
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  // backgroundSize="cover"
                  backgroundImage={`url(${item})`}
                />
              );
            })}
        </Slider>
      </Box>
    </Flex>
  );
}
