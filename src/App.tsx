import React from "react";
import { AppRoutes } from "./routes/Routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
// import { useLoad } from "./hooks/useLoad";
export const App: React.FC = () => {
  // useLoad();
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
};
