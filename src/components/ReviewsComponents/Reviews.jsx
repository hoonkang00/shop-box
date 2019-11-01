import React, { useEffect, useState } from "react";
import ReviewList from "./ReviewList.jsx";
import AddReview from "../../containers/RatingsReviewsContainers/ReviewsButtonsContainer.js";
import Ratings from "../../containers/RatingsReviewsContainers/StarsContainer.js";
import Sort from "../../containers/RatingsReviewsContainers/SortContainer.js";
import SearchBar from "material-ui-search-bar";
import getReviews from "../../actions/getNumberOfTotalReviews.js";

export default function Reviews(props) {
  const [results, setResults] = useState(props.reviews.results);
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState(false);
  const [searchResults, setsearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  let reviewList = searched ? filteredResults : results;

  useEffect(() => {
    props.listOfReviews([1, "REVIEWS", props.prodInfo.id]);
  }, [props.prodInfo.id]);

  useEffect(() => {
    setResults(props.reviews.results);
  }, [props.reviews.results]);

  const handleChange = event => {
    setSearchTerm(event);
    if (searched === false) {
      setSearched(true);
      getReviews(props.prodInfo.id)
        .then(data => {
          setsearchResults(data.results);
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (searchTerm.length >= 2) {
      filteredResults.forEach(review => {
        if (
          !review.summary.toUpperCase().includes(searchTerm.toUpperCase()) ||
          !review.body.toUpperCase().includes(searchTerm.toUpperCase())
        ) {
          let revIdx = filteredResults.indexOf(review);
          filteredResults.splice(revIdx, 1);
        }
      });
      let newResults = [];
      searchResults.forEach(review => {
        if (
          review.summary.toUpperCase().includes(searchTerm.toUpperCase()) ||
          review.body.toUpperCase().includes(searchTerm.toUpperCase())
        ) {
          newResults.push(review);
        }
      });
      setFilteredResults(newResults);
    } else {
      setSearched(false);
    }
  };
  const cancelSearch = () => {
    setSearchTerm("");
    setSearched(false);
  };

  return (
    <div className="ratings-reviews">
      <h5 className="ratings-reviews-heading">{"RATINGS & REVIEWS"}</h5>
      <div className="ratings-reviews-container">
        <div className="ratings-container">
          <Ratings />
        </div>
        <div className="reviews">
          <SearchBar
            placeholder="SEARCH FOR REVIEWS..."
            onChange={event => handleChange(event)}
            onCancelSearch={() => {
              cancelSearch();
              handleChange("");
            }}
            value={searchTerm}
            className="reviews-search-bar"
          />
          <Sort />
          <ReviewList props={reviewList} />
          <AddReview />
        </div>
      </div>
    </div>
  );
}
