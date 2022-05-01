import React from 'react'
import {useLocation} from 'react-router-dom'
import { Context } from '../hooks/stateContext'
import { animateBuyButton } from '@utils/animateBuyButton'
import '@styles/pages/SingleProduct.scss'

const SingleProduct = () => {
    const {addToCart, modal} = React.useContext(Context)
    const location = useLocation()
    const id = location.state
    const [product, setProduct] = React.useState(false)
    const API = process.env.API

    const handleBuyProduct = (event) => {
        animateBuyButton(event)
        addToCart(product)
    }

    const changeMainImage = (event) => {
        //Remove the dark bg of the last active thumbnail
        const thumbnailsBox = document.querySelector('.single-product__thumbnails')
        const thumbnails = Object.entries(thumbnailsBox.childNodes)
        const lastActiveThumbnail = thumbnails.filter((thumbnail) => thumbnail[1].className.includes('darken'))
        lastActiveThumbnail[0][1].classList.remove('darken-bg--thumbnail')

        //Put the dark bg to the clicked thumbnail
        const currentThumbnail = event.target
        currentThumbnail.classList.add('darken-bg--thumbnail')
        const newImage = currentThumbnail.src

        //Change the image of the main Image
        const principalImage = document.querySelector('.single-product__image--principal')
        principalImage.src = newImage
    }
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
            <main className='container__single-product'>
                <div className="single-product">
                    <div className='single-product__category'>
                        <h3>Category: </h3>
                        <img className='category__image' src={product.category.image} alt={product.category.name} />
                        <h4>{product.category.name}</h4>
                    </div>
                    <div className='single-product__thumbnails'>
                        {product.images.map((image, index) => (<img className={(index === 0 ? "thumbnail darken-bg--thumbnail " : "thumbnail" )} src={image} alt={product.name} key={index} onClick={changeMainImage} />))}
                    </div>
                    <picture className='single-product__image-box'>
                        <img className="single-product__image--principal" src={product.images[0]} alt={product.name} />
                    </picture>
                    <div className="title-price--single-product">
                        <h1 className='single-product__title'>{product.title}</h1>
                        <p className='single-product__price'>${product.price}</p>
                    </div>
                    <p className='single-product__description'>{product.description}</p>
                    <button id={`product-${product.id}`} className='product__buy-button' onClick={handleBuyProduct} disabled={modal}>Comprar</button>
                </div>
            </main>
        )
    }
}
export {SingleProduct}