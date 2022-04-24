import React from 'react';
import { Link } from 'react-router-dom'
import { Context } from '../hooks/stateContext';
import logo from '@images/logo.png'
import '@styles/components/Header.scss'

const Header = ({modal}) => {
    const {state: {cart}, toggleModal, totalCart, hideCart} = React.useContext(Context)
    return (
        <header className={(modal ? "header darken-bg" : "header")}>
            <div className='title' >
                <Link to="/">
                    <img src={logo} alt="logo" />
                    Platzi Merch
                 </Link>
            </div>
            {!hideCart && <div className="shopping-cart" onClick={toggleModal}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="38" height="38" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                </svg>
                {(cart)&&(cart.length > 0) && <p className='cart-number'>{totalCart}</p>}
            </div>}
        </header>
    );
};

export {Header};