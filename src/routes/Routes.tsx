import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { useRecoveryData } from "../hooks/useRecoveryData";
//import { NotFound } from "../pages/NotFound";
//import { Profile } from "../pages/user/profile";
// import { ProductDetail } from "../pages/ProductDetail";
//  import { TermsOfService } from '../pages/TermsOfService';
//  import { AboutUs } from '../pages/AboutUs';
//  import { ContactUs } from "../pages/ContactUs";
//  import { ReturnPolicy } from "../pages/ReturnPolicy";
//  import { Refund } from "../pages/Refund";
//  import { PrivacyPolicy } from "../pages/PrivacyPolicy";
//  import { CookiesPolicy } from "../pages/CookiesPolicy";
//import { Products } from "../pages/Products";
//import { ProductReview } from '../components/ProductReview';

const Profile = lazy(() => import("../pages/user/profile"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const TermsOfService = lazy(() => import("../pages/TermsOfService"));
const ForgotPassword = lazy(() => import("../pages/user/ForgotPassword"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const ReturnPolicy = lazy(() => import("../pages/ReturnPolicy"));
const Refund = lazy(() => import("../pages/Refund"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const CookiesPolicy = lazy(() => import("../pages/CookiesPolicy"));
const ProductReview = lazy(() => import("../components/ProductReview"));
const Products = lazy(() => import("../pages/Products"));
const NotFound = lazy(() => import("../pages/NotFound"));


export const AppRoutes: React.FC = () => {
  const { user } = useRecoveryData("userDetails");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/" element={<ProductDetail />} />
        <Route path="/product/:id" element={<ProductReview />} />

        <Route path="/products/:category" element={<Products />} />
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
          <Route
            path="/profile/admin/products"
            element={<Profile index={6} />}
          />
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
        )}
        <Route path="/pages/TermsOfService" element={<TermsOfService />} />
        <Route path="/pages/AboutUs" element={<AboutUs />} />
        <Route path="/pages/ContactUs" element={<ContactUs />} />
        <Route path="/pages/ReturnPolicy" element={<ReturnPolicy />} />
        <Route path="/pages/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/pages/Refund" element={<Refund />} />
        <Route path="/pages/CookiesPolicy" element={<CookiesPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
