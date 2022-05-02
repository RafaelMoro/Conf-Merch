import React from 'react'
import {getStates} from '@utils/getAddress'

const Countries = (props) => {
    const renderFunction = props.render

    const handleSelectCountry = (event) => {
        const isoCode = event.target.value
        const newStateCountry = getStates(isoCode)
        props.setStatesCountry(newStateCountry)
    }

    return(
        <>
            <label htmlFor='countries'>Selecciona un país: </label>
            <select name='countries' onChange={handleSelectCountry}>
                {props.countries.map(renderFunction)}
                {props.children}
            </select>
        </>
    )
}
export {Countries}