const addToCartReducer = (state = { cartItems: [], shipping: {}, payment: {} }, action) => {
    switch (action.type) {
        case "ADDTOCART_START":
            return { ...state, loading: true, }
        case "ADDTOCART_SUCCESS":
            const item = action.data
            const product = state.cartItems.find(x => x.product === item.product)
            if (product) {
                return {
                    cartItems: state.cartItems.map(x => x.product === product.product ? item : x)
                }
            }
            return { ...state, cartItems: [...state.cartItems, item], loading: false }
        default:
            return state;
    }
}

export { addToCartReducer }