import React from "react";
import { Stack, Image, Button, Center, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import notFound from "../types/404notFound.png";

export default function NotFound() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Center>
      <Box>
        <Stack
        mt={35}
          direction="column"
          spacing={4}
          align="center"
          justify="center"
          w="100%"
          h="100%"
          p={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontSize= {{base: "2xl", md: "4xl", lg: "6xl"}}
            fontWeight="bold"
            textAlign="center"
            color="teal.500"
          >
            404
          </Text>
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            Page Not Found
          </Text>
          <Image
            src={notFound}
            alt="404 Not Found"
            maxWidth={{ base: "15%", md: "30%", lg: "20%" }}
            maxHeight={{ base: "15%", md: "30%", lg: "20%" }}
            alignSelf="center"

          />
          <Link to="/">
            <Button colorScheme="teal"
             variant="outline"
             alignSelf={{ base: "center", md: "center", lg: "center" }}
             >
              Go Home
            </Button>
          </Link>
        </Stack>
      </Box>
    </Center>
  );
}
