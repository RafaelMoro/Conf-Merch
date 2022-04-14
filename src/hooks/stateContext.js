import React from 'react'
import initialState from '../initialState'

const Context = React.createContext()

const StateContext = (props) => {
    const [state, setState] = React.useState({})

    React.useEffect(() => {
        setState(initialState)
    }, [])

    const addToCart = (product) => {
        const {cart} = state
        const newCart = [...cart]
        newCart.push(product)
        setState({
            ...state,
            cart: newCart
        })
    }
    return(
        <Context.Provider value={{
            state,
            addToCart
        }}>
            {props.children}
        </Context.Provider>
    )

}

export { Context, StateContext }