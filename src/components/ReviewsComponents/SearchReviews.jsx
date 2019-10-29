import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
import getReviews from "../../actions/getNumberOfTotalReviews.js";
import getReviewList from "../../actions/getReviewList.js";

const SeachReviews = ({ reviewList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState(false);
  const [results, setResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event);
    if (searched === false) {
      setSearched(true);
      getReviews(reviewList.product)
        .then(data => {
          reviewList["search"] = true;
          setResults(data.results);
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (searchTerm.length >= 3) {
      console.log(results);
      results.forEach(review => {
        if (
          review.summary.includes(searchTerm) ||
          review.body.includes(searchTerm)
        ) {
          reviewList.results.push(review);
        }
      });
      reviewList.results.forEach(review => {
        if (
          !review.summary.includes(searchTerm) ||
          !review.body.includes(searchTerm)
        ) {
          let revIdx = reviewList.results.indexOf(review);
          reviewList.results.splice(revIdx, 1);
        }
      });
    } else if (searched === true) {
      setSearched(false);
    }
  };
  const cancelSearch = () => {
    getReviewList([1, "REVIEWS", prodId]);
  };

  return (
    <SearchBar
      placeholder="SEARCH FOR REVIEWS..."
      onChange={e => handleChange(e)}
      onRequestSearch={() => console.log("onRequestSearch")}
      onCancelSearch={() => {
        cancelSearch();
        handleChange("");
      }}
      style={{
        margin: "0 auto",
        maxWidth: 800
      }}
      value={searchTerm}
    />
  );
};

export default SeachReviews;
