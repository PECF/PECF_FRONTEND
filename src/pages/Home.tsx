import React from "react";

import { useColorModeValue, Container } from "@chakra-ui/react";
import { Carousel } from "../components/product/carouselProducts";
import { Banner } from "../components/Banner";
import { Categories } from "../components/Categories";

export function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Container
      maxW="100%"
      display="flex"
      flexDir="column"
      justifyContent="center"
      color={useColorModeValue("grey.100", "grey.800")}
      bg={useColorModeValue("gray.100", "grey.800")}
      alignItems="center"
      mt="1.5rem"
      mb="1rem">
      <Banner />
      <Categories />
      <Carousel text="Based on your latest searches" name="productList" />
      <Carousel text="For Sale" name="productList" />
    </Container>
  );
}
