import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => (
  <Container as="footer" role="contentinfo">
    <Stack
      spacing="8"
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      py={{ base: "12", md: "16" }}
    >
      <Stack spacing="8">
        <Stack spacing="4" minW="36" flex="1">
          <Text
            fontSize="sm"
            fontWeight="semibold"
            color="subtle"
            textAlign="center"
          >
            Follow Us
          </Text>
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="#"
              aria-label="Facebbok"
              icon={<FaFacebook fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Instagram"
              icon={<FaInstagram fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
      </Stack>
      <Stack spacing={{ base: "6", md: "8" }} align="start">
        <Stack direction="row" spacing="82">
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Shopping & Categories
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">Men's Shopping</Button>
              <Button variant="link">Woman's Shopping</Button>
            </Stack>
          </Stack>
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Useful Links
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">HomePage</Button>
              <Button variant="link">About Us</Button>
              <Button variant="link">Contact Us</Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    <Divider />
    <Stack pt="8" pb="12" justify="center" align="center">
      <Text fontSize="sm" color="subtle" textAlign="center">
        Copyright &copy; {new Date().getFullYear()} Kalú, Inc. All rights
        reserved.
      </Text>
    </Stack>
  </Container>
);
