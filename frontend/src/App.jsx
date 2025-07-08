import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Client Pages
import HomePage from "./pages/HomePage";
import Collection from "./pages/Collection";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import PlaceOrder from "./pages/PlaceOrder";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Order from "./pages/Order";

// Shared Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Admin Pages
import Dashboard from "./assets/admin/pages/Dashboard";
import ViewItem from "./assets/admin/pages/ViewItem";
import AllOrders from "./assets/admin/pages/AllOrders";
import AddItem from "./assets/admin/pages/AddIItem";
import AdminLayout from "./assets/admin/layout/AdminLayout";
import SignUp from "./pages/SignUp";

const ClientLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const App = () => {
  return (
    <>
      <ToastContainer />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Public (Client) Layout */}
          <Route element={<ClientLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order" element={<Order />} />
          </Route>

          {/* Admin Layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-item" element={<AddItem />} />
            <Route path="products" element={<ViewItem />} />
            <Route path="users" element={<ViewItem />} />
            <Route path="orders" element={<AllOrders />} />
          </Route>

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
