import React from 'react'
import {useLocation} from 'react-router-dom'

const SingleProduct = () => {
    const location = useLocation()
    const id = location.state
    const [product, setProduct] = React.useState({})
    const API = process.env.API

    

    React.useEffect(() => {
        // fetch(`${API}/${id}`)
        //     .then(response => response.json())
        //     .then(data => setProduct(data))
        //     .catch(err => console.error('Fetching Error', err))
        async function fetchProduct() {
            const fetchData = await fetch(`${API}/${id}`)
            const productFetched = await fetchData.json()
            setProduct(productFetched)
        }
        fetchProduct()
    }, [])
    return(
        <h1>{product.title}</h1>
    )
}
export {SingleProduct}