import React, { Component } from "react";

class SearchBar extends Component {
  handleQuery(e) {
    this.props.onQuery(e.target.value);
  }
  render() {
    return (
      <div className="search-bar">
        <input onChange={this.handleQuery.bind(this)} placeholder="Search" />
      </div>
    );
  }
}

export default SearchBar;
