import React from "react";
import { Container } from "@chakra-ui/react";
import { AppRoutes } from "./routes/Routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useLoad } from "./hooks/useLoad";
export const App: React.FC = () => {
  useLoad();
  return (
    <Container overflow="hidden" maxWidth="100vw" m={0} p={0}>
      <Header />
      <Container overflow="hidden" minWidth="100vw"  pt='9vh' pl={0} >
        <AppRoutes />
      </Container>
      <Footer />
    </Container>
  );
};
