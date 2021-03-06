import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '@actions/ui/ui.actions'
import {Product} from '@components/Product'
import { unFixHeader } from '@utils/fixHeader'
import '@styles/components/Modal.scss'

const Modal = ({cart}) => {
    const dispatch = useDispatch()
    const quantityInputEmpty = useSelector(state => state.ui.quantityInputEmpty)

    const closeModal = () => {
        const divModal = document.querySelector('#modal')
        const header = document.querySelector('.header')

        divModal.classList.remove('fadeInRight')
        divModal.classList.add('fadeOutRight')
        setTimeout(() => {
            if(header.className.includes('darken-bg--header')) {
                header.classList.remove('darken-bg--header')
            }else if(header.className.includes('darken-bg')) {
                header.classList.remove('darken-bg')
            }
            dispatch(toggleModal())
        }, 500)
    }

    const goCheckout = () => {
        const searchInput = document.querySelector('.observer')
        searchInput && unFixHeader(searchInput)
        closeModal()
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
                    <p className='modal__description--empty'>Tu carrito est?? vacio</p>
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
                    {cart.map(product => (product.quantity > 0 && <Product product={product} key={product.id} />))}
                </div>
                <Link className='modal__pay-anchor' to="/checkout"><button className='modal__pay-button' disabled={quantityInputEmpty} onClick={goCheckout}>Proceder al pago</button></Link>
            </div>
        )
    }
    
}
export {Modal}