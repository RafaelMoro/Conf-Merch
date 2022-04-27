import React from 'react'
import { Link } from 'react-router-dom'
import {Product} from '@components/Product'
import { Context } from '../hooks/stateContext';
import '@styles/components/Modal.scss'

const Modal = ({cart, toggleModal}) => {
    const {quantityEmpty, toggleQuantityEmpty} = React.useContext(Context)
    const closeModal = () => {
        const divModal = document.querySelector('#modal')
        divModal.classList.remove('fadeInRight')
        divModal.classList.add('fadeOutRight')

        setTimeout(() => toggleModal(), 500)
    }

    if(cart.length < 1) {
        return(
            <>
                <div id='modal' className="modal--empty fadeInRight animated">
                    <button className='modal__close-button' onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                    <h3 className='modal__title'>Tu carrito</h3>
                    <p className='modal__description--empty'>Tu carrito está vacio</p>
                </div>
            </>
        )
    }else {
        return (
            <div id='modal' className="modal fadeInRight animated">
                <button className='modal__close-button' onClick={closeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
                <h3 className='modal__title'>Tu carrito</h3>
                <div className='products--modal'>
                    {cart.map(product => (product.quantity > 0 && <Product product={product} key={product.id} quantityEmpty={quantityEmpty} toggleQuantityEmpty={toggleQuantityEmpty} />))}
                </div>
                <Link className='modal__pay-anchor' to="/checkout"><button className='modal__pay-button' disabled={quantityEmpty} onClick={closeModal}>Proceder al pago</button></Link>
            </div>
        )
    }
    
}
export {Modal}