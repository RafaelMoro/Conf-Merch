import React from 'react'
import {getStates} from '@utils/getAddress'

const Countries = (props) => {
    const handleSelectCountry = (event) => {
        const codeCountry = event.target.value
        const statesOfCountry = getStates(codeCountry)
        props.setAddress({
            ...props.address,
            countrySelected: codeCountry,
            statesCountry: statesOfCountry
        })
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