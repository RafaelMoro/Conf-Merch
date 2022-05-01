import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../hooks/stateContext';
import logo from '@images/logo.webp'
import '@styles/components/Header.scss'

const Header = ({modal}) => {
    const {state: {cart, totalCartItems}, toggleModal} = React.useContext(Context)
    const [hideCart, setHideCart] = React.useState(false)
    const location = useLocation()

    React.useEffect(() => {
        //Depending of the pathname, the shopping cart will be hidden in any route with exception of "/" and "/checkout"
         if((location.pathname === '/') || (location.pathname === '/checkout')){
             setHideCart(false)
         }else {
             if(location.pathname.includes('product')) {
                 console
                setHideCart(false)
             }else {
                setHideCart(true)
             } 
         }
    }, [location.pathname])
    
    React.useEffect(() => {
        const header = document.querySelector('.header')
        //The animations of header-fixed will only happen in the pathname "/"
        if(location.pathname === '/') {
            //If modal is active, add the darken-bg CSS class, if not, remove it
            if(modal) {
                header.classList.add('darken-bg')
            }else {
                if(header.className.includes('darken-bg')) {
                    header.classList.remove('darken-bg')
                }
            }
        }else {
           header.className = "header animated"
        }
    }, [modal])

    return (
        <header id='header' className="header animated">
            <div className='title' >
                <Link to="/">
                    <img src={logo} alt="logo" />
                    Platzi Merch
                 </Link>
            </div>
            <div className="search-bar__box">
            </div>
            {!hideCart && <div className="shopping-cart" onClick={toggleModal}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="38" height="38" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                </svg>
                {(cart)&&(cart.length > 0) && <p className='cart-number'>{totalCartItems}</p>}
            </div>}
        </header>
    );
};

export {Header};