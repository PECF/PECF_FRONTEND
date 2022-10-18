// import { TermsOfService } from "../pages/TermsOfService";
// import { ChangePassword } from "../pages/ChangePassword";
// import { AdminDashboard } from "../pages/AdminDashboard";
// import { ManageProducts } from "../pages/ManageProducts";
// import { SearchResults } from "../pages/SearchResults";
// import { ResetPassword } from "../pages/ResetPassword";
// import { PrivacyPolicy } from "../pages/PrivacyPolicy";
// import { ManageOrders } from "../pages/ManageOrders";
// import { PageNotFound } from "../pages/PageNotFound";
// import { ReturnPolicy } from "../pages/ReturnPolicy";
// import { EditProduct } from "../pages/EditProduct";
// import { Route, Redirect } from "react-router-dom";
// import { EditProfile } from "../pages/EditProfile";
// import { AddProduct } from "../pages/AddProduct";
// import { Categories } from "../pages/Categories";
// import { EditOrder } from "../pages/EditOrder";
// import { PrivateRoute } from "./PrivateRoute";
// import { Checkout } from "../pages/Checkout";
// import { Wishlist } from "../pages/Wishlist";
// import { Register } from "../pages/Register";
// import { Products } from "../pages/Products";
// import { Category } from "../pages/Category";
// import { Contact } from "../pages/Contact";
// import { Product } from "../pages/Product";
// import { Address } from "../pages/Address";
// import { Profile } from "../pages/Profile";
// import { AdminRoute } from "./AdminRoute";
import { useAuth } from "./AuthProvider";
// import { Orders } from "../pages/Orders";
// import { Brands } from "../pages/Brands";
// import { Search } from "../pages/Search";
// import { Brand } from "../pages/Brand";
// import { About } from "../pages/About";
// import { Order } from "../pages/Order";
// import { Login } from "../pages/Login";
// import { Home } from "../pages/Home";
// import { Cart } from "../pages/Cart";
import React from "react";

export const Routes: React.FC = () => {
  const { user } = useAuth();
  return (
    <>
      {/* <Route exact path="/">
        {user ? <Redirect to="/home" /> : <Login />}
      </Route>
      <Route exact path="/register">
        {user ? <Redirect to="/home" /> : <Register />}
      </Route>
      <Route exact path="/home">
        {user ? <Home /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/cart">
        {user ? <Cart /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/wishlist">
        {user ? <Wishlist /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/product/:id">
        {user ? <Product /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/products">
        {user ? <Products /> : <Redirect to="/" />}
      </Route>
      <PrivateRoute exact path="/checkout">
        <Checkout />
      </PrivateRoute>
      <PrivateRoute exact path="/orders">
        <Orders />
      </PrivateRoute>
      <PrivateRoute exact path="/profile">
        <Profile />
      </PrivateRoute>
      <PrivateRoute exact path="/edit-profile">
        <EditProfile />
      </PrivateRoute>
      <PrivateRoute exact path="/address">
        <Address />
      </PrivateRoute>
      <PrivateRoute exact path="/order/:id">
        <Order />
      </PrivateRoute>
      <Route exact path="/search">
        {user ? <Search /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/category/:id">
        {user ? <Category /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/categories">
        {user ? <Categories /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/search-results">
        {user ? <SearchResults /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/brand/:id">
        {user ? <Brand /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/brands">
        {user ? <Brands /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/page-not-found">
        {user ? <PageNotFound /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/contact">
        {user ? <Contact /> : <Redirect to="/" />}
      </Route>

      <Route exact path="/about">
        {user ? <About /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/privacy-policy">
        {user ? <PrivacyPolicy /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/terms-of-service">
        {user ? <TermsOfService /> : <Redirect to="/" />}
      </Route>

      <Route exact path="/return-policy">
        {user ? <ReturnPolicy /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/reset-password">
        {user ? <Redirect to="/home" /> : <ResetPassword />}
      </Route>
      <Route exact path="/change-password">
        {user ? <ChangePassword /> : <Redirect to="/" />}
      </Route>
      <AdminRoute exact path="/admin">
        <AdminDashboard />
      </AdminRoute>
      <AdminRoute exact path="/admin/manage-products">
        <ManageProducts />
      </AdminRoute>
      <AdminRoute exact path="/admin/add-product">
        <AddProduct />
      </AdminRoute>
      <AdminRoute exact path="/admin/edit-product/:id">
        <EditProduct />
      </AdminRoute>
      <AdminRoute exact path="/admin/manage-orders">
        <ManageOrders />
      </AdminRoute>
      <AdminRoute exact path="/admin/edit-order/:id">
        <EditOrder />
      </AdminRoute> */}
    </>
  );
};
