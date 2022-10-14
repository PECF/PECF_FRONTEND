import * as React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import  store  from "./stores/rootStore";

// import { positions, transitions, Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";

// const options = {
//   timeout: 5000,
//   position: positions.BOTTOM_CENTER,
//   transition: transitions.SCALE,
// };




ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    {/* <AlertProvider template={AlertTemplate} {...options}> */}
      <App />
    {/* </AlertProvider> */}
  </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
