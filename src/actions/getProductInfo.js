import axios from 'axios'



let getProductInfo = (id)=>{

    return (dispatch)=>{
        return (
            axios.get(`http://18.223.1.30/products/${id}`)
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