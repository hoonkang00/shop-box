const reviewsListReducer = (state = {}, action) => {
  switch (action.type) {
    case "REVIEWS":
      return action.payload;
    default:
      return state;
  }
};

export default reviewsListReducer;
