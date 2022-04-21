import React from 'react'
import '@styles/components/Product.scss'
import { Context } from '../hooks/stateContext';

const ProductHome = ({product}) => {
    const {addToCart} = React.useContext(Context)
    return(
        <article className="product">
            <picture className='product__image-box'>
                <img className='product__image' src={product.image} alt={product.name} />
            </picture>
            <div className="title-price">
                <h3 className='product__title'>{product.title}</h3>
            </div>
            <p className='product__description'>{product.description}</p>
            <button className='product__buy-button' onClick={() => addToCart(product)}>Comprar</button>
        </article>
    )
}
export {ProductHome}