import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from '@pages/Home'
import { NotFound } from '@pages/NotFound'
import {Layout} from '@components/Layout'
import '@styles/main.scss'

const App = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App;