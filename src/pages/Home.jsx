import React from 'react'
import {Products} from '@containers/Products'
import {Product} from '@components/Product'
import {useInitialState} from '../hooks/useInitialState'

const Home = () => {
    const {state: {products}} = useInitialState()
    return (
        <>
            <Products>
                {
                    products.map(product => (<Product product={product} key={product.id} />) )
                }
            </Products>
        </>
    );
};

export {Home}