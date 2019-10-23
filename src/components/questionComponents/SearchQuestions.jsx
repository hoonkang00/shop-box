import React, { Component } from "react";
import SearchBar from "material-ui-search-bar";

export default class SearchQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    console.log(e);
  }
  render() {
    return (
      <SearchBar
        onChange={e => this.onChange(e)}
        onRequestSearch={() => console.log("onRequestSearch")}
        style={{
          margin: "0 auto",
          maxWidth: 800
        }}
        value={this.state.searchTerm}
      />
    );
  }
}
