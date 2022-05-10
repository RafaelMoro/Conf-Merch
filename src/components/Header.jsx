import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '@actions/ui/ui.actions'
import logo from '@images/logo.webp'
import '@styles/components/Header.scss'

const Header = () => {
    const dispatch = useDispatch()
    const confMerch = useSelector(state => state.confMerch)
    const {cart, totalCartItems} = confMerch
    const [hideCart, setHideCart] = React.useState(false)
    const location = useLocation()

    const handleToggleModal = () => {
        const header = document.querySelector('.header')
        if(header.className.includes('header-fixed')) {
            header.classList.add('darken-bg--header')
        }else {
            header.classList.add('darken-bg')
        }
        dispatch(toggleModal())
    }
    React.useEffect(() => {
        //Depending of the pathname, the shopping cart will be hidden in any route with exception of "/" and any route that has the word product
         if((location.pathname === '/')||(location.pathname.includes('product'))){
             setHideCart(false)
         }else {
            setHideCart(true)
         }
    }, [location.pathname])

    return (
        <header id='header' className="header animated">
            <div className='title' >
                <Link to="/">
                    <img src={logo} alt="logo" />
                    Conf Merch
                 </Link>
            </div>
            <div className="search-bar__box">
            </div>
            {!hideCart && <div className="shopping-cart" onClick={handleToggleModal}>
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