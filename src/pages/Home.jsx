import React from 'react'
import {Products} from '@containers/Products'
import {Product} from '@components/Product'
import { Context } from '../hooks/stateContext';

const Home = () => {
    const {state: {products}, modal} = React.useContext(Context)
    const isModal = false
    return (
        <main className={(modal && "darken-bg")}>
            <Products>
                {
                   products && products.map(product => (<Product product={product} key={product.id} isModal={isModal}/>) )
                }
            </Products>
        </main>
    );
};

export {Home}