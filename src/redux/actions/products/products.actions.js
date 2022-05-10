import { FETCH_PRODUCTS, SET_PRODUCTS, ADD_PRODUCT_CART } from "./products.type"

const setProducts = (payload) => ({
    type: SET_PRODUCTS,
    payload
})
const fetchProducts = () => ({
    type: FETCH_PRODUCTS
})
const addProductCart = (payload) => ({
    type: ADD_PRODUCT_CART,
    payload
})

export {setProducts, fetchProducts, addProductCart}