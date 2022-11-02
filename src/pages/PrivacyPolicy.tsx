import {
  Box,
  Heading,
  Text,
  Flex,
  Divider,
  Center,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React, {useEffect} from "react";

export default function PrivacyPolicy(){
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Box marginRight={"10"} paddingTop={"5"} marginLeft={"5"}>
      <Box marginTop={"10"} w="full" bg="teal" px="100px" py="40px">
        <Flex justifyContent="space-between" alignItems="center" pb="30px">
          <Heading
            fontSize={44}
            letterSpacing="2px"
            color="whiteAlpha.900"
            ml={-8}
          >
            Privacy Policy
            <Text fontSize={24}>How Kalú handles your information</Text>
          </Heading>
        </Flex>
      </Box>
      <Flex direction={"column"} justifyContent="center" alignItems="center">
        <Box
          mt={8}
          bg={"whiteAlpha.100"}
          overflow="hidden"
          p={50}
          boxShadow="lg"
        >
          <Heading textAlign={"center"} fontSize="3xl">
            Your privacy: what are your rights
            <Divider />
          </Heading>
          <br />
          <Center>
            <Flex
              gap={"20"}
              direction={"column"}
              justifyContent="space-between"
              alignItems="center"
              pb="30px"
            ></Flex>
          </Center>
          <Flex
            direction={"column"}
            justifyContent="center"
            alignItems="center"
          >
            <Box mt={-5}>
              <Text fontSize="lg" align={"center"} pb="20px">
                You have the right to access, update, correct and keep
                confidential your personal information. You can also ask us to
                stop sending you advertising, offers and promotions, delete your
                data and object to our use of your data for one or more
                purposes. Each legislation contemplates these rights in a
                different way, so we recommend that you read the appendix that
                corresponds to the country where you live.
                <br />
                <br />
                It may happen that in order to comply with something stated in
                the privacy statement or because of a legal duty, we have to
                keep some of your personal information that you have asked us to
                delete. After those requirements are met, we will delete your
                information. <br />
                <br />
                Online privacy demands a joint work between companies and users.
                We have strong security measures to protect your information, we
                need you to take care of your privacy too.
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box
          bg={"whiteAlpha.100"}
          overflow="hidden"
          p={50}
          marginTop={10}
          boxShadow="lg"
        >
          <Box>
            <Flex
              direction={"column"}
              justifyContent="center"
              alignItems="center"
            >
              <Heading textAlign={"center"} fontSize="3xl">
                How and what type of information we process
                <Divider />
              </Heading>
            </Flex>
          </Box>
          <br />
          <Flex
            direction={"column"}
            justifyContent="center"
            alignItems="center"
          >
            {/* <Text as="i" fontSize="md" pt={"5"} align={"justify"} pb="20px">
              If you wish to make a complaint about how we treat your personal
              data, you can contact the relevant supervisory authority in your
              country.{" "}
            </Text> */}
            <Box>
              <Text as="i" fontSize="2xl" pt={"5"} align={"justify"} pb="20px">
                Ways in which we collect your information:
              </Text>
              <Text fontSize="lg" align={"justify"} pb="20px">
                <UnorderedList>
                  <ListItem>
                    When you register or provide information using the platform.
                  </ListItem>
                  <ListItem>
                    Automatically, as when you browse our pages.
                  </ListItem>
                  <ListItem>
                    From reliable sources (service providers or business
                    partners with whom we work, credit bureaus, government
                    agencies).
                  </ListItem>
                </UnorderedList>
                <br />

                <Box alignContent="center">
                  <Text
                    as="i"
                    fontSize="2xl"
                    pt={"5"}
                    align={"center"}
                    pb="20px"
                  >
                    Types of data we collect:
                  </Text>
                </Box>
                <UnorderedList>
                  <ListItem>Nickname or pseudonym.</ListItem>
                  <ListItem>Name and photo.</ListItem>
                  <ListItem>Identification</ListItem>
                  <ListItem>
                    Contact information (telephone number, address, e-mail
                    address, etc.).
                  </ListItem>
                  <ListItem>Equity and financial data</ListItem>
                  <ListItem>Means of payment.</ListItem>
                  <ListItem>Intellectual property rights.</ListItem>
                  <ListItem>
                    Information about the device you are accessing and IP
                    address.
                  </ListItem>
                  <ListItem>Links between accounts and users.</ListItem>
                  <ListItem>
                    Transactional information and movements within our
                    platforms.
                  </ListItem>
                  <ListItem>
                    Certain information about user and visitor activity and
                    preferences within our website and our services apps.
                  </ListItem>
                </UnorderedList>
              </Text>
              <br />
              <Text
                as="i"
                fontSize="lg"
                color="gray"
                pt={"5"}
                align={"justify"}
                pb="20px"
              >
                If you want to make a complaint about how we treat your personal
                data, you can contact the relevant supervisory authority in your
                country. More information on how and to whom to complain and how
                to exercise your rights can be found in the appendix for your
                country.
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box
          bg={"whiteAlpha.100"}
          overflow="hidden"
          p={50}
          marginTop={10}
          boxShadow="lg"
        >
          <Box>
            <Flex
              direction={"column"}
              justifyContent="center"
              alignItems="center"
              pb="30px"
            >
              <Box>
                <Heading textAlign={"center"} fontSize="3xl">
                  What we use your data for
                  <Divider />
                </Heading>
              </Box>
            </Flex>
          </Box>
          <Flex justifyContent="center" alignItems="center">
            <Box>
              <Text as="i" fontSize="xl" pt={"5"} align={"justify"} pb="20px">
                Processing your information is the basis for giving you an
                excellent service, so that you can perform fast and secure
                operations and have functionalities adapted to your needs. Some
                of the purposes for which we process your data:
              </Text>
              <Text fontSize="lg" pt={"5"} align={"justify"} pb="20px">
                <UnorderedList>
                  <ListItem>
                    Improve our services, develop new ones and offer a better
                    experience with the PECF ecosystem.
                  </ListItem>
                  <ListItem>
                    Disseminate advertisements and advertising and promotional
                    contacts tailored to your interests.
                  </ListItem>
                  <ListItem>
                    Prevent fraud, abuse and related crimes to protect your
                    safety and the sustainability of the entire ecosystem.
                  </ListItem>
                  <ListItem>
                    Protect your rights, those of other users or those of our
                    company.
                  </ListItem>
                  <ListItem>
                    Collaborate with intellectual property owners in the
                    exercise of their rights.
                  </ListItem>
                  <ListItem>
                    Comply with legal obligations and requirements of competent
                    authorities.
                  </ListItem>
                </UnorderedList>
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
