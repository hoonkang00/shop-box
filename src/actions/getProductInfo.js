import axios from 'axios'



let getProductInfo = (productID)=>{

    //assuming that the url has products/:productID




    return (dispatch)=>{
        return (
            axios.get(`http://3.134.102.30/products/${productID}`)
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