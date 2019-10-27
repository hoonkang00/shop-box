import axios from "axios";

const addReview = (productId, newReview) => {
  return axios
    .post(`http://18.223.1.30/reviews/${productId}`, newReview)
    .catch(err => {
      console.log(err);
    });
};

export default addReview;
