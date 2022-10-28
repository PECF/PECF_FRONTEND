import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { AdminRoute } from "./AdminRoute";
import { Home } from "../pages/Home";
// import { UpdatePassword } from "../pages/user/UpdatePassword";
// import { Login } from "../pages/Login";
// import { Register } from "../pages/Register";
import { ForgotPassword } from "../pages/user/ForgotPassword";
// import { UpdateProfile } from "../pages/UpdateProfile";
// import { Admin } from "../pages/Admin";
import { NotFound } from "../pages/NotFound";
import { CreateProduct } from "../components/CreateProduct";
import { useRecoveryData } from "../hooks/useRecoveryData";
import { Profile } from "../pages/user/profile";
import ProductDetail from "../pages/ProductDetail";
// import AuthContext from "../contexts/authContext";
import { TermsOfService } from "../pages/TermsOfService";
import { AboutUs } from "../pages/AboutUs";
import { ContactUs } from "../pages/ContactUs";
import { ReturnPolicy } from "../pages/ReturnPolicy";
import { Refund } from "../pages/Refund";
export const AppRoutes: React.FC = () => {
  const { user } = useRecoveryData("userDetails");
  console.log(user);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productDetail" element={<ProductDetail />} />
      <Route path="/refund" element={<Refund />} />
      {!user?.role ? (
        <Route path="/forgot-password" element={<ForgotPassword />} />
      ) : (
        <Route path="/forgot-password" element={<Navigate to="/" />} />
      )}
      {user?.role ? (
        <Route path="/profile" element={<Profile />} />
      ) : (
        <Route path="/profile" element={<Navigate to="/" />} />
      )}

      {/* {user?.role === "admin" ? (
        <Route path="/create-product" element={<CreateProduct />} />
      ) : (
        <Route path="/create-product" element={<Navigate to="/" />} />
      )} */}
      <Route path="/pages/TermsOfService" element={<TermsOfService />} />
      <Route path="/pages/AboutUs" element={<AboutUs />} />
      <Route path="/pages/ContactUs" element={<ContactUs />} />
      <Route path="/pages/ReturnPolicy" element={<ReturnPolicy />} />
      <Route path="/pages/Refund" element={<Refund />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="forgot-password" element={<ForgotPassword />} />
//       <Route path="refund" element={<Refund />} />
//       <Route path="create-product" element={<CreateProduct />} />
//       <Route path="profile" element={<Profile />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// };

// return (
//   <Routes>
//     <Route path="/" element={<Home />} />

//     {/* <Route path="/login" element={<Login />} />
//     <Route path="/register" element={<Register />} />*/}

//     {!userInfo ? (
//       <Route path="/forgotpassword" element={<ForgotPassword />} />
//     ) : (
//       <Route path="/forgotpassword" element={<Navigate to="/" />} />
//     )}

//     {/* {user && user.role === "admin" ? (
//       <Route path="/createproduct" element={<CreateProduct />} />
//     ) : (
//       <Route path="/createproduct" element={<Navigate to="/" />} />
//     )} */}

//     <Route path="/createproduct" element={<CreateProduct />} />

//     {/* {user && user.role === "admin" ? (
//     ) : (
//       <Route path="/createproduct" element={<Navigate to="/" />} />
//     )} */}

//     {/* <PrivateRoute path="/update-profile" element={<UpdateProfile />} />
//     <AdminRoute path="/admin" element={<Admin />} />  */}
//     <Route path="*" element={<NotFound />} />
//   </Routes>
// );
// };
