import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from '@pages/Home'
import { NotFound } from '@pages/NotFound'
import { Checkout } from '@pages/Checkout'
import {Information} from '@pages/Information'
import {Layout} from '@components/Layout'
import {StateContext} from '../hooks/stateContext'
import '@styles/main.scss'

const App = () => {
    return(
        <BrowserRouter>
            <StateContext>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/checkout" element={<Checkout />} />
                        <Route exact path="/information" element={<Information />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </StateContext>
        </BrowserRouter>
    )
}

export default App;