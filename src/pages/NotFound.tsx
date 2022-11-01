import React from "react";
import { Stack, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Home } from "./Home";

export default function NotFound() {
  return (
    <Stack align="center">
      <Image
        src="https://res.cloudinary.com/dlcilp6vw/image/upload/v1666296254/Error/404-error-template-3_gkxfbj.png"
        alt="error"
      />
      <Button as={Link} to="/" colorScheme="gray" size="lg">
        Go to Home
      </Button>
    </Stack>
  );
}
  