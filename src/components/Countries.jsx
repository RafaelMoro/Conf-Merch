import React from 'react'
import {getStates} from '@utils/getAddress'

const Countries = ({ address, setAddress, countries, children, showCountries}) => {
    const handleSelectCountry = (event) => {
        const countryName = event.target.selectedOptions[0].label
        const countryCode = event.target.value
        const countryStates = getStates(countryCode)
        setAddress({
            ...address,
            countrySelected: [countryCode, countryName],
            statesCountry: countryStates
        })
    }

    return(
        <select className="input input--select" defaultValue="default" onChange={handleSelectCountry}>
            <option value="default" disabled>Selecciona un país.</option>
            {countries.map(showCountries)}
            {children}
        </select>
    )
}
export {Countries}