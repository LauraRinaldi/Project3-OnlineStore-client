import { useState } from 'react'
import './App.css'
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Products from './components/Products'
import Categories from './components/Categories';
import Homepage from './pages/Homepage'
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart'
import AllProducts from './pages/AllProducts';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import ProductDetails from './pages/ProductDetails';

import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';

import ManageStore from './pages/ManageStore';
import Announcement from './components/Announcement';

const App = () => {
 
  const getToken = () => {
    return localStorage.getItem('authToken')
  }

  const LoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to='/login' />
  }

  const NotLoggedIn = () => {
    return !getToken() ? <Outlet /> : <Navigate to='/' />
  }
  
  const IsAdmin = () => {
    return localStorage.getItem('isAdmin') ? <Outlet /> : <Navigate to='/' />
  }

  return (
    <div className="App">
      <Announcement/>
      <Navbar />
 
      <Routes>      
        <Route path="/" element={ <Homepage /> } />
        <Route path="/all-products" element={ <AllProducts />} />
        <Route path="/product-details/:productId" element={<ProductDetails />} />

        <Route element={<LoggedIn />}>
          
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:productId" element={<EditProduct />} />
          <Route path="/cart" element={<Cart />} />

        </Route>

        <Route element={<NotLoggedIn />}>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Route>

        <Route element={<IsAdmin />} >

          <Route path="/manage-store" element={<ManageStore />} />
          <Route path='/add-product' element={<AddProduct />} />

        </Route>

      </Routes>
      
    </div>
  );
}
export default App;
