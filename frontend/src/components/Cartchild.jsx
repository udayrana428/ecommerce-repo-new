import React,{useState} from "react";
import Counter from "./Counter";
import {addToCart} from '../action/cartActions'
import {useDispatch} from 'react-redux'
const Cartchild = (props) => {
  const dispatch=useDispatch()
  const { item } = props;
  const [countervalue, setcountervalue] = useState(1)
  const productId=item.product
  const qty=countervalue
  const handleInc=()=>{
    setcountervalue(countervalue+1)
    setTimeout(() => {
      dispatch(addToCart(productId,qty))
    }, 500);
  }
  const handleDec=()=>{
    if(countervalue>1){
      setcountervalue(countervalue-1)
    }
  }

  return (
    <>
      <div className="flex w-[100%] h-auto justify-between items-center mobile:flex-col">
        <div className=" overflow-hidden product flex pl-5 self-start max-w-lg">
          <img
            className="product_img w-[7rem] max-h-28"
            src={item.image}
            alt="product_img"
          />

          <div className="disc flex items-start w-72 justify-between h-auto flex-col ml-6">
            <p>
              <b className="mr-2">ID:</b>
              {item.product}
            </p>
            <p>
              <b className="mr-2">Product:</b>
              {item.name}
            </p>
            <p className="flex items-center justify-center">
              <b className="mr-2">Color:</b>
              <div className="colorSelect bg-sky-500 ml-1 w-[20px] h-[20px]"></div>
            </p>
            <p>
              <b className="mr-2">Stock:</b>
              {item.countInStock}
            </p>
          </div>
        </div>

        {/*Price and Quantity Div*/}
        <div className="flex-auto flex flex-col justify-center items-center mobile:mt-7 mobile:mb-7">
          <div className="counter flex items-center text-xl justify-start">
            Quantity
            <div className="ml-5 shadow-md flex">
              <div onClick={handleDec} className="bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer">
                -
              </div>
              <div className="w-8 flex items-center justify-center border-[1px] border-[#8a4af3]">
                {countervalue}
              </div>
              <div onClick={handleInc} className="bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer">
                +
              </div>
            </div>
          </div>
          <p className="flex items-center justify-center text-4xl mt-3">
            <b>Rs.{item.price}</b>
          </p>
        </div>
      </div>

      <hr className="mb-7 mt-7 mobile:mt-0" />
    </>
  );
};

export default Cartchild;
