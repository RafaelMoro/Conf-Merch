import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Context } from '../hooks/stateContext';
import '@styles/pages/Payment.scss'

const Payment = () => {
    const {state: {cart, buyer, totalPayment}, addNewOrder} = React.useContext(Context)
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
        const newOrder = {
            buyer,
            products: cart,
            payment: data
        }
        addNewOrder(newOrder)
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