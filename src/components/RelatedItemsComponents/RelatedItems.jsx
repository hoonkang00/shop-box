import React from 'react';
import ItemListContainer from '../../containers/RelatedItemsContainers/ItemListContainer.js'
import MyOutfitsListContainer from '../../containers/RelatedItemsContainers/MyOutfitsListContainer.js'


export default function RelatedItems(props) {
    return (
        <div>
            
            <ItemListContainer/>
            <MyOutfitsListContainer/>
        </div>
    )
}
