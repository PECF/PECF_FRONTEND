import { Routes, Route } from "react-router-dom";
import Details from "../views/Details/Details";
import About from "../views/About/About";
import Admin from "../views/Admin/Admin";
import Home from "../views/Home/Home";
import Cart from "../views/Cart/Cart";
import User from "../views/User/User";
import React from "react";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/detail" element={<Details />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
};
export default Router;