import React from 'react'
import '@styles/components/Product.scss'
import { Context } from '../hooks/stateContext';
import { fixHeader } from '../utils/fixHeader';

const ProductHome = ({product}) => {
    const {addToCart} = React.useContext(Context)
    React.useEffect(() => {
        fixHeader()
    }, [])
    const handleBuyProduct = (event) => {
        const id = event.target.id
        const button = document.querySelector(`#${id}`)
        button.classList.add('rubberBand', 'animated')
        addToCart(product)
        setTimeout(() => button.classList.remove('rubberBand', 'animated'), 700)
    }
    return(
        <article className="product">
            <picture className='product__image-box'>
                <img className="product__image" src={product.image} alt={product.name} />
            </picture>
            <div className="title-price">
                <h3 className='product__title'>{product.title}</h3>
                <p className='product__price'>${product.price}</p>
            </div>
            <p className='product__description'>{product.description}</p>
            <button id={`product-${product.id}`} className='product__buy-button' onClick={handleBuyProduct}>Comprar</button>
        </article>
    )
}
export {ProductHome}