import React from "react";

import "./MovieCard.scss";

const MovieCard = (props) => {
  const { title, img } = props;

  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w200${img}`} alt={title} />
      <p className="movie-card__title">{title}</p>
    </div>
  );
};

export default MovieCard;
