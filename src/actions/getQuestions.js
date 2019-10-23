import axios from "axios";

let getQuestions = id => {
  return dispatch => {
    return (
      //need to update productid

      axios
        .get(`http://18.223.1.30/qa/${id}`)
        .then(({ data }) => {
          dispatch({ type: "GET_QUESTIONS", data });
        })
        .catch(err => {
          console.log(err);
        })
    );
  };
};

export default getQuestions;
