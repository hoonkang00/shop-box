import axios from "axios";

const getReviewList = ([page, actionType, options = {}]) => {
  const productID = parseInt(
    window.location.href.split("products/")[1].substring(0, 1)
  );

  let queryOptions = {
    rating: options.rating || "",
    sort: options.sort || ""
  };
  return dispatch => {
    return axios
      .get(
        `http://18.223.1.30/reviews/${productID}/list?count=2&page=${page}&rating=${queryOptions.rating}&sort=${queryOptions.sort}`
      )
      .then(({ data }) => {
        dispatch({
          type: actionType === "REVIEWS" ? "REVIEWS" : "UPDATE-REVIEWS",
          payload: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export default getReviewList;
