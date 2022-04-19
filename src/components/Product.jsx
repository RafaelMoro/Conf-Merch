import React from 'react';
import '@styles/components/Product.scss'
import { Context } from '../hooks/stateContext';

const Product = ({product, inModal}) => {
    const {addToCart} = React.useContext(Context)
    return (
        <article className={(inModal ? 'product--modal' : 'product')}>
            <picture className='product__image-box'>
                <img className='product__image' src={product.image} alt={product.name} />
            </picture>
            <div className={(inModal ? 'title-price--modal' : 'title-price')}>
                <h3 className='product__title'>{product.title}</h3>
                {inModal && <p className='product__quantity'>Quantity: {product.quantity}</p>}
                <p className='product__price'>${product.price}</p>
            </div>
            {!inModal && <p className='product__description'>{product.description}</p>}
            {!inModal && <button className='product__buy-button' onClick={() => addToCart(product)}>Comprar</button>}
        </article>
    );
};

export {Product}