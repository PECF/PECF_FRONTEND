import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Input,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import {
  aboutUs,
  contactUs,
  copyright,
  kalu,
  newsletter,
  careers,
  company,
  support,
  helpCenter,
  safetyCenter,
  refundPolicy,
  legal,
  cookiesPolicy,
  privacyPolicy,
  termsOfService,
  returnPolicy,
} from "../constant/Footer";
// import "./footer.css";

// import AppStoreBadge from "@/components/AppStoreBadge";
// import PlayStoreBadge from "@/components/PlayStoreBadge";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export function Footer() {
  return (
    <Box color={useColorModeValue("gray.700", "gray.200")}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>{company}</ListHeader>

            <Text as={Link} to={"/AboutUs"}>
              {aboutUs}
            </Text>
            <Text as={Link} to={"/ContactUs"}>
              {contactUs}
            </Text>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>{support}</ListHeader>
            <Text as={Link} to={"/HelpCenter"}>
              {helpCenter}
            </Text>
            <Text as={Link} to={"/Refund"}>
              {refundPolicy}
            </Text>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>{legal}</ListHeader>
            <Text as={Link} to={"/CookiesPolicy"}>
              {cookiesPolicy}
            </Text>
            <Text as={Link} to={"/PrivacyPolicy"}>
              {privacyPolicy}
            </Text>
            <Text as={Link} to={"/TermsOfService"}>
              {termsOfService}
            </Text>
            <Text as={Link} to={"/ReturnPolicy"}>
              {returnPolicy}
            </Text>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>{newsletter}</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                colorScheme="teal"
                variant="solid"
                aria-label="Subscribe">
                <BiMailSend
                  color={useColorModeValue("blackAlpha.100", "gray.800")}
                />
              </IconButton>
            </Stack>
          </Stack>

          {/* <Stack align={"flex-start"}>
            <ListHeader>Install App</ListHeader>
            <AppStoreBadge />
            <PlayStoreBadge />
          </Stack> */}
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-around" }}
          align={{ md: "center" }}>
          <Text
            fontSize="sm"
            color={useColorModeValue("gray.700", "gray.200")}
            textAlign="center">
            {copyright} &copy; {new Date().getFullYear()} {kalu}
          </Text>
          <Stack direction={"row"} spacing={6} justify={"center"}>
            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com"}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={"Facebook"} href={"https://www.facebook.com"}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"https://www.youtube.com"}>
              <FaYoutube />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
