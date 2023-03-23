import React from 'react';
import { ApiTopPropduct } from '../componentApi/TopProductsApi';
import Product from './Product';
import {useSelector,useDispatch} from "react-redux"
const Products = () => {
    const listProductsReducer=useSelector(state=>state.listProductsReducer)
    const {products,loading,error}=listProductsReducer || {}
  return <div className='p-5 flex flex-wrap'>
      {
        // console.log(products)
          products.map((product, index)=>(
              <Product product={product} key={index}/>
          ))
      }
  </div>;
};

export default Products;
