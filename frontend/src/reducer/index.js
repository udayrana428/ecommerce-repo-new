import {userRegisterReducer,userLoginReducer} from "./userReducer";
import {listProductsReducer,detailsProductReducer,saveProductReviewReducer} from "./productReducer"
import {addToCartReducer} from './cartReducer'
import { combineReducers } from "redux";
const rootReducers=combineReducers({userRegisterReducer,userLoginReducer,listProductsReducer,detailsProductReducer,saveProductReviewReducer,addToCartReducer})
export default rootReducers;