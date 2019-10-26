import axios from "axios";

const updateHelpfulness = reviewId => {
  return axios
    .put(`http://18.223.1.30/reviews/helpful/${reviewId}`)
    .catch(err => {
      console.log(err);
    });
};

export default updateHelpfulness;
