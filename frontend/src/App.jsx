import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Collection from './pages/Collection';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import PlaceOrder from './pages/PlaceOrder';
import Cart from './pages/Cart';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Order from './pages/Order';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {
  return (
    <div
      className='px-4 sm:px-[5vW] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/products/:id' element={<Products />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Order' element={<Order />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
