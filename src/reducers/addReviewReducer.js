const newReview = {
  rating: 0,
  summary: "",
  body: "",
  recommend: "",
  name: "",
  email: "",
  photos: [],
  characteristics: {}
};
const addReviewReducer = (state = newReview, action) => {
  switch (action.type) {
    case "ADD-REVIEW":
      return state;
    case "CLEAR-REVIEW":
      return action.payload;
    default:
      return state;
  }
};

export default addReviewReducer;
