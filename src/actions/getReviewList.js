import axios from "axios";

const getReviewList = ([page, actionType, productID, count = 2, sort = ""]) => {
  return dispatch => {
    return axios
      .get(
        `http://18.223.1.30/reviews/${productID}/list?count=${count}&page=${page}&sort=${sort}`
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
