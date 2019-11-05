const updateReview = (event, newReview) => {
  if (event.target.name === "recommend") {
    if (event.target.value === "true") {
      newReview[event.target.name] = true;
    } else {
      newReview[event.target.name] = false;
    }
  } else {
    newReview[event.target.name] = event.target.value;
  }
};

export default updateReview;
