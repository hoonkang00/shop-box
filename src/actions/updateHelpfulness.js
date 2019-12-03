import axios from "axios";

const updateHelpfulness = reviewId => {
  return axios
    .put(`http://3.134.102.30/reviews/helpful/${reviewId}`)
    .catch(err => {
      console.log(err);
    });
};

export default updateHelpfulness;
