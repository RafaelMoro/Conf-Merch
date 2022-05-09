import { FETCH_PRODUCTS, SET_PRODUCTS } from "./products.type"

const setProducts = (payload) => ({
    type: SET_PRODUCTS,
    payload
})
const fetchProducts = () => ({
    type: FETCH_PRODUCTS
})

export {setProducts, fetchProducts}