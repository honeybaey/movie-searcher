import React from "react";
import "./MovieCard.scss";

const MovieCard = () => {
  return (
    <div className="movie-card">
      <img
        src="https://image.tmdb.org/t/p/w200/cxKeSarIhy2QmjwObAcJ0wlduJT.jpg"
        alt="Acting on Impulse"
      />
      <p className="movie-card__title">Acting on Impulse</p>
    </div>
  );
};

export default MovieCard;
