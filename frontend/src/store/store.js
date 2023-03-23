import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
  } from "redux";
  import thunk from "redux-thunk";
  import rootReducers from "../reducer/index.js";
  import Cookie from "js-cookie"

  const userInfo = Cookie.get('userInfo') || null;
  const initialState = {
    userSignin: { userInfo },
  };
  
  function saveToLocalStorage(store) {
    try {
        const serializedStore = JSON.stringify(store);
        window.localStorage.setItem('store', serializedStore);
    } catch(e) {
        console.log(e);
    }
  }
  
  function loadFromLocalStorage() {
    try {
        const serializedStore = window.localStorage.getItem('store');
        if(serializedStore === null) return undefined;
        return JSON.parse(serializedStore);
    } catch(e) {
        console.log(e);
        return undefined;
    }
  }
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const persistedState = loadFromLocalStorage();
  
  const store = createStore(rootReducers, persistedState, composeEnhancers(applyMiddleware(thunk)));
  
  store.subscribe(() => saveToLocalStorage(store.getState()));
  
  export default store;