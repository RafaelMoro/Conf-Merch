import {call, put, takeEvery} from 'redux-saga/effects'
import {getProducts} from '../../api/getProducts'
import {setProducts} from '../actions/products/products.actions'
import {FETCH_PRODUCTS} from '../actions/products/products.type'

function* fetchProducts(action) {
    try {
        const products = yield call(getProducts)
        console.log(products)
        yield put(setProducts(products))
    } catch (error) {
        console.error(error)
    }
}

function* productsSaga() {
    yield takeEvery(FETCH_PRODUCTS, fetchProducts)
}
export {productsSaga}