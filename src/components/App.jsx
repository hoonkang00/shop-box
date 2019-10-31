import React, { useState, useEffect } from "react";
import ProductDetailsContainer from "../containers/ProductDetailsContainer.js";
import RelatedItems from "./RelatedItemsComponents/RelatedItems.jsx";
import ReviewsContainer from "../containers/RatingsReviewsContainers/ReviewsContainer.js";
import QAContainer from "../containers/QAContainer.js";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Nav from "./Nav.jsx";
import Grid from "@material-ui/core/Grid";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

const ScrollToTop = props => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = props => {
  return (
    <Router>
      <ScrollToTop />
      <div className="components">
        <Nav />
        <Switch>
          <Route path="/products/">
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <ProductDetailsContainer />
              </Grid>
              <Grid item xs={11}>
                <RelatedItems />
              </Grid>
              <Grid item xs={11}>
                <QAContainer />
              </Grid>
              <Grid item xs={11}>
                <ReviewsContainer />
              </Grid>
            </Grid>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
