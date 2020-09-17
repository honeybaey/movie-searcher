import React, { Component } from "react";
import MovieService from "../../services/MovieService";

import "./MovieCard.scss";

export default class MovieCard extends Component {
  movieService = new MovieService();

  constructor() {
    super();

    this.state = {
      img: null,
      alt: "",
      title: "",
    };

    // this.updateFilm();
  }

  componentDidMount() {
    this.updateFilm();
  }

  updateFilm() {
    this.movieService.getFilm(136).then((film) => {
      this.setState({
        img: film.poster_path,
        alt: film.title,
        title: film.title,
      });
      console.log(film)
    });
  }

  render() {
    const { img, alt, title } = this.state;

    return (
      <div className="movie-card">
        <img src={`https://image.tmdb.org/t/p/w200${img}`} alt={alt} />
        <p className="movie-card__title">{title}</p>
      </div>
    );
  }
}
