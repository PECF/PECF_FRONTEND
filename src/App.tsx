import React from "react";
import { Container, useColorModeValue } from "@chakra-ui/react";
import { AppRoutes } from "./routes/Routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useLoad } from "./hooks/useLoad";
export const App: React.FC = () => {
  useLoad();
  return (
    <Container overflow="hidden" maxWidth="auto" m={0} p={0}>
      <Header />
      <Container
        maxW="container.xxl"
        bg={useColorModeValue("gray.100", "gray.900")}
        minH="100vh"
        shadow={"xl"}>
        <AppRoutes />
      </Container>
      <Footer />
    </Container>
  );
};
