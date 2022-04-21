import React from 'react'
import initialState from '../initialState'

const Context = React.createContext()

const StateContext = (props) => {
    const [state, setState] = React.useState({})
    const [modal, setModal] = React.useState(false)
    const [totalCart, setTotalCart] = React.useState(0)

    React.useEffect(() => {
        setState(initialState)
    }, [])

    React.useEffect(() => {
        const {cart} = state
        if(cart) {
            const totalQuantity = cart.reduce((acc, product) => acc + parseInt(product.quantity), 0)
            setTotalCart(totalQuantity)
        }
    }, [state.cart])

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
            const productExist = cart.some(product => product.id === item.id)
            if(productExist) {
                //Create a new array modifying the quantity of the item
                const modifiedCart = cart.map(product => {
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
    const modifyQuantity = (quantity, item) => {
        const quantityNumber = parseInt(quantity)
        const {cart} = state
        if(quantityNumber === 0) {
            deleteProductFromCart(item)
        }
        if(cart) {
            const cartModified = cart.map(product => {
                if(product.id === item.id) {
                    return {
                        ...product,
                        quantity: quantityNumber
                    }
                }else return product
            })
            setState({
                ...state,
                cart: cartModified
            })
        }
    }

    const deleteProductFromCart = (item) => {
        const {id} = item
        const {cart} = state
        if(cart) {
            const cartModified = cart.filter(product => product.id !== id)
            setState({
                ...state,
                cart: cartModified
            })
        }
    }
    const toggleModal = () => setModal(!modal)
    
    return(
        <Context.Provider value={{
            state,
            addToCart,
            toggleModal,
            modal,
            totalCart,
            modifyQuantity,
            deleteProductFromCart
        }}>
            {props.children}
        </Context.Provider>
    )

}

export { Context, StateContext }