import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./stores/rootStore";
import ReactDOM from "react-dom";
import * as React from "react";
import App from "./App";
import "./index.css";



const el = document.getElementById('root')
if (el === null) throw new Error('Root container missing in index.html')


const root = ReactDOM.createRoot(el)


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
