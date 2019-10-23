import axios from "axios";

const getReviewList = page => {
  const productID =
    //parseInt(window.location.href.split("products/")[1].substring(0, 1)) ||
    1;

  return dispatch => {
    return axios
      .get(`http://18.223.1.30/reviews/${productID}/list?count=2&page=1`)
      .then(({ data }) => {
        dispatch({
          type: "REVIEWS",
          payload: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export default getReviewList;
