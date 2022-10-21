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

export const AppRoutes: React.FC = () => {
  const userDetails = useSelector((state: any) => state.userDetails);
  const { user } = userDetails;
  console.log(user);

  //redirect if logged in to home

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />*/}

      {!user ? (
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      ) : (
        <Route path="/forgotpassword" element={<Navigate to="/" />} />
      )}

      {/* <PrivateRoute path="/update-profile" element={<UpdateProfile />} />
      <AdminRoute path="/admin" element={<Admin />} />  */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
