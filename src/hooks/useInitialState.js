import React from 'react'
import {initialState} from '../initialState'

const useInitialState = () => {
    const [state, setState] = React.useState(initialState)
    return {
        state
    }
};

export {useInitialState};