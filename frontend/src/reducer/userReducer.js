const userRegisterReducer=(state={userInfo:null,loading:false,error:null},action)=>{
    switch (action.type) {
        case "REGISTER_START":
            return {...state,loading:true}
        case "REGISTER_SUCCESS":
            return {...state,loading:false,userInfo:action.data}
        case "REGISTER_FAIL":
            return {...state,loading:false,error:action.data}
        default:
            return state
    }
}
const userLoginReducer=(state={userInfo:null,loading:false,error:null},action)=>{
    switch (action.type) {
        case "LOGIN_START":
            return {...state,loading:true}
        case "LOGIN_SUCCESS":
            if(action.data){
                action.Cookie.set('userInfo', JSON.stringify(action.data))
            }
            return {...state,loading:false,userInfo:action.data}
        case "LOGIN_FAIL":
            return {...state,loading:false,error:action.data}
        case "LOGOUT":
            action.Cookie.remove("userInfo")
            return {loading:false,userInfo:null}
        default:
            return state
    }
}
export {userRegisterReducer,userLoginReducer}