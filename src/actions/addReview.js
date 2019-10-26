import axios from "axios";

const addReview = productId => {
  return axios.put(`http://18.223.1.30/reviews/${productId}`).catch(err => {
    console.log(err);
  });
};

export default addReview;
