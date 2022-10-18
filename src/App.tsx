import { useState } from "react";
import "./App.css";
import * as React from "react";
import Router from "./routes/router";
import { Box } from "@chakra-ui/react";
import NavBar from "./Views/NavBar/Navbar";
function App() {
  return (
    <Box>
      <NavBar />
      <div className="App"></div>;
      <Router />
    </Box>
  );
}

export default App;
