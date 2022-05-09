import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/actions/products/products.actions'

import {Products} from '@containers/Products'
import {ProductHome} from '@components/ProductHome'
import {SearchBar} from '@components/SearchBar'
import { Context } from '../hooks/stateContext'
import { fixHeader } from '@utils/fixHeader'
import '@styles/pages/Home.scss'

const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    console.log(products)

    const {modal, filteredProducts} = React.useContext(Context)
    React.useEffect(() => {
        dispatch(fetchProducts())
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