import React from "react";
import { Box, Image, Container } from "@chakra-ui/react";

export default function SliderCard({ image }: any) {
  return (
    // container with image size and position in the center of the container
    <Container
      maxW="full"
      px={4}
      py={4}
      shadow="md"
      top="0"
      left="0"
      right="0"
      zIndex={1000}>
      <Image
        src={image}
        alt="image"
        objectFit="cover"
        width="auto"
        height="100%"
        top="0"
        left="0"
        right="0"
        bottom="0"
        margin="auto"
      />
    </Container>
  );
}
