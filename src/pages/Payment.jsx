import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Context } from '../hooks/stateContext';

const Payment = () => {
    const {state: {cart, buyer}, addNewOrder} = React.useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const {state: {total}} = location

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
                        value: total
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
        <>
            <h1>Payment</h1>
            <PayPalScriptProvider options={paypalOptions}>
                <PayPalButtons style={{ layout: "vertical" }} createOrder={(data, actions) => handleCreateOrder(data, actions)} onApprove={data => handlePaymentSuccess(data)} />
            </PayPalScriptProvider>
        </>
    )
}
export {Payment}