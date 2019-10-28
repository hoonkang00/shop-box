import axios from "axios";

const getNumberOfTotalReviews = productID => {
  return axios
    .get(`http://18.223.1.30/reviews/${productID}/list?count=100000`)
    .then(({ data }) => {
      return data;
    })
    .catch(err => {
      console.log(err);
    });
};

export default getNumberOfTotalReviews;
