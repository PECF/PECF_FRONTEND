import NavBar from "./views/Navbar/Navbar";
import { Box } from "@chakra-ui/react";
import Router from "./routes/router";
import * as React from "react";
import "./App.css";

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