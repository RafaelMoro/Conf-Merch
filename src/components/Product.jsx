import React from 'react';
import '@styles/components/Product.scss'
import { Context } from '../hooks/stateContext';

const Product = ({product, inHome}) => {
    const {addToCart, modifyQuantity} = React.useContext(Context)

    const handlerQuantity = (event) => {
        const newQuantity = event.target.value
        if(newQuantity == '') {
            alert('ingrese una cantidad por favor')
        }else {
            modifyQuantity(newQuantity, product)
        }
    }
    return (
        <article className={(!inHome ? 'product--modal' : 'product')}>
            <picture className='product__image-box'>
                <img className='product__image' src={product.image} alt={product.name} />
            </picture>
            <div className={(!inHome ? 'title-price--modal' : 'title-price')}>
                <h3 className='product__title'>{product.title}</h3>
                {!inHome && <div className='quantity'>
                    <p>Cantidad: </p>
                    <input onChange={handlerQuantity} className='quantity__input' type='number' defaultValue={product.quantity} min='0' />
                </div> }
                <p className='product__price'>${product.price}</p>
            </div>
            {inHome && <p className='product__description'>{product.description}</p>}
            {inHome && <button className='product__buy-button' onClick={() => addToCart(product)}>Comprar</button>}
        </article>
    );
};

export {Product}