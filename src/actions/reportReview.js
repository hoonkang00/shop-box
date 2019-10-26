import axios from "axios";

const reportReview = reviewId => {
  return axios
    .put(`http://18.223.1.30/reviews/report/${reviewId}`)
    .catch(err => {
      console.log(err);
    });
};

export default reportReview;
