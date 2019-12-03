import axios from "axios";

let getReviewMetaData = productID => {
  //assuming that the url has products/:productID

  return dispatch => {
    return axios
      .get(`http://3.134.102.30/reviews/${productID}/meta`)
      .then(({ data }) => {
        dispatch({
          type: "UPDATE_REVIEW_METADATA",
          data
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

export default getReviewMetaData;
