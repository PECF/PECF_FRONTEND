import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'



function App() {
  return (
    <ChakraProvider>
      <div className="App"></div>;
    </ChakraProvider>
  )
}

export default App;
