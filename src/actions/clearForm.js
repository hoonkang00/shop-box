const clearForm = () => {
  return dispatch => {
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
    dispatch({
      type: "CLEAR-REVIEW",
      payload: newReview
    });
  };
};

export default clearForm;
