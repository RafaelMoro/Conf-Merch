import React from 'react'
import initialState from '../initialState'

const Context = React.createContext()

const StateContext = (props) => {
    const [state, setState] = React.useState({})
    const [modal, setModal] = React.useState(false)

    React.useEffect(() => {
        setState(initialState)
    }, [])

    const addToCart = (item) => {
        const {cart} = state
        const newCart = [...cart]

        if(newCart.length > 0) {
            const cartModified = newCart.map(product => {
                if(product.id === item.id) {
                    console.log('son iguales')
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                }else {
                    return {...product}
                }
            })
            console.log(cartModified)
            setState({
                ...state,
                cart: cartModified
            })
        } else {
            const newProduct = {
                ...item,
                quantity: 1
            }
            newCart.push(newProduct)
            setState({
                ...state,
                cart: newCart
            })
            console.log(state)
        }

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