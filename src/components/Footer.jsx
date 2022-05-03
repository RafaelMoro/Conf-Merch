import React from 'react';
import '@styles/components/Footer.scss'

const Footer = ({modal}) => {
    return (
        <footer className={(modal ? "footer darken-bg" : "footer")}>
            <div className='left-title'>
                <p>Conf Merch</p>
            </div>
            <div className='right-title'>
                <p>Todos los derechos reservados</p>
            </div>
        </footer>
    );
};

export {Footer};