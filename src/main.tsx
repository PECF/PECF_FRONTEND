import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./stores/rootStore";
import { ChakraProvider } from "@chakra-ui/react";



// import { positions, transitions, Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";

// const options = {
//   timeout: 5000,
//   position: positions.BOTTOM_CENTER,
//   transition: transitions.SCALE,
// };

const el = document.getElementById('root')
if (el === null) throw new Error('Root container missing in index.html')


const root = ReactDOM.createRoot(el)


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
