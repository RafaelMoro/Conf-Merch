import React from 'react';
import '@styles/containers/Products.scss'
const Products = ({children}) => {
    return (
        <section className='products'>
            {children}
        </section>
    );
};

export {Products};