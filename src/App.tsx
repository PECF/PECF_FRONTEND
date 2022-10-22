import React from "react";
import { Container } from "@chakra-ui/react";
import { AppRoutes } from "./routes/Routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useLoad } from "./hooks/useLoad";
import { useAuth } from "./hooks/useAuth";
export const App: React.FC = () => {
  useLoad();
  useAuth();
  return (
    <Container overflow="hidden" maxWidth="auto" m={0} p={0}>
      <Header />
      <Container overflow="hidden" maxWidth="auto" mt="55">
        <AppRoutes />
      </Container>
      <Footer />
    </Container>
  );
};
