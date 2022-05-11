import React from 'react'
import {getCities} from '@utils/getAddress'

const StatesCountry = ({ address, setAddress, showStates, noStatesAvailable}) => {
    const { statesCountry, countrySelected } = address
    const noCountrySelected = statesCountry[0] === "No Country Selected" ? true : false
    
    const handleSelectCity = (event) => {
        const countryStateName = event.target.selectedOptions[0].label
        const countryStateCode = event.target.value
        const countryCode = countrySelected[0]
        const newCities = getCities( countryCode, countryStateCode)
        setAddress({
            ...address,
            stateCountrySelected: [countryStateCode, countryStateName],
            cities: newCities
        })
    }
        return(
            <>
                {statesCountry.length < 1 && noStatesAvailable()}
                {statesCountry.length > 0 && <select id="statesCountry" className="input input--select" defaultValue="default" onChange={handleSelectCity} disabled={noCountrySelected}>
                    <option value="default" disabled> Seleccione un estado: </option>
                    { statesCountry.map(showStates) }
                </select>}
            </>
        )
}
export {StatesCountry}