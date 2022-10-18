import React from "react";
import Router from "./routes/router";
import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Box>
      <NavBar />
      <Router />
    </Box>
  );
}

export default App;
