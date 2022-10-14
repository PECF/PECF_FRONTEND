import Detail from '../Views/Details/Details.tsx';
import { Routes, Route } from "react-router-dom";
import About from '../Views/About/About';
import Admin from '../Views/Admin/Admin';
import Home from '../Views/Home/Home';
import Cart from '../Views/Cart/Cart';
import User from '../Views/User/User';
import Details from '../Views/Details/Details';
import path from 'path';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/detail" element={<Details/>} />
      <Route path= '/user' element={<User/>} 
    </Routes>
  );
};
export default Router;
