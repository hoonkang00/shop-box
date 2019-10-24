const reviewsListReducer = (state = {}, action) => {
  switch (action.type) {
    case "REVIEWS":
      return action.payload;
    case "UPDATE-REVIEWS":
      return {
        ...state,
        results: [...state.results, ...action.payload.results]
      };
    default:
      return state;
  }
};

export default reviewsListReducer;
