import React from 'react'
import Counter from "./components/Counter";

const Cartproduct = () => {
  return (
    <>
     <div className="flex w-[100%] h-auto items-center mobile:flex-col">
              <div className=" product flex pl-5 self-start">
                <img
                  className="product_img w-[7rem]"
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                  alt="product_img"
                />

                <div className="disc flex items-start justify-between h-auto flex-col ml-6">
                  <p>
                    <b className="mr-2">ID:</b>123456789
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Dazzing Sky Shirt
                  </p>
                  <p className="flex items-center justify-center">
                    <b className="mr-2">Color:</b>
                    <div className="colorSelect bg-sky-500 ml-1 w-[20px] h-[20px]"></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>M
                  </p>
                </div>
              </div>

              {/*Price and Quantity Div*/}
              <div className="flex-auto flex flex-col justify-center items-center mobile:mt-7 mobile:mb-7">
                {/* <Counter /> */}
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>70$</b>
                </p>
              </div>
            </div>

            <hr className="mb-7 mt-7 mobile:mt-0" />
    </>
  )
}

export default Cartproduct