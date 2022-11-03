import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./redux/rootStore";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./assets/styles/css/index.css";
import { App } from "./App";
import React from "react";
import axios from "axios";

axios.defaults.baseURL = "https://pecfbackend-production.up.railway.app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ChakraProvider>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </Provider>
  // </React.StrictMode>
);
