import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, setTotals } from '@actions/products/products.actions'
import {Header} from '@components/Header'
import {Footer} from '@components/Footer'
import {Modal} from '@components/Modal'
import '@styles/components/Layout.scss'

const Layout = ({ children }) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.confMerch.cart)
    const modal = useSelector(state => state.ui.modal)

    React.useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    React.useEffect(() => {
        if(cart.length > 0) {
            const totalQuantityItems = cart.reduce((acc, product) => acc + parseInt(product.quantity), 0)
            const totalPay = cart.reduce((acc, product) => (acc + (product.price * product.quantity)), 0)
            dispatch(setTotals({totalQuantityItems, totalPay}))
        }
    }, [cart])
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