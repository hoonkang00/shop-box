import axios from 'axios'



let getProductInfo = ()=>{

    //assuming that the url has products/:productID
    let productID = parseInt(window.location.href.split('products/')[1].substring(0,1))
    console.log(productID)



    return (dispatch)=>{
        return (
            axios.get(`http://18.223.1.30/products/${productID}`)
            .then(({data})=>{
                dispatch({
                    type:"UPDATE_CURRENT_PRODUCT",
                    data
                })
            }).catch(err=>{
                console.log(err.message)
            })
        )


    }

}


export default getProductInfo