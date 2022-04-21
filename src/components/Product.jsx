import React from 'react';
import '@styles/components/Product.scss'
import { Context } from '../hooks/stateContext';

const Product = ({product, inHome, inCheckout}) => {
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
                {inCheckout && <div className='product__trash-price'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="4" y1="7" x2="20" y2="7" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                        <p className='product__price'>${product.price}</p>
                    </div>}
                {!inCheckout && <p className='product__price'>${product.price}</p>}
            </div>
            {inHome && <p className='product__description'>{product.description}</p>}
            {inHome && <button className='product__buy-button' onClick={() => addToCart(product)}>Comprar</button>}
        </article>
    );
};

export {Product}