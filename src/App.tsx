import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Router from './routes/router'



function App() {
  return (
    <ChakraProvider>
      <div className="App"></div>;
      <Router />
    </ChakraProvider>
  )
}

export default App;
