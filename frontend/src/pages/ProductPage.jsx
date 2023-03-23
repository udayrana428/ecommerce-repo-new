import React, { useEffect, useState } from "react";
import Annoucne from "../components/Annoucne";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import Rating from "../components/Rating";
import Review from "../components/Review";
import { saveProductReview, detailsProduct } from "../action/productActions";
import {addToCart} from '../action/cartActions'
import Cookie from "js-cookie";

const ProductPage = () => {
  const dispatch = useDispatch();
  const detailsProductReducer = useSelector(
    (state) => state.detailsProductReducer
  );
  const { productInfo, loading, error } = detailsProductReducer || {};
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer || {};
  // const [data, setdata] = useState("");
  // const [token, settoken] = useState(null);
  // if (userInfo) {
  //   const { data } = userInfo;
  //   const { token } = data;
  //   setTimeout(() => {
  //     setdata(data);
  //     settoken(token);
  //   }, 1000);
  // }
  try {
    if(userInfo){

      var {data}=userInfo 
      var token = data.token;
    }
  } catch (error) {
    console.log(error)
  }
  const productId = localStorage.getItem("productId");
  try {
    
    var [review, setreview] = useState({
      name: data.name,
      rating: 0,
      comment: "",
    });
  } catch (error) {
    // console.log(error)
  }
  const handleChange = (e) => {
    e.preventDefault();
    setreview({ ...review, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveProductReview(productInfo._id, review, token));
  };
  const handleAddToCart=()=>{
    dispatch(addToCart(productId))
  }
  useEffect(() => {
    const timerout = setTimeout(() => {
      dispatch(detailsProduct(productId));
    }, 500);
    return () => clearTimeout(timerout);
  }, [review]);

  return (
    <div>
      <Annoucne />
      <Navbar />
      {productInfo && (
        <>
          <div className="flex justify-center mobile:flex-col mobile:mt-4 mobile:p-3">
            <div className="flex-1 h-[33rem] flex items-center justify-center">
              <img
                src={productInfo.image}
                className="product_img w-[50%] h-[50%]"
                alt="product_image"
              />
            </div>
            <div className="flex-[1.3] flex flex-col items-start  justify-items-center mt-10 mobile:items-center">
              <h1 className="title text-[40px] mobile:text-[30px]">
                {productInfo.name}
              </h1>
              <p className="disription pr-[4rem] mobile:mx-5 text-justify mt-4 mobile:pr-0">
                {productInfo.description}
              </p>
              <div className="flex flex-col place-self-start">
                <p className="mt-7 text-3xl">
                  Price: <b>Rs.{productInfo.price}</b>
                </p>

                <div className="colors flex mt-7 text-2xl">
                  Colors
                  <div className="colorSelect bg-red-600 "></div>
                  <div className="colorSelect bg-blue-600 "></div>
                  <div className="colorSelect bg-yellow-400 "></div>
                </div>
                {productInfo.category == "fashion" && (
                  <div className="mt-7 text-2xl">
                    Size
                    <select className="border-[2px] border-silver rounded-md ml-5">
                      <option defaultValue>Select</option>
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                      <option>XL</option>
                    </select>
                  </div>
                )}

                <div className="mt-7">
                  {productInfo.countInStock > 20
                    ? "Stock is available"
                    : productInfo.countInStock <= 20
                    ? "Hurry only few left"
                    : productInfo.countInStock < 1
                    ? "Out of stock"
                    : ""}
                </div>
              </div>

              <button onClick={handleAddToCart} className="text-white bg-[#8a4af3] rounded-md shadow-md mt-[30px] p-3">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="reviews flex h-auto mobile:flex-col">
            <div className="left flex-1 ">
              <h1>Total global reviews {productInfo.numReviews}</h1>
              <p>{productInfo.rating} out of 5</p>
              <div className="review-box">
                <Rating value={productInfo.rating} />
              </div>
              {userInfo && (
                <div className="give-review">
                  <h1 className="text-xl font-bold">Add your review..</h1>
                  <form
                    className="flex flex-col justify-between space-y-4 m-5"
                    onSubmit={handleSubmit}
                  >
                    <label htmlFor="rating" className="text-lg font-bold">
                      Give ratings
                    </label>
                    <select
                      name="rating"
                      id=""
                      className="w-32"
                      onChange={handleChange}
                    >
                      <option selected disabled>
                        select
                      </option>
                      <option value={1}>poor</option>
                      <option value={2}>fair</option>
                      <option value={3}>good</option>
                      <option value={4}>very good</option>
                      <option value={5}>excellent</option>
                    </select>
                    <label htmlFor="comment" className="text-lg font-bold">
                      Comment
                    </label>
                    <textarea
                      name="comment"
                      className="border"
                      placeholder="add your comment..."
                      cols="4"
                      rows="5"
                      onChange={handleChange}
                    ></textarea>
                    <button type="submit">Add</button>
                  </form>
                </div>
              )}
            </div>
            <div className="right flex-1">
              <h1>Customer Reviews</h1>
              {!productInfo.reviews.length && <div>There is no review</div>}
              {productInfo.reviews
                ? productInfo.reviews.map((review) => {
                    return <Review review={review} key={review._id} />;
                  })
                : ""}
            </div>
          </div>
        </>
      )}
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductPage;
