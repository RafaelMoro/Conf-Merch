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
        const newProduct = { ...item, quantity: 1 }
 
        if(newCart.length < 1) {
            newCart.push(newProduct)
            setState({
                ...state,
                cart: newCart
            })
        } else {
            //Check if the item already exists on the array
            const productExist = newCart.some(product => product.id === item.id)
            if(productExist) {
                //Create a new array modifying the quantity of the item
                const modifiedCart = newCart.map(product => {
                    if(product.id === item.id) {
                        return {
                            ...product,
                            quantity: product.quantity + 1
                        }
                    }else return product
                })
                setState({
                    ...state,
                    cart: modifiedCart
                })
            } else {
                //Push the new product to the cart
                newCart.push(newProduct)
                setState({
                    ...state,
                    cart: newCart
                })
            }   
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