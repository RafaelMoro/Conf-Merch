import React from 'react';
import {Header} from '@components/Header'
import {Footer} from '@components/Footer'

import '@styles/components/Layout.scss'

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Header />
                {children}
            <Footer />
        </div>
    );
};

export {Layout};