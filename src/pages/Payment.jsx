import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import { addOrder } from '@actions/products/products.actions'
import '@styles/pages/Payment.scss'

const Payment = () => {
    const dispatch = useDispatch()
    const confMerch = useSelector(state => state.confMerch)
    const { cart, buyers, totalPayment, totalCartItems } = confMerch
    const navigate = useNavigate()

    const paypalOptions = {
        'client-id': process.env.CLIENT_ID,
        intent: 'capture',
        currency: 'USD'
    }
    const handleCreateOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: totalPayment
                    }
                }
            ]
        })
    }

    const handlePaymentSuccess = (data) => {
        const newCart = cart.map(product => {
            const { id, title, description, price, quantity } = product
            return {
                id,
                title,
                description,
                price,
                quantity
            }
        })
        const newOrder = {
            buyers,
            products: newCart,
            amountOfProducts: totalCartItems,
            total: totalPayment,
            payment: data
        }
        dispatch(addOrder(newOrder))
        navigate('/checkout/success')
    }
    
    return(
        <main className='payment'>
            <h1 className='payment__title'>Método de pago:</h1>
            <p className='payment__total'>Total a pagar: <span>${totalPayment} USD</span></p>
            <div className='payment__buttons'>
                <PayPalScriptProvider options={paypalOptions}>
                    <PayPalButtons style={{ layout: "vertical" }} createOrder={(data, actions) => handleCreateOrder(data, actions)} onApprove={data => handlePaymentSuccess(data)} />
                </PayPalScriptProvider>
            </div>
            
        </main>
    )
}
export {Payment}