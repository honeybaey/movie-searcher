import React, { Component } from "react";
import "./Search.scss";

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      query: "",
    };

    this.onEnterName = (e) => {
      this.setState({
        query: e.target.value,
      });
    };

    this.onSubmit = (e) => {
      e.preventDefault();
      this.props.onSearchPerson(this.state.query);
      this.setState({
        query: "",
      });
    };
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Введите фамилию"
          onChange={this.onEnterName}
          value={this.state.query}
        />
      </form>
    );
  }
}
