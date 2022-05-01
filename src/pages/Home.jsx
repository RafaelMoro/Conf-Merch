import React from 'react'
import {Products} from '@containers/Products'
import {ProductHome} from '@components/ProductHome'
import {SearchBar} from '@components/SearchBar'
import { Context } from '../hooks/stateContext'
import { fixHeader } from '@utils/fixHeader';
import { getCountries } from '../utils/getAddress'
import '@styles/pages/Home.scss'

const Home = () => {
    const {modal, filteredProducts} = React.useContext(Context)
    React.useEffect(() => {
        const searchInput = document.querySelector('.observer')
        fixHeader(searchInput)
    }, [])
    return (
        <main className={(modal ? "home darken-bg" : "home")}>
            <SearchBar />
            <Products>
                {
                   filteredProducts && filteredProducts.map((product, index) => {
                       const newProduct = {
                           ...product,
                           numberProduct: index + 1
                       }
                   return <ProductHome product={newProduct} key={product.id} />
                } )
                }
            </Products>
        </main>
    );
};

export {Home}