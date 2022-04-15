import React from 'react'
import initialState from '../initialState'

const Context = React.createContext()

const StateContext = (props) => {
    const [state, setState] = React.useState({})
    const [modal, setModal] = React.useState(false)

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
    const toggleModal = () => setModal(!modal)
    
    return(
        <Context.Provider value={{
            state,
            addToCart,
            toggleModal,
            modal
        }}>
            {props.children}
        </Context.Provider>
    )

}

export { Context, StateContext }