const listProductsReducer=(state = { products: null,loading:false,error:false},action)=>{
    switch (action.type) {
        case "LIST_PRODUCT_START":
            return {...state,loading:true,}
        case "LIST_PRODUCT_SUCCESS":
            return {...state,loading:false,products:action.data.data}
        case "LIST_PRODUCT_FAIL":
            return {...state,loading:false,error:action.data}
    
        default:
            return state;
    }
}
const detailsProductReducer=(state = { productInfo:null,loading:false,error:false},action)=>{
    switch (action.type) {
        case "DETAILS_PRODUCT_START":
            return {...state,loading:true,}
        case "DETAILS_PRODUCT_SUCCESS":
            return {...state,loading:false,productInfo:action.data}
        case "DETAILS_PRODUCT_FAIL":
            return {...state,loading:false,error:action.data}
    
        default:
            return state;
    }
}
const saveProductReviewReducer=(state = { review:null,success:false,loading:false,error:false},action)=>{
    switch (action.type) {
        case "PRODUCT_REVIEW_SAVE_REQUEST":
            return {...state,loading:true,}
        case "PRODUCT_REVIEW_SAVE_SUCCESS":
            return {...state,loading:false,review:action.data,success:true}
        case "PRODUCT_REVIEW_SAVE_FAIL":
            return {...state,loading:false,error:action.data}
        case "PRODUCT_REVIEW_SAVE_RESET":
            return {review:null,success:false,loading:false}
    
        default:
            return state;
    }
}
export {listProductsReducer,detailsProductReducer,saveProductReviewReducer}