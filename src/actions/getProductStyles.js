import axios from "axios";
import selectStyle from "../actions/selectStyle";

let getProductStyles = productId => dispatch =>
  axios
    .get(`http://3.134.102.30/products/${productId}/styles`)
    .then(({ data }) => {
      const defaultIndex = data.results.reduce(
        (memo, item, index) => (item["default?"] === 1 ? index : memo),
        0
      );
      dispatch(selectStyle(defaultIndex));
      dispatch({
        type: "UPDATE_CURRENT_PRODUCT_STYLES",
        styles: data.results
      });
    })
    .catch(err => {
      console.log(err.message);
    });

export default getProductStyles;
