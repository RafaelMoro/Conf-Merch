import React from 'react';
import '@styles/components/Footer.scss'
const Footer = ({modal}) => {
    return (
        <footer className={(modal ? "footer darken-bg" : "footer")}>
            <div className='left-title'>
                <p>Platzi Conference Merch</p>
            </div>
            <div className='right-title'>
                <p>Todos los izquierdos reservados</p>
            </div>
        </footer>
    );
};

export {Footer};