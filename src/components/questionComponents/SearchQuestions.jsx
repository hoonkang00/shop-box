import React, { Component } from "react";
import SearchBar from "material-ui-search-bar";

export default class SearchQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
    this.handleChange = this.handleChange.bind(this);
    this.cancelSearch = this.cancelSearch.bind(this);
  }
  handleChange(e) {
    if (e.length >= 3) {
      console.log("checking", e);
      console.log(this.props.questions[0].question_body);
      console.log(this.props.questions[0].question_body.includes(e));
      let searchQs = this.props.questions.filter(question => {
        return question.question_body.includes(e);
      });
      console.log("what search qs", searchQs);
      this.props.setQuestions(searchQs);
    } else {
      // console.log(this.props);
      this.props.getQuestions(this.props.productId);
    }
    // if (e.target.value.length >= 3) {
    //   //get request for all questions
    //   //for each question body of each question, if string INCLUDES e.target.value
    //   //add question obj to parent component
    // }
    this.setState({ searchTerm: e });
  }
  cancelSearch() {
    this.setState({ searchTerm: "" });
  }
  render() {
    return (
      <SearchBar
        onChange={e => this.handleChange(e)}
        onRequestSearch={() => console.log("onRequestSearch")}
        onCancelSearch={() => {
          this.cancelSearch();
        }}
        style={{
          margin: "0 auto",
          maxWidth: 800
        }}
        value={this.state.searchTerm}
      />
    );
  }
}
