import React from 'react'
import initialState from '../initialState'
import {Products} from '@containers/Products'
import {Product} from '@components/Product'

const Home = () => {
    const products = initialState.products
    return (
        <>
            <Products>
                {
                    products.map(product => (<Product product={product} />) )
                }
            </Products>
        </>
    );
};

export {Home}