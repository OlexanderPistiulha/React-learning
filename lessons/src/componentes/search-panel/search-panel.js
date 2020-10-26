import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trem: "",
    };
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({
      term: term,
    });
    this.props.onUpdateSearch(term); // не рекурсия а просто передача проперти
  };
  render() {
    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="search"
        onChange={this.onUpdateSearch}
      />
    );
  }
}
