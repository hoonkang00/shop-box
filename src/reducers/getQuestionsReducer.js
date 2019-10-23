function getQuestionsReducer(state = {}, action) {
  switch (action.type) {
    case "GET_QUESTIONS":
      return {
        questions: action.results
      };
    default:
      return state;
  }
}

export default getQuestionsReducer;
