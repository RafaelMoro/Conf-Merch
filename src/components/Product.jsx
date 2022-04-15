import React from 'react';
import '@styles/components/Product.scss'
import { Context } from '../hooks/stateContext';

const Product = ({product}) => {
    const {addToCart, modal} = React.useContext(Context)
    return (
        <article className={(modal ? 'product--modal' : 'product')}>
            <picture className='product__image-box'>
                <img className='product__image' src={product.image} alt={product.name} />
            </picture>
            <div className={(modal ? 'title-price--modal' : 'title-price')}>
                <h3 className='product__title'>{product.title}</h3> <p className='product__price'>${product.price}</p>
            </div>
            {!modal && <p className='product__description'>{product.description}</p>}
            {!modal && <button className='product__buy-button' onClick={() => addToCart(product)}>Comprar</button>}
        </article>
    );
};

export {Product}