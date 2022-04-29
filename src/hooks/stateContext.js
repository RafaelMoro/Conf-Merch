import React from 'react'

const Context = React.createContext()

const StateContext = (props) => {
    const API = process.env.API
    const [state, setState] = React.useState({
        cart: [],
        buyer: [],
        orders: [],
        products: [],
        totalCartItems: 0,
        totalPayment: 0
    })
    const [filteredProducts, setFilteredProducts] = React.useState([])
    const [modal, setModal] = React.useState(false)
    //This state is to lock the proceed or pay button on Modal and Checkout
    const [quantityEmpty, setQuantityEmpty] = React.useState(false)

    React.useEffect(() => {
        fetch(`${API}?offset=10&limit=30`)
            .then(response => response.json())
            .then(data => {
                setState({
                    ...state,
                    products: data
                })
                setFilteredProducts(data)
            })
            .catch(error => console.error('Fetching Error', error))
    }, [])

    React.useEffect(() => {
        const {cart} = state
        if(cart) {
            const totalQuantityItems = cart.reduce((acc, product) => acc + parseInt(product.quantity), 0)
            const totalPay = cart.reduce((acc, product) => (acc + (product.price * product.quantity)), 0)
            setState({
                ...state,
                totalCartItems: totalQuantityItems,
                totalPayment: totalPay
            })
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

    const addBuyer = (person) => {
        const {buyer} = state
        const newBuyer = [...buyer]
        newBuyer.push(person)
        setState({
            ...state,
            buyer: newBuyer
        })
    }

    const addNewOrder = (order) => {
        setState({
            ...state,
            orders: order
        })
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

    const resetCart = () => {
        setState({
            ...state,
            cart: [],
            totalCartItems: 0,
            totalPayment: 0
        })
    }

    const toggleModal = () => setModal(!modal)
    const toggleQuantityEmpty = () => setQuantityEmpty(!quantityEmpty)

    return(
        <Context.Provider value={{
            state,
            addToCart,
            toggleModal,
            modal,
            modifyQuantity,
            deleteProductFromCart,
            addBuyer,
            addNewOrder,
            resetCart,
            filteredProducts,
            setFilteredProducts,
            toggleQuantityEmpty,
            quantityEmpty,
        }}>
            {props.children}
        </Context.Provider>
    )

}

export { Context, StateContext }