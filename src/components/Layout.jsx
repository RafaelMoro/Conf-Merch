import React from 'react';
import {Header} from '@components/Header'
import {Footer} from '@components/Footer'
//import { Context } from '../hooks/stateContext';
import '@styles/components/Layout.scss'

const Layout = ({ children }) => {
    //const {state} = React.useContext(Context)
    return (
        <div className='layout'>
            <Header />
                {children}
            <Footer />
        </div>
    );
};

export {Layout};