import { SET_PRODUCTS, ADD_PRODUCT_CART, SET_FILTERED_PRODUCTS } from "@actions/products/products.type"

const initialState = {
    products: [],
    filteredProducts: [],
    cart: []
}

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                filteredProducts: action.payload
            }
        case ADD_PRODUCT_CART:
            const newProduct = {...action.payload, quantity: 1}
            const { cart } = state
            //If the cart is empty, add the product into it.
            if(cart.length < 1) {
                return {...state, cart: [newProduct]}
            }else {
                //If the cart is not empty, check if the product has been already added
                const productExist = cart.some(product => product.id === action.payload.id)
                if(productExist) {
                    //If the product has been added, modify the quantity
                    const modifiedCart = [...cart]
                    const currentProductIndex = cart.findIndex(item => item.id === action.payload.id )
                    if(currentProductIndex >= 0) {
                        //muto mi objeto de mi nuevo arreglo
                        modifiedCart[currentProductIndex] = {
                            ...modifiedCart[currentProductIndex],
                            quantity: modifiedCart[currentProductIndex].quantity + 1
                        }
                    }
                    return {...state, cart: modifiedCart}
                }else {
                    //The product is new in the cart, add it.
                    return {...state, cart: [...cart, newProduct]}
                }
            }
        case SET_FILTERED_PRODUCTS:
            return {...state, filteredProducts: action.payload}
        default:
            return {...state}
    }
}

export {productsReducer}