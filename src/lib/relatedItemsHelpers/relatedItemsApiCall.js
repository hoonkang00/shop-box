import axios from "axios";
import * as Promise from "bluebird";

const getRelatedItems = async productID => {
  const PromiseAllWrapper = arr => {
    return Promise.all(arr);
  };
  let myData, relatedItems;
  try {
    let { data } = await axios.get(
      `http://3.134.102.30/products/${productID}/related`
    );
    relatedItems = data;
  } catch (err) {
    console.log(err);
  }

  let relatedReviews = relatedItems.slice();
  //returns an array of the product ids
  let productInfos = relatedItems.map(id => {
    return axios.get(`http://3.134.102.30/products/${id}`);
  });

  let productReviews = relatedReviews.map(id => {
    return axios.get(`http://3.134.102.30/reviews/${id}/meta`);
  });

  let productStyles = relatedReviews.map(id => {
    return axios.get(`http://3.134.102.30/products/${id}/styles`);
  });

  let doItAllAtOnce = [
    PromiseAllWrapper(productInfos),
    PromiseAllWrapper(productReviews),
    PromiseAllWrapper(productStyles)
  ];
  myData = await Promise.all(doItAllAtOnce);
  let combinedData = [];
  for (let i = 0; i < myData[0].length; i++) {
    let combined = {
      ...myData[0][i].data,
      ...myData[1][i].data,
      ...myData[2][i].data
    };

    //styles comes in results
    combinedData.push(combined);
  }

  return combinedData;
};

export default getRelatedItems;
