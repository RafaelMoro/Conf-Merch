import React from 'react'
import { useSelector } from 'react-redux'
import {Header} from '@components/Header'
import {Footer} from '@components/Footer'
import {Modal} from '@components/Modal'
import '@styles/components/Layout.scss'

const Layout = ({ children }) => {
    const cart = useSelector(state => state.confMerch.cart)
    const modal = useSelector(state => state.ui.modal)
    return (
        <div className="layout">
            {modal && <Modal cart={cart}/>}
            <Header />
                {children}
            <Footer modal={modal} />
        </div>
    );
};

export {Layout};