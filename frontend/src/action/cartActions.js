import Axios from "axios"
import Cookie from "js-cookie"

const userInfo = Cookie.get('userInfo') || null;
const serverUrl="https://sore-blue-jackrabbit-suit.cyclic.app/"
// const serverUrl="https://ecommerce-uday.herokuapp.com"
// const serverUrl="http://localhost:5000"

export const addToCart=(productId,qty)=>async (dispatch)=>{
    dispatch({type:"ADDTOCART_START",productId})
    try{
        const data= await Axios.get(serverUrl+"/api/products/" + productId)
        dispatch({type:"ADDTOCART_SUCCESS",data:{
            product:data.data._id,
            name:data.data.name,
            image:data.data.image,
            price:data.data.price,
            countInStock:data.data.countInStock,
            qty:1
        }})
    }
    catch(error){
        dispatch({type:"ADDTOCART_FAIL",data:error.message})
    }
}