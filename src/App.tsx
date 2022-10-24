import React from "react";
import { Container } from "@chakra-ui/react";
import { AppRoutes } from "./routes/Routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useLoad } from "./hooks/useLoad";
export const App: React.FC = () => {
  useLoad();
  return (
    <Container overflow="hidden" maxWidth="auto" m={0} p={0}>
      <Header />
      {/* <Container overflow="hidden" maxWidth="auto" minWidth={"100%"} mt="55"> */}
      <AppRoutes />
      {/* </Container> */}
      <Footer />
    </Container>
  );
};
