import React from 'react'
import {useLocation} from 'react-router-dom'

const SingleProduct = () => {
    const location = useLocation()
    const id = location.state
    const [product, setProduct] = React.useState({})
    const API = process.env.API

    React.useEffect(() => {
        async function fetchProduct() {
            try {
                const fetchData = await fetch(`${API}/${id}`)
                const productFetched = await fetchData.json()
                setProduct(productFetched)
            }catch(err) {
                console.error('Fetching Single product Error', err)
            }
        }
        fetchProduct()
    }, [])
    return(
        <h1>{product.title}</h1>
    )
}
export {SingleProduct}