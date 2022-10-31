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
import { CreateProduct } from "../components/CreateProduct";
import { useRecoveryData } from "../hooks/useRecoveryData";
import { Profile } from "../pages/user/profile";
import { ProductReview } from "../components/ProductReview";
import { Products } from "../pages/Products";
import { ProductDetail } from "../pages/ProductDetail";

// import AuthContext from "../contexts/authContext";
export const AppRoutes: React.FC = () => {
  const { user } = useRecoveryData("userDetails");
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductReview />} />
      <Route path="/product/" element={<ProductDetail />} />

      {!user?.role ? (
        <Route path="/forgot-password" element={<ForgotPassword />} />
      ) : (
        <Route path="/forgot-password" element={<Navigate to="/" />} />
      )}

      {user?.role ? (
        <Route path="/profile" element={<Profile index={1} />} />
      ) : (
        <Route path="/profile" element={<Navigate to="/" />} />
      )}

      {user?.role === "admin" ? (
        <Route path="/profile/admin/users" element={<Profile index={5} />} />
      ) : (
        <Route path="/profile/admin/users" element={<Navigate to="/" />} />
      )}

      {user?.role === "admin" ? (
        <Route path="/profile/admin/products" element={<Profile index={6} />} />
      ) : (
        <Route path="/profile/admin/products" element={<Navigate to="/" />} />
      )}

      {user?.role === "admin" ? (
        <Route
          path="/profile/admin/createProduct"
          element={<Profile index={7} />}
        />
      ) : (
        <Route
          path="/profile/admin/createProduct"
          element={<Navigate to="/" />}
        />
      )}
      {user?.role === "admin" ? (
        <Route
          path="/profile/admin/updateProduct"
          element={<Profile index={8} />}
        />
      ) : (
        <Route
          path="/profile/admin/updateProduct"
          element={<Navigate to="/" />}
        />
      )}
      {user?.role === "admin" ? (
        <Route path="/profile/admin/orders" element={<Profile index={9} />} />
      ) : (
        <Route path="/profile/admin/orders" element={<Navigate to="/" />} />
      )}

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
