import React from 'react'
import {Products} from '@containers/Products'
import {ProductHome} from '@components/ProductHome'
import { Context } from '../hooks/stateContext';

const Home = () => {
    const {state: {products}, modal, toggleCart, hideCart} = React.useContext(Context)
    hideCart && toggleCart()
    return (
        <main className={(modal && "darken-bg")}>
            <Products>
                {
                   products && products.map(product => (<ProductHome product={product} key={product.id} />) )
                }
            </Products>
        </main>
    );
};

export {Home}