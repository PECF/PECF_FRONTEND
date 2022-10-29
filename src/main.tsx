import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./redux/rootStore";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react"
import "./assets/styles/css/index.css";
import { App } from "./App";
import React from "react";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:3443";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ChakraProvider>
      <Auth0Provider domain="dev-mtrit3jnvo4qrc0x.us.auth0.com" clientId="0kEwTZS0dB3mvVcXc7mGidkFTaukpqV2" redirectUri={window.location.origin}>
        <Router>
          <App />
        </Router>
      </Auth0Provider>
    </ChakraProvider>
  </Provider>
  // </React.StrictMode>
);
