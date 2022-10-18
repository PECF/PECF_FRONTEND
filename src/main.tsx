import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./stores/rootStore";
// import { positions, transitions, Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";

// const options = {
//   timeout: 5000,
//   position: positions.BOTTOM_CENTER,
//   transition: transitions.SCALE,
// };

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider>
        {/* <AlertProvider template={AlertTemplate} {...options}> */}
        <App />
        {/* </AlertProvider> */}
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);
