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
    this.setState({ searchTerm: e });
    if (e.length >= 3) {
      let searchQs = this.props.questions.filter(question => {
        return question.question_body.toUpperCase().includes(e.toUpperCase());
      });

      this.props.setQuestions(searchQs);
    } else {
      this.props.getQuestions(this.props.productId);
    }
  }
  cancelSearch() {
    this.setState({ searchTerm: "" });
  }
  render() {
    return (
      <SearchBar
        aria-label="search"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        onChange={e => this.handleChange(e)}
        onRequestSearch={() => console.log("onRequestSearch")}
        onCancelSearch={() => {
          this.cancelSearch();
          this.handleChange("");
        }}
        style={{
          margin: "10px auto"
        }}
        value={this.state.searchTerm}
      />
    );
  }
}
