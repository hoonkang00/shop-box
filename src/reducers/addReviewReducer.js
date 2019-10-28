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
    default:
      return state;
  }
};

export default addReviewReducer;
