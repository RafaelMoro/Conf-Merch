import React from 'react';
import '@styles/containers/Products.scss'
const Products = ({children}) => {
    return (
        <main className='products'>
            {children}
        </main>
    );
};

export {Products};