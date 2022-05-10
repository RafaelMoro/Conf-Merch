import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {addProductCart} from '@actions/products/products.actions'
import '@styles/components/Product.scss'
import { unFixHeader } from '@utils/fixHeader'
import { registerImageObserver } from '@utils/lazyImages'
import { animateBuyButton } from '@utils/animateBuyButton'

const ProductHome = ({product}) => {
    const dispatch = useDispatch()
    const modal = useSelector(state => state.ui.modal)
    const navigate = useNavigate()
    
    const handleBuyProduct = (event) => {
        animateBuyButton(event)
        dispatch(addProductCart(product))
    }

    const lazyLoadingImages = () => {
        const element = document.querySelector(`#productImage-${product.numberProduct}`)
        element.dataset.src = product.images[0]
        registerImageObserver(element)
    }

    const seeMoreInformationProduct = (event) => {
        const element = event.target.nodeName
        if(element === 'BUTTON') {
            return false
        }
        const searchInput = document.querySelector('.observer')
        unFixHeader(searchInput)
        navigate(`/product/:${product.id}`, {state: product.id})
    }
    React.useEffect(() => {
        lazyLoadingImages()
    }, [])

    return(
        <article className="product" onClick={seeMoreInformationProduct}>
            <picture className='product__image-box'>
                <img id={`productImage-${product.numberProduct}`} className="product__image" alt={product.name} />
            </picture>
            <div className="title-price">
                <h3 className='product__title'>{product.title}</h3>
                <p className='product__price'>${product.price}</p>
            </div>
            <p className='product__description'>{product.description}</p>
            <button id={`product-${product.id}`} className='product__buy-button' onClick={handleBuyProduct} disabled={modal}>Comprar</button>
        </article>
    )
}
export {ProductHome}