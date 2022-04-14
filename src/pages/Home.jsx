import React from 'react'
import {Products} from '@containers/Products'
import {Product} from '@components/Product'
import { Context } from '../hooks/stateContext';

const Home = () => {
    const {state: {products}} = React.useContext(Context)
    return (
        <>
            <Products>
                {
                   products && products.map(product => (<Product product={product} key={product.id} />) )
                }
            </Products>
        </>
    );
};

export {Home}