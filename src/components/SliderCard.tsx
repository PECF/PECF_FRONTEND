import React from "react";
import { Box, Image, Container } from "@chakra-ui/react";

export default function SliderCard({ image }: any) {
  return (
    <Container w={"100%"} h={"100%"} p="0">
      <Image src={`${image}`} objectFit="cover" boxSize={"100%"} />
    </Container>
  );
}
