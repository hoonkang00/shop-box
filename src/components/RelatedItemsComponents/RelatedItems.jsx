import React from 'react'

export default function RelatedItems(props) {
    let productID = parseInt(window.location.href.split('products/')[1].substring(0,1))
    return (
        <div>
            <button onClick={ ()=>{
                 props.setStoreProductInfo(productID)
                 props.setStoreReviewMetaData(productID)
                }}>click me!</button>
        </div>
    )
}
