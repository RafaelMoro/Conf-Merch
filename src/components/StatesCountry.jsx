import React from 'react'
import {getCities} from '@utils/getAddress'

const StatesCountry = (props) => {
    const {address: {statesCountry}} = props

    const handleSelectCity = (event) => {
        const codeStateCountry = event.target.value
        const newCities = getCities( props.address.countrySelected, codeStateCountry)
        props.setAddress({
            ...props.address,
            stateCountrySelected: codeStateCountry,
            cities: newCities
        })
    }
        return(
            <>
                {statesCountry.length < 1 && props.noStatesAvailable()}
                {statesCountry.length > 0 && <select className='input input--select' name='statesCountry' onChange={handleSelectCity} defaultValue="default" disabled={statesCountry[0] === 'No Country Selected'}>
                    <option value="default" disabled> Seleccione un estado: </option>
                    { statesCountry.map(props.showStates) }
                    {props.children}
                </select>}
            </>
        )
}
export {StatesCountry}