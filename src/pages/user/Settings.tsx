import React, { useState } from "react";
import {
    useToast,
    Button,
    FormControl,
    FormLabel,
    Input,
    useColorModeValue,
    Flex,
    VStack,
    Heading,
    Grid,
    Box,
    GridItem,
} from "@chakra-ui/react"

export default function Settings() {
    const [oldPassword, setOldPassword] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const toast = useToast();

    const handleSubmit = async () => {
        if (password !== passwordConfirmation) {
            toast({
                title: "Passwords do not match.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    }

    return (
        <Box
            as="form"
            onSubmit={handleSubmit}
            w="full"
            mt={8}
            ml={6}
            maxW="full"
            mx="auto"
            bg={useColorModeValue("white", "gray.700")}
            overflow="hidden">
            <VStack align="stretch" spacing={0}>
                <Flex
                    justify="space-between"
                    align="center"
                    px={6}
                    py={4}
                    bg={useColorModeValue("gray.50", "gray.800")}
                    borderBottomWidth="1px">
                    <Heading
                        size="lg"
                        fontWeight="bold"
                        color={useColorModeValue("gray.900", "white")}>
                        Settings
                    </Heading>
                </Flex>
                <Box w={{ base: "100%", md: "100%" }}>
                    <VStack align="stretch" spacing={0}>
                        <Box p={6}>
                            <Grid
                                mt={6}
                                templateColumns={{
                                    base: "repeat(2, 1fr)",
                                    md: "repeat(2, 1fr)",
                                    lg: "repeat(2, 1fr)",
                                }}
                                gap={6}>
                                <GridItem colSpan={1}>
                                    <FormControl id="country">
                                        <FormLabel>Old Password</FormLabel>
                                        <Input
                                            type="password"
                                            bg={useColorModeValue("gray.50", "gray.900")}
                                            name="old_password"
                                            value={oldPassword}
                                            onChange={(e) => setOldPassword(e.target.value)}
                                            placeholder="Enter your old password"
                                        />
                                    </FormControl>
                                </GridItem>
                                <GridItem colSpan={1}>
                                    <FormControl id="city">
                                        <FormLabel>New Password</FormLabel>
                                        <Input
                                            type="password"
                                            bg={useColorModeValue("gray.50", "gray.900")}
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter your city"
                                        />
                                    </FormControl>
                                </GridItem>
                                <GridItem colSpan={1}>
                                    <FormControl id="state">
                                        <FormLabel>Confirm New Password</FormLabel>
                                        <Input
                                            type="password"
                                            bg={useColorModeValue("gray.50", "gray.900")}
                                            name="password_confirmation"
                                            value={passwordConfirmation}
                                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                                            placeholder="Enter your password confirmation"
                                        />
                                    </FormControl>
                                </GridItem>
                            </Grid>
                            <Flex
                                justify="center"
                                align="center"
                                direction="column"
                                py={12}
                                px={6}
                                bg={useColorModeValue("white", "gray.700")}>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    size="lg"
                                    onClick={() => { handleSubmit() }}>
                                    Update Password
                                </Button>
                            </Flex>
                        </Box>
                    </VStack>
                </Box>
            </VStack>
        </Box>
    )
};