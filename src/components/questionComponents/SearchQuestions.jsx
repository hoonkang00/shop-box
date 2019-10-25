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
        return question.question_body.includes(e);
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
        onChange={e => this.handleChange(e)}
        onRequestSearch={() => console.log("onRequestSearch")}
        onCancelSearch={() => {
          this.cancelSearch();
          this.handleChange("");
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
