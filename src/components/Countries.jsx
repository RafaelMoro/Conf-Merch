import React from 'react'
import {getStates} from '@utils/getAddress'

const Countries = (props) => {
    const handleSelectCountry = (event) => {
        const countryName = event.target.selectedOptions[0].label
        const countryCode = event.target.value
        const countryStates = getStates(countryCode)
        props.setAddress({
            ...props.address,
            countrySelected: [countryCode, countryName],
            statesCountry: countryStates
        })
    }

    return(
        <select className='input input--select' defaultValue="default" onChange={handleSelectCountry}>
            <option value="default" disabled>Selecciona un país.</option>
            {props.countries.map(props.showCountries)}
            {props.children}
        </select>
    )
}
export {Countries}