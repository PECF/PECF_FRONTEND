import { AuthProvider } from "./routes/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/index";
import React from "react";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
