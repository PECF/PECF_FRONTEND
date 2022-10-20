// Path: src/routes/Routes.tsx
// Language: typescript jsx
// "react-router-dom": "^6.4.1", NO USING SWITCH

import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { AdminRoute } from "./AdminRoute";
import { Home } from "../pages/Home";
import { UpdatePassword } from "../pages/user/UpdatePassword";
// import { Login } from "../pages/Login";
// import { Register } from "../pages/Register";
// import { ForgotPassword } from "../pages/ForgotPassword";
// import { UpdateProfile } from "../pages/UpdateProfile";
// import { Admin } from "../pages/Admin";
// import { NotFound } from "../pages/NotFound";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<UpdatePassword />} />

      {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <PrivateRoute path="/update-profile" element={<UpdateProfile />} />
      <AdminRoute path="/admin" element={<Admin />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

// import { AdminDashboard } from "../pages/AdminDashboard"; // esta
// import { ChangePassword } from "../pages/ChangePassword"; // esta
// import { ManageProducts } from "../pages/ManageProducts"; // esta
// import { TermsOfService } from "../pages/TermsOfService"; //  Thomas ? 
// import { ResetPassword } from "../pages/ResetPassword";  // esta
// import { SearchResults } from "../pages/SearchResults";  // esta en duda!
// import { PrivacyPolicy } from "../pages/PrivacyPolicy";  // esta
// import { PageNotFound } from "../pages/PageNotFound";  // esta
// import { ReturnPolicy } from "../pages/ReturnPolicy";
// import { ManageOrders } from "../pages/ManageOrders";
// import { EditProduct } from "../pages/EditProduct";
// import { EditProfile } from "../pages/EditProfile";
// import { Redirect, Route } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
// import UpdatePassword from "../views/user/UpdatePassword";
// import { getProducts } from "../redux/actions/productsActions";
// import { AddProduct } from "../pages/AddProduct";
// import { Categories } from "../pages/Categories";
// import { EditOrder } from "../pages/EditOrder";
// import { PrivateRoute } from "./PrivateRoute";
// import { Checkout } from "../pages/Checkout";
// import { Wishlist } from "../pages/Wishlist";
// import { Products } from "../pages/Products";
// import { Register } from "../pages/Register";
// import { Category } from "../pages/Category";
// import { Address } from "../pages/Address";
// import { Contact } from "../pages/Contact";
// import { Product } from "../pages/Product";
// import { Profile } from "../pages/Profile";
// import { AdminRoute } from "./AdminRoute";
// import { Search } from "../pages/Search";
// import { Orders } from "../pages/Orders";
// import { Brands } from "../pages/Brands";
// import { Order } from "../pages/Order";
// import { Login } from "../pages/Login";
// import { About } from "../pages/About";
// import { Brand } from "../pages/Brand";
// import { Cart } from "../pages/Cart";
// import { Home } from "../pages/Home";
// import React from "react";

// export const Routes: React.FC = () => {
//   const { user } = useAuth();
//   return (
//     <>
//       <Route exact path="/">
//         {user ? <Redirect to="/home" /> : <Login />}
//       </Route>
//       <Route exact path="/register">
//         {user ? <Redirect to="/home" /> : <Register />}
//       </Route>
//       <PrivateRoute exact path="/home">
//         <Home />
//       </PrivateRoute>
//       <Route exact path="/cart">
//         {user ? <Cart /> : <Redirect to="/" />}
//       </Route>
//       <Route exact path="/wishlist">
//         {user ? <Wishlist /> : <Redirect to="/" />}
//       </Route>
//       <Route exact path="/product/:id">
//         {user ? <Product /> : <Redirect to="/" />}
//       </Route>
//       <Route exact path="/products">
//         {user ? <Products /> : <Redirect to="/" />}
//       </Route>
//       <PrivateRoute exact path="/checkout">
//         <Checkout />
//       </PrivateRoute>
//       <PrivateRoute exact path="/orders">
//         <Orders />
//       </PrivateRoute>
//       <PrivateRoute exact path="/profile">
//         <Profile />
//       </PrivateRoute>
//       <PrivateRoute exact path="/edit-profile">
//         <EditProfile />
//       </PrivateRoute>
//       <PrivateRoute exact path="/address">
//         <Address />
//       </PrivateRoute>
//       <PrivateRoute exact path="/order/:id">
//         <Order />
//       </PrivateRoute>
//       <Route exact path="/search">
//         {user ? <Search /> : <Redirect to="/" />}
//       </Route>
//       <Route exact path="/category/:id">
//         {user ? <Category /> : <Redirect to="/" />}
//       </Route>
//       <Route exact path="/categories">
//         {user ? <Categories /> : <Redirect to="/" />}
//       </Route>
//       <Route exact path="/brand/:id">
//         {user ? <Brand /> : <Redirect to="/" />}
//       </Route>
//       <Route exact path="/brands">
//         {user ? <Brands /> : <Redirect to="/" />}
//       </Route>
//       <Route exact path="/search-results">
//         {user ? <SearchResults /> : <Redirect to="/" />}
//       </Route>
//       <Route exact path="/contact">
//         {user ? <Contact /> : <Redirect to="/" />}
//       </Route>
//       <Route exact path="/about">
//         {user ? <About /> : <Redirect to="/" />}
//       </Route>
//       <Route exact path="/privacy-policy">
//         {user ? <PrivacyPolicy /> : <Redirect to="/" />}
//       </Route>
//       <Route exact path="/terms-of-service">
//         {user ? <TermsOfService /> : <Redirect to="/" />}
//       </Route>
//       <Route exact path="/return-policy">
//         {user ? <ReturnPolicy /> : <Redirect to="/" />}
//       </Route>
//       <Route exact path="/reset-password">
//         {user ? <Redirect to="/home" /> : <ResetPassword />}
//       </Route>
//       <Route exact path="/change-password">
//         {user ? <ChangePassword /> : <Redirect to="/" />}
//       </Route>
//       <AdminRoute exact path="/admin">
//         <AdminDashboard />
//       </AdminRoute>
//       <AdminRoute exact path="/admin/manage-products">
//         <ManageProducts />
//       </AdminRoute>
//       <AdminRoute exact path="/admin/add-product">
//         <AddProduct />
//       </AdminRoute>
//       <AdminRoute exact path="/admin/edit-product/:id">
//         <EditProduct />
//       </AdminRoute>
//       <AdminRoute exact path="/admin/manage-orders">
//         <ManageOrders />
//       </AdminRoute>
//       <AdminRoute exact path="/admin/edit-order/:id">
//         <EditOrder />
//       </AdminRoute>
//       <Route path="*">
//         <PageNotFound />
//       </Route>
//     </>
//   );
// };

// // Path: src/routes/PrivateRoute.tsx
// // Language: typescript
// import React from "react";
// import { Redirect, Route } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// export const PrivateRoute: React.FC = ({ children, ...rest }) => {
//   const { user } = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         user ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/",
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };

// // Path: src/routes/AdminRoute.tsx
// // Language: typescript
// import React from "react";
// import { Redirect, Route } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// export const AdminRoute: React.FC = ({ children, ...rest }) => {
//   const { user } = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         user?.isAdmin ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/",
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };
