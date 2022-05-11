import React, { useEffect } from 'react'
import {getCitiesOfCountry} from '@utils/getAddress'

const Cities = ({ address, setAddress, showCities, noCitiesAvailable}) => {
    const { cities, statesCountry, countrySelected } = address
    const noStateSelected = cities[0] === "No State Selected" ? true : false
    
    useEffect(() => {
        //If there's no country states, try to found their cities of that country
        if(statesCountry < 1) {
            //Attempt of getting the cities of a country in case no country state was found in that country
            const countryCode = countrySelected[0]
            const citiesOfCountry = getCitiesOfCountry(countryCode)
            if(citiesOfCountry.length < 1) {
                setAddress({
                    ...address,
                    citySelected: "No cities available on this country"
                })
            }else {
                setAddress({
                    ...address,
                    cities: citiesOfCountry
                })
            }
        }
    }, [address.statesCountry])

    const handleSetCity = (event) => {
        const cityName = event.target.value
        setAddress({
            ...address,
            citySelected: cityName
        })
    }

    return(
        <>
            {(cities.length < 1 && statesCountry.length < 1) && noCitiesAvailable()}
            { cities.length > 0 && <select className="input input--select" defaultValue="default" onChange={handleSetCity} disabled={noStateSelected}>
                        <option value="default" disabled> Seleccione una ciudad: </option>
                        { cities.map(showCities) }
                    </select>
            }
        </>
    )
}
export {Cities}