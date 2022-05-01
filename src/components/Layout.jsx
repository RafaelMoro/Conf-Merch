import React from 'react';
import {Header} from '@components/Header'
import {Footer} from '@components/Footer'
import {Modal} from '@components/Modal'
import { Context } from '../hooks/stateContext';
import '@styles/components/Layout.scss'

const Layout = ({ children }) => {
    const {toggleModal, modal, state: {cart}} = React.useContext(Context)
    return (
        <div className="layout">
            {modal && <Modal cart={cart} toggleModal={toggleModal} modal={modal} />}
            <Header />
                {children}
            <Footer modal={modal} />
        </div>
    );
};

export {Layout};