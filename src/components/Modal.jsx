import React from 'react'
import '@styles/components/Modal.scss'
import {Products} from '@containers/Products'
import {Product} from '@components/Product'

const Modal = ({cart, toggleModal}) => {
    const isModal = true

    const closeModal = () => {
        const divModal = document.querySelector('#modal')
        divModal.classList.remove('fadeInRight')
        divModal.classList.add('fadeOutRight')

        setTimeout(() => toggleModal(), 400)
    }

    if(cart.length < 1) {
        return(
            <>
                <div id='modal' className={(isModal ? "modal--empty fadeInRight animated" : "modal--empty fadeOutRight animated")}>
                    <button className='modal__close-button' onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
            <div id='modal' className={(isModal ? "modal fadeInRight animated" : "modal fadeOutRight animated")}>
                <button className='modal__close-button' onClick={closeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
                <h3 className='modal__title'>Tu carrito</h3>
                <div className='products--modal'>
                    {cart.map(product => (<Product product={product} key={product.id} isModal={isModal} />))}
                </div>
                <button className='modal__pay-button'>Proceder al pago</button>
            </div>
        )
    }
    
}
export {Modal}