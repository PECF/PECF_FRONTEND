import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";

export default function CookiesPolicy() {
  return (
    <Box>
      <Box marginRight={"10"} paddingTop={"5"} marginLeft={"5"}>
        <Box marginTop={"10"} w="full" bg="teal" px="100px" py="40px">
          <Flex justifyContent="space-between" alignItems="center" pb="30px">
            <Heading color="whiteAlpha.900">How we use cookies on Kalú</Heading>
          </Flex>
        </Box>
        <Flex>
          <Box
            bg={"whiteAlpha.100"}
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            p={50}
            boxShadow="lg"
          >
            <Box>
              <Text fontSize="2xl" as="i" pb="20px">
                Cookies help us understand your interests and how you browse our
                site to provide you with a personalized experience:
              </Text>
              <Text fontSize="lg">
                <UnorderedList>
                  <ListItem>
                    Show you advertising and opportunities relevant to you.
                  </ListItem>
                  <ListItem>Improve our offers and services.</ListItem>
                  <ListItem>
                    Not to enter your e-mail, password or cell phone to access
                    your account every time you visit us from your usual
                    devices.
                  </ListItem>
                  <ListItem>Strengthen the security of our site.</ListItem>
                </UnorderedList>
              </Text>
              <br />
              <br />
              <Text fontSize="lg">
                If you do not agree to our use of cookies,{" "}
                <Link color="teal.500" href="#">
                  you can change your cookie preferences from the privacy
                  section.{" "}
                </Link>
                We will apply the changes you make from your account in the
                browsers where you log in. <br />
                <br />
                Please note that if you change your cookie preferences without
                logging in to your account, they will be saved only in that
                browser. You may see our cookie notice again if you change
                browsers or devices.
              </Text>
              <br />
              <Text fontWeight="semibold" fontSize="lg" as="i" pb="20px">
                You can also manage the use of cookies from the browser you
                usually use:
              </Text>
              <UnorderedList>
                <ListItem>
                  <Link
                    color="teal.500"
                    href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&oco=1&hl=es-419"
                    isExternal
                  >
                    Google Chrome
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    color="teal.500"
                    href="https://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia"
                    isExternal
                  >
                    Mozilla Firefox
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    color="teal.500"
                    href="https://support.apple.com/es-lamr/guide/safari/sfri11471/mac"
                    isExternal
                  >
                    Safari
                  </Link>
                </ListItem>

                <ListItem>
                  <Link
                    color="teal.500"
                    href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    isExternal
                  >
                    Microsoft Edge
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    color="teal.500"
                    href="https://help.opera.com/en/latest/web-preferences/#cookies"
                    isExternal
                  >
                    Opera
                  </Link>
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
