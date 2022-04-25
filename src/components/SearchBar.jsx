import React from 'react'
import '@styles/components/SearchBar.scss'

const SearchBar = () => {
    return(
        <input className='input search-bar' type="text" placeholder='Buscar...' />
    )
}
export {SearchBar}