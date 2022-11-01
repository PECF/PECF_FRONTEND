import React from "react";
import {
    Box,
    Heading,
    Text,
    Flex,
    Link,
    InputGroup,
    Input,
    InputRightElement,
    Divider,
    Center
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons"

export const HelpCenter: React.FC = () => {
    return (
        <Box marginRight={"10"} paddingTop={"5"} marginLeft={"5"}>
            <Box marginTop={"10"} w="full" bg="teal" px="100px" py="40px">
                <Flex justifyContent="space-between" alignItems="center" pb="30px">
                    <Heading
                        fontSize={54}
                        letterSpacing="1px"
                        color="whiteAlpha.900"
                        ml={-8}
                    >
                        Help Center
                        <Text fontSize={24}>Help us help you</Text>
                    </Heading>
                </Flex>
            </Box>
            <Box bg={"whiteAlpha.100"}
                overflow="hidden"
                p={50}
                marginTop={"5"}
                boxShadow="lg">
                How can we help you?
                <InputGroup size="md" mt={3}>
                    <Input
                        pr="4.5rem"
                        type="text"
                        placeholder="Search"
                    />
                    <InputRightElement width="4.5rem">
                        <SearchIcon color="gray.300" />
                    </InputRightElement>
                </InputGroup>
                <Text mt={5} fontSize='4xl' textAlign={"center"}>
                    Frequent Questions
                </Text>
                <Flex direction={"column"} justifyContent="center" alignItems="center">
                    <Box
                        bg={"whiteAlpha.100"}
                        overflow="hidden"
                        p={50}
                        marginTop={"7"}
                        boxShadow="lg"
                    >
                        <Heading textAlign={"center"} fontSize={34} letterSpacing="2px">
                            Rules and policies
                            <Divider />
                        </Heading>
                        <Center>
                            <Flex
                                gap={"20"}
                                direction={"column"}
                                justifyContent="space-between"
                                alignItems="center"
                                pb="30px"
                            >
                            </Flex>
                        </Center>
                        <Flex
                            direction={"column"}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box>
                                <Link color="teal.500" href="./Refund">
                                    When and where do I receive my refund money?
                                </Link>
                                <br />
                                <Link color="teal.500" href="./ReturnPolicy">
                                    What is the purchase return policy?
                                </Link>
                                <br />
                                <Link color="teal.500" href="./PrivacyPolicy">
                                    What is the privacy policy?
                                </Link>
                                <br />
                                <Link color="teal.500" href="./CookiesPolicy">
                                    How we use cookies on Kalú
                                </Link>
                            </Box>
                        </Flex>
                    </Box>
                    <Box
                        width={445}
                        bg={"whiteAlpha.100"}
                        overflow="hidden"
                        p={50}
                        marginTop={"7"}
                        boxShadow="lg"
                    >
                        <Box>
                            <Flex
                                direction={"column"}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Box>
                                    <Heading textAlign={"center"} fontSize={34} letterSpacing="2px">
                                        About my account
                                        <Divider />
                                    </Heading>
                                </Box>
                            </Flex>
                        </Box>
                        <Flex
                            direction={"column"}
                            justifyContent="center"
                            mt={5}
                        >
                            <Box>
                                <Link color="teal.500" href="#">
                                    How to change my password?
                                </Link>
                                <br />
                                <Link color="teal.500" href="#">
                                    How do I upload my product?
                                </Link>
                                <br />
                                <Link color="teal.500" href="#">
                                    How do I register?
                                </Link>
                            </Box>
                        </Flex>
                    </Box>
                    <Box
                        width={445}
                        bg={"whiteAlpha.100"}
                        overflow="hidden"
                        p={50}
                        marginTop={"7"}
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
                                    <Heading textAlign={"center"} fontSize={34} letterSpacing="2px">
                                        Questions related to us
                                        <Divider />
                                    </Heading>
                                </Box>
                            </Flex>
                        </Box>
                        <Flex justifyContent="center">
                            <Box mr={20}>
                                <Link color="teal.500" href="./AboutUs">
                                    How do I know more about your page?
                                </Link>
                                <br />
                                <Link color="teal.500" href="./ContactUs">
                                    Contact us
                                </Link>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};
