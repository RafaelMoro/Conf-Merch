import React from 'react'
import initialState from '../initialState'

const useInitialState = () => {
    const [state, setState] = React.useState(initialState)

    const addToCart = (product) => {
        const {cart} = state
        const newCart = [...cart]
        newCart.push(product)
        setState({
            ...state,
            cart: newCart
        })
    }
    return {
        state,
        addToCart
    }
};

export {useInitialState};