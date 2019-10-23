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
    let p = this.getData();
  }

  getData() {
    this.props.listOfReviews();
  }

  render() {
    return (
      <div className="reviews">
        <Grid container spacing={4} className="hello testing">
          <Grid item>
            <div>Hello</div>
          </Grid>
          <Grid item>
            <ReviewList props={this.props.reviews.results} />
            <AddReview />
          </Grid>
        </Grid>
      </div>
    );
  }
}
