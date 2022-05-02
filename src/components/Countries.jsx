import React from 'react'
import {getStates} from '@utils/getAddress'

const Countries = (props) => {
    const handleSelectCountry = (event) => {
        const isoCode = event.target.value
        const newStateCountry = getStates(isoCode)
        props.setStatesCountry(newStateCountry)
    }

    return(
        <select name='countries' defaultValue="default" onChange={handleSelectCountry}>
            <option value="default" disabled>Selecciona un país.</option>
            {props.countries.map(props.showCountries)}
            {props.children}
        </select>
    )
}
export {Countries}