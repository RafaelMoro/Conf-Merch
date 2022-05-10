import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleQuantityEmpty } from '@actions/ui/ui.actions'
import { modifyQuantity, deleteProductCart } from '@actions/products/products.actions'
import {ErrorMessage} from '@components/ErrorMessage'
import '@styles/components/Product.scss'

const Product = ({product}) => {
    const quantityInputEmpty = useSelector(state => state.ui.quantityInputEmpty)
    const dispatch = useDispatch()
    //This state is to show the user to fill a quantity but only the product where the input is empty
    const [fillQuantity, setFillQuantity] = React.useState(false)

    const handlerQuantity = (event) => {
        const newQuantity = event.target.value
        if(newQuantity == '') {
            !quantityInputEmpty && dispatch(toggleQuantityEmpty())
            setFillQuantity(true)
        }else {
            const quantityMessage = document.querySelector('.message')
            if(quantityMessage) {
                //Put the fade out animation to the message
                quantityMessage.classList.remove('message--fade-in')
                quantityMessage.classList.add('message--fade-out')
                setTimeout(() => setFillQuantity(false), 900)
            }
            quantityInputEmpty && dispatch(toggleQuantityEmpty())
            dispatch(modifyQuantity({newQuantity, product}))
        }
    }
    return (
        <article className="product--modal">
            <picture className='product__image-box'>
                <img className='product__image' src={product.images[0]} alt={product.name} />
            </picture>
            <div className="title-price--modal">
                <h3 className='product__title'>{product.title}</h3>
                <div className='quantity'>
                    <p>Cantidad: </p>
                    <input onChange={handlerQuantity} className={(fillQuantity ? "quantity__input input--error" : "quantity__input")} type='number' defaultValue={product.quantity} min='0' />
                </div>
                {fillQuantity && <ErrorMessage message="Por favor, ingrese una cantidad" cssClass="message--quantity" />}
                <div className='product__trash-price'>
                    <svg onClick={() => dispatch(deleteProductCart(product))} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="4" y1="7" x2="20" y2="7" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                    <p className='product__price'>${product.price}</p>
                </div>
            </div>
        </article>
    );
};

export {Product}