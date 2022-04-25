import React from 'react'
import {Products} from '@containers/Products'
import {ProductHome} from '@components/ProductHome'
import {SearchBar} from '@components/SearchBar'
import { Context } from '../hooks/stateContext'
import '@styles/pages/Home.scss'

const Home = () => {
    const {state: {products}, modal, toggleCart, hideCart} = React.useContext(Context)
    hideCart && toggleCart()
    return (
        <main className={(modal ? "home darken-bg" : "home")}>
            <SearchBar />
            <Products>
                {
                   products && products.map(product => (<ProductHome product={product} key={product.id} />) )
                }
            </Products>
        </main>
    );
};

export {Home}