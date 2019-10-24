import axios from "axios";

let getProductStyles = productId => dispatch =>
  axios
    .get(`http://18.223.1.30/products/${productId}/styles`)
    .then(({ data }) => {
      dispatch({
        type: "UPDATE_CURRENT_PRODUCT_STYLES",
        styles: data.results
      });
    })
    .catch(err => {
      console.log(err.message);
    });

export default getProductStyles;
