import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Input,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import * as React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  followUs,
  shoppingCategories,
  usefulLinks,
  menShopping,
  womanShopping,
  homePage,
  aboutUs,
  contactUs,
  copyright,
  kalu,
  newsletter,
  subscribe,
} from "./constants";
import "./footer.css";

export const Footer = () => (
  <div className="footer">
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
              color="blackAlpha.800"
              textAlign="center"
            >
              {followUs}
            </Text>
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                href="#"
                aria-label="Facebook"
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
              <Text fontSize="sm" fontWeight="semibold" color="blackAlpha.800">
                {shoppingCategories}
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link">{menShopping}</Button>
                <Button variant="link">{womanShopping}</Button>
              </Stack>
            </Stack>
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="blackAlpha.800">
                {usefulLinks}
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link">{homePage}</Button>
                <Button variant="link">{aboutUs}</Button>
                <Button variant="link">{contactUs}</Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack justify="center" align="center" spacing="4">
        <Text fontSize="xl" fontWeight="semibold" color="blackAlpha.800">
          {newsletter}
        </Text>
        <Stack
          justify="center"
          spacing="4"
          direction={{ base: "column", sm: "row" }}
          maxW={{ lg: "360px" }}
        >
          <Input
            placeholder="Enter your email"
            type="email"
            bg="whiteAlpha.700"
            required
          />
          <Button type="submit" flexShrink={0}>
            {subscribe}
          </Button>
        </Stack>
      </Stack>
      <Divider />
      <Stack pt="8" pb="12" justify="center" align="center">
        <Text fontSize="sm" color="blackAlpha.800" textAlign="center">
          {copyright} &copy; {new Date().getFullYear()} {kalu}
        </Text>
      </Stack>
    </Container>
  </div>
);