import React from 'react'
import {getCities} from '@utils/getAddress'

const StatesCountry = (props) => {
    const {address: {statesCountry}} = props

    const handleSelectCity = (event) => {
        const {address, setAddress} = props
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
                {statesCountry.length < 1 && props.noStatesAvailable()}
                {statesCountry.length > 0 && <select className="input input--select" defaultValue="default" onChange={handleSelectCity} disabled={statesCountry[0] === "No Country Selected"}>
                    <option value="default" disabled> Seleccione un estado: </option>
                    { statesCountry.map(props.showStates) }
                    {props.children}
                </select>}
            </>
        )
}
export {StatesCountry}