import axios from "axios";

const getQuestions = () => {
  return dispatch => {
    return (
      //need to update productid
      axios
        .get("http://18.223.1.30/qa/1")
        .then(({ results }) => {
          dispatch({ type: "GET_QUESTIONS", results });
        })
        .catch(err => {
          console.log(err);
        })
    );
  };
};

export default getQuestions;
