import React from 'react'
import {getCitiesOfCountry} from '@utils/getAddress'

const Cities = (props) => {
    React.useEffect(() => {
        //If there's no country states, try to found their cities of that country
        if(props.address.statesCountry < 1) {
            //Attempt of getting the cities of a country in case no country state was found in that country
            const citiesOfCountry = getCitiesOfCountry(props.address.countrySelected[0])
            if(citiesOfCountry.length < 1) {
                props.setAddress({
                    ...props.address,
                    citySelected: 'No cities available on this country'
                })
            }
            props.setAddress({
                ...props.address,
                cities: citiesOfCountry
            })
        }
    }, [props.address.statesCountry])

    const handleSetCity = (event) => {
        const cityName = event.target.value
        const {address, setAddress} = props
        setAddress({
            ...address,
            citySelected: cityName
        })
    }

    return(
        <>
            {(props.address.cities.length < 1 && props.address.statesCountry.length < 1) && props.noCitiesAvailable()}
            { props.address.cities.length > 0 && <select className="input input--select" defaultValue="default" onChange={handleSetCity} disabled={props.address.cities[0] === "No State Selected"}>
                        <option value="default" disabled> Seleccione una ciudad: </option>
                        { props.address.cities.map(props.showCities) }
                        {props.children}
                    </select>
            }
        </>
    )
}
export {Cities}