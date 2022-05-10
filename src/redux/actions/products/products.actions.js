import { FETCH_PRODUCTS, SET_PRODUCTS, ADD_PRODUCT_CART, SET_FILTERED_PRODUCTS, SET_TOTALS, MODIFY_QUANTITY_PRODUCT, DELETE_PRODUCT_CART } from "./products.type"

export const setProducts = (payload) => ({
    type: SET_PRODUCTS,
    payload
})
export const fetchProducts = () => ({
    type: FETCH_PRODUCTS
})
export const setFilteredProducts = (payload) => ({
    type: SET_FILTERED_PRODUCTS,
    payload
})
export const setTotals = (payload) => ({
    type: SET_TOTALS,
    payload
})
export const addProductCart = (payload) => ({
    type: ADD_PRODUCT_CART,
    payload
})
export const modifyQuantity = (payload) => ({
    type: MODIFY_QUANTITY_PRODUCT,
    payload
})
export const deleteProductCart = (payload) => ({
    type: DELETE_PRODUCT_CART,
    payload
})