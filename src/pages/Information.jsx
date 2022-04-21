import React from 'react'
import {Product} from '@components/Product'
import { Context } from '../hooks/stateContext';

const Information = () => {
    const {state: {cart}} = React.useContext(Context)
    if((cart)&&(cart.length > 0)) {
        return (
            <>
                <main className='information'>
                    <h1>Información de contacto: </h1>
                    <form action="#">
                        <input type="text" placeholder="Nombre Completo" name="name" />
                        <input type="email" placeholder="Correo electrónico" name="email" />
                        <input type="number" placeholder="Teléfono" name="phone" />
                        <fieldset>
                            <legend>Dirección</legend>
                            <input type="text" placeholder="Dirección" name="address" />
                            <input type="text" placeholder="apto" name="apto" />
                            <input type="text" placeholder="Ciudad" name="city" />
                            <input type="text" placeholder="País" name="country" />
                            <input type="text" placeholder="Estado" name="state" />
                            <input type="text" placeholder="Código Postal" name="cp" />
                        </fieldset>
                    </form>
                    <div>
                        <button>Regresar</button>
                        <button>Pagar</button>
                    </div>
                </main>
                <aside>
                    <h2>Resumen de su compra: </h2>
                    <div className='products--information'>
                        {
                            (cart.length > 0) && cart.map(product => (product.quantity > 0 && <Product product={product} key={product.id} inHome={false} />))
                        }
                    </div>
                </aside>
            </>
        )
    } else {
        return (
            <article className='checkout--empty'>
                <h1>No tienes articulos en tu carrito</h1>
            </article>
        )
    }
}

export {Information}