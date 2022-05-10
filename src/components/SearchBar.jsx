import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredProducts } from '@actions/products/products.actions'
import {Context} from '../hooks/stateContext'
import '@styles/components/SearchBar.scss'

const SearchBar = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    const filterProducts = (event) => {
        const searchedValue = (event.target.value).toLowerCase()
        if(searchedValue.length < 1) {
            dispatch(setFilteredProducts(products))
        }else {
            const result = products.filter((product) => {
                const searchedProduct = product.title.toLowerCase()
                return searchedProduct.includes(searchedValue)
            })
            dispatch(setFilteredProducts(result))
        }
    }
    return(
        <input className='search-bar observer' type="text" placeholder='Buscar...' onChange={filterProducts} />
    )
}
export {SearchBar}