import axios from "axios";

const updateHelpfulness = ([reviewId]) => {
  return dispatch => {
    return axios
      .put(`http://18.223.1.30/reviews/helpful/${reviewId}`)
      .then(({ data }) => {
        let filteredList = [];
        data.results.forEach(review => {
          if (Number(review.rating) === Number(rating)) {
            filteredList.push(review);
          }
        });
        data.results = filteredList;
        return data;
      })
      .then(data => {
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

export default updateHelpfulness;
