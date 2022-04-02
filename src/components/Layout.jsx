import React from 'react';
import {Header} from '@components/Header'
import {Footer} from '@components/Footer'

const Layout = ({ children }) => {
    return (
        <main className="main">
            <Header />
                {children}
            <Footer />
        </main>
    );
};

export {Layout};