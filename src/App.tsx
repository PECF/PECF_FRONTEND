
import React from "react";
import { AppRoutes } from "./routes/Routes";
import { Container } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


export const App: React.FC = () => {
  return (
    <Container overflow='hidden' minWidth={'90vw'} maxWidth='100vw'  m={0}  p={0} >
      <Header/>
      <AppRoutes />
      <Footer/>
    </Container>
  );
};
