import React from 'react';
import { Link } from 'react-router-dom'
import '@styles/components/Header.scss'
const Header = () => {
    return (
        <header className='header'>
                <h1 className='title'><Link to="/"> Platzi conference Merch </Link></h1>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="38" height="38" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                </svg>
        </header>
    );
};

export {Header};