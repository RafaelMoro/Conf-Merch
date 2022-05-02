import React from 'react'

const Cities = (props) => {
    return(
        <>
            { props.address.cities.length > 0 && <select name='address.statesCountry' defaultValue="default" disabled={props.address.cities[0] === 'No State Selected'}>
                        <option value="default" disabled> Seleccione una ciudad: </option>
                        { props.address.cities.map(props.showCities) }
                        {props.children}
                    </select>
            }
        </>
    )
}
export {Cities}