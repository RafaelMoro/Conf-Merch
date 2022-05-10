import {call, put, takeEvery} from 'redux-saga/effects'
import { getProducts, getSingleProduct } from '../../api/getProducts'
import { setProducts, setSingleProduct } from '../actions/products/products.actions'
import { FETCH_PRODUCTS, FETCH_SINGLE_PRODUCT } from '../actions/products/products.type'

function* fetchProducts(action) {
    try {
        const products = yield call(getProducts)
        yield put(setProducts(products))
    } catch (error) {
        console.error('fetching products error',error)
    }
}

function* fetchSingleProduct(action) {
    try {
        const product = yield call(getSingleProduct, action.payload)
        yield put(setSingleProduct(product))
    } catch (error) {
        console.error('fetching single product error',error)
    }
}

function* productsSaga() {
    yield takeEvery(FETCH_PRODUCTS, fetchProducts)
    yield takeEvery(FETCH_SINGLE_PRODUCT, fetchSingleProduct)
}
export {productsSaga}