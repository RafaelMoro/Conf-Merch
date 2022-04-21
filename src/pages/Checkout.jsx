import React from 'react'
import { Link } from 'react-router-dom'
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
                        (cart.length > 0) && cart.map(product => (product.quantity > 0 && <Product product={product} key={product.id} inHome={false} />))
                    }
                </div>
                <div className='checkout__total'>
                    <p>Precio total ${total}</p>
                    <button className='checkout__button--cancel'><Link to="/">Continuar comprando</Link></button>
                    <button className='checkout__button--pay'> <Link to="/information">Finalizar Pedido</Link></button>
                </div>
            </section>
        )
    } else {
        return(
            <article className='checkout--empty'>
                <h1>No tienes articulos en tu carrito</h1>
            </article>
        )
    }
}

export {Checkout}