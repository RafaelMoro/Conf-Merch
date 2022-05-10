import { FETCH_PRODUCTS, SET_PRODUCTS, ADD_PRODUCT_CART, SET_FILTERED_PRODUCTS, SET_TOTALS } from "./products.type"

const setProducts = (payload) => ({
    type: SET_PRODUCTS,
    payload
})
const fetchProducts = () => ({
    type: FETCH_PRODUCTS
})
const setFilteredProducts = (payload) => ({
    type: SET_FILTERED_PRODUCTS,
    payload
})
const setTotals = (payload) => ({
    type: SET_TOTALS,
    payload
})
const addProductCart = (payload) => ({
    type: ADD_PRODUCT_CART,
    payload
})

export {setProducts, fetchProducts, addProductCart, setFilteredProducts, setTotals}