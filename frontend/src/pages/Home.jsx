import React, { useEffect } from "react";
import Annoucne from "../components/Annoucne";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { listProducts } from "../action/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listProductsReducer = useSelector((state) => state.listProductsReducer);
  const { products } = listProductsReducer;

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <div className="">
      <div className="hidden">
        <Alert severity="error">This is an error alert — check it out!</Alert>
      </div>
      <Annoucne />
      <Navbar />
      <Slider />
      <div className="text-[30px] font-bold text-center mt-10">
        Shop by Categories
      </div>
      <Categories />
      <div className="text-[30px] font-bold text-center m-3 ">
        Shop by Products
      </div>
      {products && <Products />}
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
