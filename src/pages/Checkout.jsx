import React from 'react'
import {ProductCheckout} from '@components/ProductCheckout'
import { Context } from '../hooks/stateContext';

const Checkout = () => {
    const {state: {cart}} = React.useContext(Context)
    console.log(cart)
    if((cart)&&(cart.length > 0)) {
        return(
            <main className='checkout'>
                <h1 className='checkout__title'>Lista de articulos:</h1>
                {
                    (cart.length > 0) && cart.map(product => (<ProductCheckout product={product} />))
                }
            </main>
        )
    } else {
        return(
            <main>
                <h1>Lista de articulos:</h1>
                <h2>No tienes articulos en tu carrito</h2>
            </main>
        )
    }
}

export {Checkout}