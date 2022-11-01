import React, { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Input,
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
      }}
    >
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
            <Link href={"../pages/AboutUs"}>{aboutUs}</Link>
            <Link href={"#"}>{careers}</Link>
            <Link href={"../pages/ContactUs"}>{contactUs}</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>{support}</ListHeader>
            <Link href={"../pages/HelpCenter"}>{helpCenter}</Link>
            <Link href={"#"}>{safetyCenter}</Link>
            <Link href={"../pages/Refund"}>{refundPolicy}</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>{legal}</ListHeader>
            <Link href={"../pages/CookiesPolicy"}>{cookiesPolicy}</Link>
            <Link href={"../pages/PrivacyPolicy"}>{privacyPolicy}</Link>
            <Link href={"../pages/TermsOfService"}>{termsOfService}</Link>
            <Link href={"../pages/ReturnPolicy"}>{returnPolicy}</Link>
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
                aria-label="Subscribe"
              >
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
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-around" }}
          align={{ md: "center" }}
        >
          <Text
            fontSize="sm"
            color={useColorModeValue("gray.700", "gray.200")}
            textAlign="center"
          >
            {copyright} &copy; {new Date().getFullYear()} {kalu}
          </Text>
          <Stack direction={"row"} spacing={6} justify={"center"}>
            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com"}
            >
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
