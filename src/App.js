import React, { Component } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import MovieService from "./services/MovieService";
import MovieList from "./components/MovieList/MovieList";
import About from "./components/About/About";
import ErrorIndicator from "./components/ErrorIndicator/ErrorIndicator";

export default class App extends Component {
  movieService = new MovieService();

  constructor() {
    super();

    this.state = {
      films: [],
      isLoaded: false,
      error: false,
    };

    this.onError = (err) => {
      this.setState({
        error: true,
      });
    };

    this.searchPerson = (query) => {
      this.movieService
        .getPerson(query)
        .then((person) => {
          const film = person[0].known_for;
          let filmsArr = [];
          film.forEach((item) => {
            filmsArr.push({ title: item.title, img: item.poster_path });
          });
          this.setState({
            films: filmsArr,
            isLoaded: true,
          });
        })
        .catch(this.onError);
    };
  }

  render() {
    const { isLoaded, films, error } = this.state;
    return (
      <div>
        <Header />
        {
          !error 
          ? <div className="container">
              <Search onSearchPerson={this.searchPerson} />
              {!isLoaded ? <About /> : null}
              <MovieList films={films} />
            </div>
          : <ErrorIndicator />
        }
      </div>
    );
  }
}
