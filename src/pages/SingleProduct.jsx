import React from 'react'
import {useLocation} from 'react-router-dom'

const SingleProduct = () => {
    const location = useLocation()
    const id = location.state
    const [product, setProduct] = React.useState(false)
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
    if(product) {
        return(
            <main className="product">
                <picture className='product__image-box'>
                    <img className="product__image" src={product.images[0]} alt={product.name} />
                </picture>
                <div className="title-price">
                    <h3 className='product__title'>{product.title}</h3>
                    <p className='product__price'>${product.price}</p>
                </div>
                <p className='product__description'>{product.description}</p>
            </main>
        )
    }
}
export {SingleProduct}