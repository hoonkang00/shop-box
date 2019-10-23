const reviewsListReducer = (state = {}, action) => {
  switch (action.type) {
    case "REVIEWS":
      return action.data;
    default:
      return state;
  }
};

export default reviewsListReducer;
