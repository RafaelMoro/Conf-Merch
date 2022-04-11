import React from 'react';
import '@styles/components/Product.scss'

const Product = ({product}) => {
    return (
        <article className='product'>
            <picture className='product__image-box'>
                <img className='product__image' src={product.image} alt={product.name} />
            </picture>
            <div className='title-price'>
                <h3 className='product__title'>{product.title}</h3> <p className='product__price'>${product.price}</p>
            </div>
            <p className='product__description'>{product.description}</p>
            <button className='product__buy-button'>Comprar</button>
        </article>
    );
};

export {Product}