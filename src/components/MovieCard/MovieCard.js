import React, { Component } from "react";

import "./MovieCard.scss";

export default class MovieCard extends Component {

  render() {
    const { img, title } = this.props;

    return (
      <div className="movie-card">
        <img src={`https://image.tmdb.org/t/p/w200${img}`} alt={title} />
        <p className="movie-card__title">{title}</p>
      </div>
    );
  }
}
