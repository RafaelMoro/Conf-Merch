import React from 'react'

const Cities = (props) => {
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