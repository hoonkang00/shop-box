import axios from "axios";

const getTotalReviews = productID => {
  return axios
    .get(`http://3.134.102.30/reviews/${productID}/list?count=100000`)
    .then(({ data }) => {
      return data;
    })
    .catch(err => {
      console.log(err);
    });
};

export default getTotalReviews;
