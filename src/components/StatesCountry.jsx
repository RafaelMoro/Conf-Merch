import React from 'react'

const StatesCountry = (props) => {
    const renderFunction = props.render
    if(props.statesCountry.length > 0) {
        return(
            <select name='statesCountry' disabled={props.statesCountry[0] === 'No country selected'}>
                <option value="" selected>Seleccione un estado: </option>
                { props.statesCountry.map(renderFunction) }
                {props.children}
            </select>
        )
    }else {
        return (
            <p>No hay estados disponibles para este país.</p>
        )
    }
    
}
export {StatesCountry}