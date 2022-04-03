import React from 'react';

const Product = ({product}) => {
    return (
        <article>
            <picture>
                <img src={product.image} alt={product.name} />
            </picture>
            <h3>{product.title}</h3> <p>{product.price}</p>
            <p>{product.description}</p>
        </article>
    );
};

export {Product}