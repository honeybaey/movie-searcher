export default class MovieService {
  _apiKey = "9000047236c3b4a86957e392cead86b6";
  _query = "Дикаприо"; // пример
  _urlSearch = `https://api.themoviedb.org/3/search/person?api_key=${this._apiKey}&language=ru-RU&query=${this._query}`;
  _urlFilms = `https://api.themoviedb.org/3`;

  async getResource(url) {
    const res = await fetch(`${this._urlFilms}${url}`);

    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  }

  async getFilm(id) {
    const res = await this.getResource(`/movie/${id}?api_key=${this._apiKey}&language=ru-RU`);
    return res;
  }

  /* async searchPerson() {
    const res = await this.getResource();
    return res.results;
  } */
}

// const person = new MovieService();

// person.searchPerson().then((res) => {
//   console.log(res);
// });
