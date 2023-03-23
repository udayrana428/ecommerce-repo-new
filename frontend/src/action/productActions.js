import Axios from "axios"
import Cookie from "js-cookie"

const userInfo = Cookie.get('userInfo') || null;
const serverUrl="https://sore-blue-jackrabbit-suit.cyclic.app/"
// const serverUrl="https://ecommerce-uday.herokuapp.com"
// const serverUrl="http://localhost:5000"

export const listProducts=(category='',searchKeyword='',sortOrder='')=>async (dispatch)=>{
    dispatch({type:"LIST_PRODUCT_START"})
    try{
        const data= await Axios.get(serverUrl+"/api/products/?category="+category+"&sortOrder="+sortOrder+"&searchKeyword="+searchKeyword)
        dispatch({type:"LIST_PRODUCT_SUCCESS",data:data})
    }
    catch(error){
        dispatch({type:"LIST_PRODUCT_FAIL",data:error.message})
    }
}
export const detailsProduct=(productId)=>async (dispatch)=>{
    dispatch({type:"DETAILS_PRODUCT_START"})
    try{
        const data= await Axios.get(serverUrl+"/api/products/"+productId)
        dispatch({type:"DETAILS_PRODUCT_SUCCESS",data:data.data})
    }
    catch(error){
        dispatch({type:"DETAILS_PRODUCT_FAIL",data:error.message})
    }
}
export const saveProductReview=(productId,review,token)=>async (dispatch,getState)=>{
    try{
        
        dispatch({type:"PRODUCT_REVIEW_SAVE_REQUEST",data:review})
        const {data}= await Axios.post(serverUrl+"/api/products/"+productId+"/reviews",review,{headers:{
            Authorization:"Bearer "+token
        }})
        dispatch({type:"PRODUCT_REVIEW_SAVE_SUCCESS",data:data})
        
    }
    catch(error){
        dispatch({type:"PRODUCT_REVIEW_SAVE_FAIL",data:error.message})
    }
}

