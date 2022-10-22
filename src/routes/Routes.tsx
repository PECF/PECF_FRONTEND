import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { AdminRoute } from "./AdminRoute";
import { Home } from "../pages/Home";
import { Refund } from "../pages/Refund";
// import { UpdatePassword } from "../pages/user/UpdatePassword";
// import { Login } from "../pages/Login";
// import { Register } from "../pages/Register";
import { ForgotPassword } from "../pages/user/ForgotPassword";
// import { UpdateProfile } from "../pages/UpdateProfile";
// import { Admin } from "../pages/Admin";
import { NotFound } from "../pages/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { CreateProduct } from "../components/CreateProduct";
import { useRecoveryData } from "../hooks/useRecoveryData";

export const AppRoutes: React.FC = () => {
  const { userInfo } = useRecoveryData("userLogin");

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />*/}

      {!userInfo ? (
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      ) : (
        <Route path="/forgotpassword" element={<Navigate to="/" />} />
      )}

      {/* {user && user.role === "admin" ? (
        <Route path="/createproduct" element={<CreateProduct />} />
      ) : (
        <Route path="/createproduct" element={<Navigate to="/" />} />
      )} */}

      <Route path="/createproduct" element={<CreateProduct />} />

      {/* {user && user.role === "admin" ? (
      ) : (
        <Route path="/createproduct" element={<Navigate to="/" />} />
      )} */}

      {/* <PrivateRoute path="/update-profile" element={<UpdateProfile />} />
      <AdminRoute path="/admin" element={<Admin />} />  */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
