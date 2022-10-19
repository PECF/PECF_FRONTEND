import React from "react";
import { Stack, Image, Button, Link } from "@chakra-ui/react";

export function NotFound() {
  return (
    <Stack align="center">
      <Image
        src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png"
        alt="error"
      />
      <Button w="10%" colorScheme="gray" size="lg">
        {/* <Link to="/home"> */}
        Back Home
      </Button>
      {/* </Link> */}
    </Stack>
  );
}
