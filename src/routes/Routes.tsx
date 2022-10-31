import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { AdminRoute } from "./AdminRoute";
import { Home } from "../pages/Home";
// import { UpdatePassword } from "../pages/user/UpdatePassword";
// import { Login } from "../pages/Login";
// import { Register } from "../pages/Register";
import { ForgotPassword } from "../pages/user/ForgotPassword";
import { NotFound } from "../pages/NotFound";
import { CreateProduct } from "../components/CreateProduct";
import { useRecoveryData } from "../hooks/useRecoveryData";
import { Profile } from "../pages/user/profile";
import { ProductDetail } from "../pages/ProductDetail";
// import AuthContext from "../contexts/authContext";
import { TermsOfService } from "../pages/TermsOfService";
import { AboutUs } from "../pages/AboutUs";
import { ContactUs } from "../pages/ContactUs";
import { ReturnPolicy } from "../pages/ReturnPolicy";
import { Refund } from "../pages/Refund";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";
import { CookiesPolicy } from "../pages/CookiesPolicy";

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
          path="/profile/admin/updateProduct/:id"
          element={<Profile index={8} />}
        />
      ) : (
        <Route
          path="/profile/admin/updateProduct/:id"
          element={<Navigate to="/" />}
        />
      )}
      {user?.role === "admin" ? (
        <Route
          path="/profile/admin/updateProduct/"
          element={<Profile index={8} />}
        />
      ) : (

        <Route path="/create-product" element={<Navigate to="/" />} />
      )} */}
      <Route path="/pages/TermsOfService" element={<TermsOfService />} />
      <Route path="/pages/AboutUs" element={<AboutUs />} />
      <Route path="/pages/ContactUs" element={<ContactUs />} />
      <Route path="/pages/ReturnPolicy" element={<ReturnPolicy />} />
      <Route path="/pages/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/pages/Refund" element={<Refund />} />
      <Route path="/pages/CookiesPolicy" element={<CookiesPolicy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
