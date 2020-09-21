import React from "react";
import MovieCard from "../MovieCard/MovieCard";

import "./MovieList.scss";

const MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.films.map((item) => (
        <MovieCard key={item.title} {...item} />
      ))}
    </div>
  );
};

export default MovieList;
