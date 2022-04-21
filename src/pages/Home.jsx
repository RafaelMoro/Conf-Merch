import React from 'react'
import {Products} from '@containers/Products'
import {Product} from '@components/Product'
import { Context } from '../hooks/stateContext';

const Home = () => {
    const {state: {products}, modal} = React.useContext(Context)
    //This variable is to indicate if the products are being rendered on the modal or Home
    const inHome = true
    const inCheckout = false
    return (
        <main className={(modal && "darken-bg")}>
            <Products>
                {
                   products && products.map(product => (<Product product={product} key={product.id} inHome={inHome} inCheckout={inCheckout} />) )
                }
            </Products>
        </main>
    );
};

export {Home}