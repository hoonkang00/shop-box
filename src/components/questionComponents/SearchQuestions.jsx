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
    // if (e.target.value.length >= 3) {
    //   let searchQs = this.props.questions.filter(question => {
    //     return question.question_body.includes(e.target.value);
    //   });
    //   console.log("what search qs", searchQs);
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
