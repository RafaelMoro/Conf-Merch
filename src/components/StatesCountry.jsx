import React, { useEffect } from 'react'
import {getCities} from '@utils/getAddress'

const StatesCountry = ({ address, setAddress, showStates, noStatesAvailable}) => {
    const { statesCountry } = address
    
    const handleSelectCity = (event) => {
        const countryStateName = event.target.selectedOptions[0].label
        const countryStateCode = event.target.value
        const newCities = getCities( address.countrySelected[0], countryStateCode)
        setAddress({
            ...address,
            stateCountrySelected: [countryStateCode, countryStateName],
            cities: newCities
        })
    }
        return(
            <>
                {statesCountry.length < 1 && noStatesAvailable()}
                {statesCountry.length > 0 && <select id="statesCountry" className="input input--select" defaultValue="default" onChange={handleSelectCity} disabled={statesCountry[0] === "No Country Selected"}>
                    <option value="default" disabled> Seleccione un estado: </option>
                    { statesCountry.map(showStates) }
                </select>}
            </>
        )
}
export {StatesCountry}