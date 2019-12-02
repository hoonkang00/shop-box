import axios from "axios";

const reportReview = reviewId => {
  return axios
    .put(`http://3.134.102.30/reviews/report/${reviewId}`)
    .catch(err => {
      console.log(err);
    });
};

export default reportReview;
