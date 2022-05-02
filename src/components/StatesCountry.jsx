import React from 'react'

const StatesCountry = (props) => {
        return(
            <>
                {props.statesCountry.length < 1 && props.noStatesAvailable()}
                {props.statesCountry.length > 0 && <select name='statesCountry' defaultValue="default" disabled={props.statesCountry[0] === 'No country selected'}>
                    <option value="default" disabled> Seleccione un estado: </option>
                    { props.statesCountry.map(props.showStates) }
                    {props.children}
                </select>}
            </>
        )
}
export {StatesCountry}