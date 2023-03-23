import { HashRouter, Route, Router, Routes, useNavigate } from "react-router-dom";
import React,{useEffect} from 'react';
import Cart from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import { useDispatch,useSelector } from 'react-redux';
import { listProducts } from './action/productActions';
import ScrollToTop from "./utility/ScrollToTop";
function App() {
  // const navigate=useNavigate()
  // const dispatch=useDispatch()

  // dispatch(listProducts())
  return(
    <>
    <HashRouter>
      <ScrollToTop/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/product" element={<ProductPage/>}/>
        <Route exact path="/category" element={<CategoryPage/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
      </Routes>
    </HashRouter>
  </>
  );
  
}

export default App;
