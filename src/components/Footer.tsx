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
  blog,
  careers,
  company,
  support,
  helpCenter,
  safetyCenter,
  communityGuidelines,
  legal,
  cookiesPolicy,
  privacyPolicy,
  termsOfService,
  lawEnforcement,
} from "../constant/Footer";
import "./footer.css";

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

export function FooterDos() {
  return (
    <Box
      //   bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>{company}</ListHeader>
            <Link href={"#"}>{aboutUs}</Link>
            <Link href={"#"}>{blog}</Link>
            <Link href={"#"}>{careers}</Link>
            <Link href={"#"}>{contactUs}</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>{support}</ListHeader>
            <Link href={"#"}>{helpCenter}</Link>
            <Link href={"#"}>{safetyCenter}</Link>
            <Link href={"#"}>{communityGuidelines}</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>{legal}</ListHeader>
            <Link href={"#"}>{cookiesPolicy}</Link>
            <Link href={"#"}>{privacyPolicy}</Link>
            <Link href={"#"}>{termsOfService}</Link>
            <Link href={"#"}>{lawEnforcement}</Link>
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
                bg={useColorModeValue("green.400", "green.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "green.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
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
          <Text fontSize="sm" color="blackAlpha.800" textAlign="center">
            {copyright} &copy; {new Date().getFullYear()} {kalu}
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={"Facebook"} href={"#"}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
