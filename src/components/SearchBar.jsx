import React from 'react'
import {Context} from '../hooks/stateContext'
import '@styles/components/SearchBar.scss'

const SearchBar = () => {
    const {state: {products}, setFilteredProducts} = React.useContext(Context)

    const filterProducts = (event) => {
        const searchedValue = (event.target.value).toLowerCase()
        if(searchedValue.length < 1) {
            setFilteredProducts(products)
        }else {
            const result = products.filter((product) => {
                const searchedProduct = product.title.toLowerCase()
                return searchedProduct.includes(searchedValue)
            })
            setFilteredProducts(result)
        }
    }
    return(
        <input className='input search-bar' type="text" placeholder='Buscar...' onChange={filterProducts} />
    )
}
export {SearchBar}