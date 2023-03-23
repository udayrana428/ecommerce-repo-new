import Axios from "axios"
import Cookie from "js-cookie"
const serverUrl="https://sore-blue-jackrabbit-suit.cyclic.app/"
// const serverUrl="https://ecommerce-uday.herokuapp.com"
// const serverUrl="http://localhost:5000"
export const register=(name,email,password)=>async (dispatch)=>{
    dispatch({type:"REGISTER_START",data:{name,email,password}})
    try{
        const data= await Axios.post(serverUrl+"/api/users/register",{name,email,password})
        dispatch({type:"REGISTER_SUCCESS",data:data})
        Cookie.set('userInfo', JSON.stringify(data))
    }
    catch(error){
        dispatch({type:"REGISTER_FAIL",data:error.message})
    }
}
export const login=(email,password,navigate)=>async (dispatch)=>{
    dispatch({type:"LOGIN_START",data:{email,password}})
    try{
        const data= await Axios.post(serverUrl+"/api/users/signin",{email,password})
        dispatch({type:"LOGIN_SUCCESS",data:data,Cookie})
        navigate("/")
    }
    catch(error){
        dispatch({type:"LOGIN_FAIL",data:error.message})
    }
}
export const logout=(navigate)=>async(dispatch)=>{
    dispatch({type:"LOGOUT",Cookie})
    navigate("/")
}