import React from 'react'

export default function RelatedItems(props) {
    return (
        <div>
            <button onClick={()=>{props.storeProductInfo(1)}}>click me!</button>
        </div>
    )
}
