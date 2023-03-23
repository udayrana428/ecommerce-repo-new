import React,{useState,useEffect} from "react";
import Annoucne from "../components/Annoucne";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Cartchild from "../components/Cartchild";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
const Cart = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const addToCartReducer = useSelector((state) => state.addToCartReducer);
  const { cartItems } = addToCartReducer || {};
  const [shippingcharge, setshippingcharge] = useState(40)
  const [discount, setdiscount] = useState(50)
  const [totPrice, settotPrice] = useState(0)
  
  useEffect(() => {
    if(cartItems){
      settotPrice(cartItems.reduce((a, c) => a + c.price * c.qty, 0))
    }
  
    return () => {
    }
  }, [])
  

  const SummaryItemStyle = "SummaryItem flex justify-between mt-3 w-[100%]";
  const ProductDivStyle = "flex w-[100%] h-auto items-center mobile:flex-col";
  const PriceQuantityStyle =
    "flex-auto flex flex-col justify-center items-center mobile:mt-7 mobile:mb-7";
  return (
    <div>
      <Annoucne />
      <Navbar />
      <div className="p-3">
        <div className="flex justify-center text-5xl">Cart</div>

        {/* upper buttons div */}
        <div className="flex items-center justify-between mt-4 mobile:flex-col">
          <button className="btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] mt-0" onClick={()=>{navigate("/")}}>
            Continue Shopping
          </button>
          <div className="flex underline text-lg hover:cursor-pointer mobile:m-5">
            <p>Items in your Cart: {cartItems.length}</p>
            <p className="ml-5">Whishlist Items: 0</p>
          </div>
          <button className="btn mt-0">Checkout Now</button>
        </div>

        {/* vertically center parent div */}
        {cartItems && <div className="flex flex-row mt-7 mobile:flex-col">
          {/* product div */}
          <div className="flex flex-col flex-1">
            {cartItems &&
              cartItems.map((item) => {
                return <Cartchild item={item} key={item.product} />;
              })}
          </div>
          <div className="Summary flex-[0.4] flex flex-col items-center w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg p-5 text-lg mobile:mb-6">
            <h1 className="text-[2rem]">SUMMARY</h1>
            <div className={SummaryItemStyle}>
              <p>SubTotal:</p>
              <p>Rs.{totPrice}</p>
            </div>
            <div className={SummaryItemStyle}>
              <p>Shipping:</p>
              <p>Rs.{shippingcharge}</p>
            </div>
            <div className={SummaryItemStyle}>
              <p>Discount:</p>
              <p>-Rs.{discount}</p>
            </div>
            <div className={SummaryItemStyle + " text-3xl font-bold"}>
              <p>Total:</p>
              <p>Rs.{totPrice+shippingcharge-discount}</p>
            </div>
          </div>
        </div>}
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
