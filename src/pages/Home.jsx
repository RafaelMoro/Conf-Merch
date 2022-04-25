import React from 'react'
import {Products} from '@containers/Products'
import {ProductHome} from '@components/ProductHome'
import {SearchBar} from '@components/SearchBar'
import { Context } from '../hooks/stateContext'
import '@styles/pages/Home.scss'

const Home = () => {
    const {modal, toggleCart, hideCart, filteredProducts} = React.useContext(Context)
    hideCart && toggleCart()
    return (
        <main className={(modal ? "home darken-bg" : "home")}>
            <SearchBar />
            <Products>
                {
                   filteredProducts && filteredProducts.map(product => (<ProductHome product={product} key={product.id} />) )
                }
            </Products>
        </main>
    );
};

export {Home}