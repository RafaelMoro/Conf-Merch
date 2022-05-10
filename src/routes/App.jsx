import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from '@redux-saga/core'
import { productsSaga } from '../redux/sagas'
import { rootReducer } from '../redux/reducers/root.reducer'

import { Home } from '@pages/Home'
import { NotFound } from '@pages/NotFound'
import { Checkout } from '@pages/Checkout'
import {Information} from '@pages/Information/Information'
import {Payment} from '@pages/Payment'
import {Success} from '@pages/Success'
import {Layout} from '@components/Layout'
import {StateContext} from '../hooks/stateContext'
import {SingleProduct} from '@pages/SingleProduct'
import '@styles/main.scss'

const sagaMiddleware = createSagaMiddleware()
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose
const composedEnhancers = composeAlt(applyMiddleware(sagaMiddleware))
const store = createStore(rootReducer, composedEnhancers)
sagaMiddleware.run(productsSaga)
const App = () => {
    return(
        <BrowserRouter>
            <Provider store={store}>
            <StateContext>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/product/:productId" element={<SingleProduct />} />
                        <Route exact path="/checkout" element={<Checkout />} />
                        <Route exact path="/checkout/information" element={<Information />} />
                        <Route exact path="/checkout/payment" element={<Payment />} />
                        <Route exact path="/checkout/success" element={<Success />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </StateContext>
            </Provider>
        </BrowserRouter>
    )
}

export default App;