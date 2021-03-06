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

function* productsSaga() {
    yield takeEvery(FETCH_PRODUCTS, fetchProducts)
}
export {productsSaga}