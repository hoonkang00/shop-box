import React, { Component } from "react";
import ReviewList from "./ReviewList.jsx";
import AddReview from "./ReviewButtons.jsx";
import Grid from "@material-ui/core/Grid";

export default class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.props.listOfReviews([1, "REVIEWS"]);
  }

  render() {
    return (
      <div className="Ratings-Reviews">
        <Grid container spacing={4} className="hello testing">
          <Grid item>
            <div>Hello</div>
          </Grid>
          <Grid item className="Reviews">
            <ReviewList props={this.props.reviews.results} />
            <AddReview handleClick={this.props} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
