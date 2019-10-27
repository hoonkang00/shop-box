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
      return action.data;
    default:
      return state;
  }
};

export default addReviewReducer;
