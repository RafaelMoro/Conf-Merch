import React from 'react'

const ProductCheckout = ({product}) => {
    return(
        <article className='products--checkout'>
            <h4>{product.title}</h4>
            <p>{product.price}</p>
        </article>
    )
}

export {ProductCheckout}