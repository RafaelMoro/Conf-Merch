import React from 'react'
import {Product} from '@components/Product'
import { Context } from '../hooks/stateContext';
import '@styles/pages/Checkout.scss'

const Checkout = () => {
    const {state: {cart}, modal} = React.useContext(Context)

    if((cart)&&(cart.length > 0)) {
        const total = cart.reduce((acc, product) => (acc + (product.price * product.quantity)), 0)
        return(
            <section className={(modal ? "darken-bg checkout" : "checkout")}>
                <h1 className='checkout__title'>Lista de articulos:</h1>
                <div className='products--checkout'>
                    {
                        (cart.length > 0) && cart.map(product => (<Product product={product} key={product.id} inHome={false} />))
                    }
                </div>
                <div className='checkout__total'>
                    <p>Precio total ${total}</p>
                    <button>Continuar Pedido</button>
                </div>
            </section>
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