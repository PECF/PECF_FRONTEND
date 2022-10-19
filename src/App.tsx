
import React from "react";
import { AppRoutes } from "./routes/Routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <>
      <Header />  
      <AppRoutes />
      <Footer />
    </>
  );
};
