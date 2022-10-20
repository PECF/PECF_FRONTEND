import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Card } from "../components/Card";
import Slider from "react-slick";
import React from "react";
import {
  Box,
  Container,
  Heading,
  Flex,
  IconButton,
  useBreakpointValue,
  Spinner,
} from "@chakra-ui/react";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

import { useRecoveryData } from "../hooks/useRecoveryData";
export const Home = () => {
  const { loading, products, error } = useRecoveryData("products");

  const [slider, setSlider] = React.useState<Slider | null>(null);
  const side = useBreakpointValue({ base: "10px", md: "20px" });
  const top = useBreakpointValue({ base: "90%", md: "50%" });

  return (
    
    {loading ? (

      <Flex w="100%" h="100vh" justifyContent="center" alignItems="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    ) : (
      <Container maxW="container.xl" mt="20px">
        <Heading as="h1" size="xl" mb="20px">
          Products
        </Heading>
        <Slider ref={(slider) => setSlider(slider)} {...settings}>
          {products.map((product) => (
            <Box key={product.id}>
              <Card product={product} />
            </Box>
          ))}
        </Slider>
        <Flex
          position="absolute"
          top={top}
          left={side}
          zIndex="1"
          onClick={() => slider?.slickPrev()}
        >
          <IconButton
            aria-label="Previous"
            icon={<BiLeftArrowAlt />}
            size="lg"
            colorScheme="blue"
          />
        </Flex>
        <Flex
          position="absolute"
          top={top}
          right={side}
          
    
// const keyword = match.params.keyword;

// const pageNumber = match.params.pageNumber || "1";

// const dispatch = useDispatch<AppDispatch>();

// const { products, loading, error, page, pages } = useSelector(
//   (state: ReduxState) => state.productList
// );

// useEffect(() => {
//   dispatch(listProducts(keyword, pageNumber));
// }, [dispatch, keyword, pageNumber]);

//   const [slider, setSlider] = React.useState<Slider | null>(null);

//   const top = useBreakpointValue({ base: "90%", md: "50%" });
//   const side = useBreakpointValue({ base: "30%", md: "10px" });

//   const { products } = useSelector((state: RootState) => state.products);

//   return (
//     <Container ml={0} minWidth="100vw" minHeight="lg">
//       <Flex
//         minWidth="max-content"
//         width={"100%"}
//         alignItems="center"
//         justifyContent={"center"}>
//         <Heading mt="20px">Welcome to KALÚ Web Page</Heading>
//       </Flex>
//       <Box
//         alignSelf={"center"}
//         height={"400px"}
//         width={"container"}
//         p="20px"
//         position={"relative"}
//         overflow={"hidden"}>
//         {/* CSS files for react-slick */}
//         <link
//           rel="stylesheet"
//           type="text/css"
//           href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//         />
//         <link
//           rel="stylesheet"
//           type="text/css"
//           href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//         />
//         {/* Left Icon */}
//         <IconButton
//           aria-label="left-arrow"
//           colorScheme="messenger"
//           borderRadius="full"
//           position="absolute"
//           left={side}
//           top={top}
//           transform={"translate(0%, -50%)"}
//           zIndex={2}
//           bgColor="teal.500"
//           onClick={() => slider?.slickPrev()}>
//           <BiLeftArrowAlt />
//         </IconButton>
//         {/* Right Icon */}
//         <IconButton
//           aria-label="right-arrow"
//           colorScheme="messenger"
//           borderRadius="full"
//           position="absolute"
//           right={side}
//           top={top}
//           transform={"translate(0%, -50%)"}
//           zIndex={2}
//           bgColor="teal.500"
//           onClick={() => slider?.slickNext()}>
//           <BiRightArrowAlt />
//         </IconButton>
//         {/* Slider */}
//         <Slider {...settings} ref={(slider) => setSlider(slider)}>
//           {products.map((product, index) => (
//             <Box
//               key={index}
//               height={"45vh"}
//               position="
//               relative"
//               backgroundPosition="center"
//               backgroundRepeat="no-repeat"
//               backgroundSize="cover"
//               backgroundImage={`url(${product.image})`}
//             />
//           ))}
//         </Slider>
//       </Box>
//       <Flex
//         minWidth="max-content"
//         width={"100%"}
//         alignItems="center"
//         justifyContent={"center"}>
//         <Heading mt="20px">Recomended For You</Heading>
//       </Flex>
//       <Flex justify="center" maxW={"100%"} wrap="wrap">
//         {Array(10)
//           .fill("")
//           .map((_, i) => (
//             <Card key={i} />
//           ))}
//       </Flex>
//     </Container>
//   );
// };
