import { FETCH_PRODUCTS } from "./products.type"

const setProducts = (payload) => ({
    type: FETCH_PRODUCTS,
    payload
})

export {setProducts}