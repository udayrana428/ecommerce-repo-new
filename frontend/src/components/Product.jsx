import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { detailsProduct } from "../action/productActions";
import { addToCart } from "../action/cartActions";
import { useDispatch } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Product = (props) => {
  const { product } = props;
  const navigate = useNavigate();
  const [hoverEffects, setHoverEffects] = useState(" opacity-0");

  const [disable, setdisable] = useState(false);
  const iconStyle =
    "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer";

  const dispatch = useDispatch();
  const productId = product._id;
  function handleHoverEnter() {
    setHoverEffects(" opacity-1 bg-[rgba(0,0,0,0.2)]");
  }

  function handleHoverExit() {
    setHoverEffects(" opacity-0");
  }
  const handleAddToCart = () => {
    dispatch(addToCart(productId));
  };
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div
      className="flex items-center flex-col justify-center flex-1 min-w-[280px] min-h-[350px] m-2 overflow-hidden rounded-md shadow-lg mobile:max-w-[15rem] mobile:max-h-[14rem] mobile:min-w-[7rem] mobile:min-h-[7rem] relative box-border"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
    >
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <img src={product.image} className="max-w-[10rem]" alt="product" />
      <div className="w-[100%] text-center absolute bottom-0 bg-white p-2 text-lg">{product.name.slice(0,50)}</div>
      <div
        className={
          `flex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100` +
          hoverEffects
        }
      >
        <div className={iconStyle} onClick={handleAddToCart}>
          <ShoppingCartOutlined />
        </div>
        <div className={iconStyle}>
          <FavoriteBorderOutlined />
        </div>
        <button
          disabled={disable}
          className={iconStyle}
          onClick={() => {
            console.log("hello");
            setdisable(true);
            dispatch(detailsProduct(product._id));
            localStorage.setItem("productId", product._id);
            setTimeout(() => {
              navigate("../product");
            }, 1500);
            setOpen(!open);
          }}
        >
          <SearchOutlined />
        </button>
      </div>
    </div>
  );
};

export default Product;
