import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import {Product} from '@components/Product'
import { Context } from '../hooks/stateContext';
import '@styles/pages/Checkout.scss'

const Checkout = () => {
    const modal = useSelector(state => state.ui.modal)
    const cart = useSelector(state => state.confMerch.cart)
    const {state: { totalPayment}, quantityEmpty} = React.useContext(Context)

    if((cart)&&(cart.length > 0)) {
        return(
            <section className={(modal ? "darken-bg checkout" : "checkout")}>
                <h1 className='checkout__title'>Lista de articulos:</h1>
                <div className='checkout__products'>
                    {
                        (cart.length > 0) && cart.map(product => (product.quantity > 0 && <Product product={product} key={product.id} />))
                    }
                </div>
                <div className='checkout__total'>
                    <p>Precio total: <span>${totalPayment} USD</span></p>
                    <Link to="/"><button className='button--cancel'>Continuar comprando</button></Link>
                    <Link to="/checkout/information"><button className='button--proceed' disabled={quantityEmpty}>Finalizar Pedido</button></Link>
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